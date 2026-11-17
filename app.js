const STORAGE_KEY = "mypet-care-data-v1";
const today = new Date();
const isoDate = (date) => {
  const d = new Date(date);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};
const dayOffset = (amount) => isoDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + amount));
const shortDate = (value, options = { month: "short", day: "numeric" }) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("en-US", options);
const makeId = () => `id-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`;
const emojiFor = (species) => species === "Cat" ? "🐱" : species === "Dog" ? "🐶" : "🐾";

function starterData() {
  return {
    pets: [
      { id: "milo", name: "Milo", species: "Dog", breed: "Golden retriever", birthday: "2021-05-14", weight: "28", notes: "", color: "#f8e9d8" },
      { id: "luna", name: "Luna", species: "Cat", breed: "British shorthair", birthday: "2022-09-02", weight: "4.6", notes: "", color: "#e7edf4" }
    ],
    medications: [
      { id: "med1", petId: "milo", name: "Joint support", dose: "1 chew · with breakfast", time: "08:00", schedule: "Daily", startDate: dayOffset(-30), active: true },
      { id: "med2", petId: "milo", name: "Omega-3 oil", dose: "1 pump · with food", time: "18:30", schedule: "Daily", startDate: dayOffset(-12), active: true },
      { id: "med3", petId: "luna", name: "Dental gel", dose: "Small amount · brush gently", time: "20:00", schedule: "Daily", startDate: dayOffset(-18), active: true }
    ],
    vaccinations: [
      { id: "vac1", petId: "milo", name: "Rabies booster", date: dayOffset(-80), nextDate: dayOffset(12), clinic: "Greenwood Animal Clinic", notes: "" },
      { id: "vac2", petId: "milo", name: "DHPP", date: dayOffset(-160), nextDate: dayOffset(38), clinic: "Greenwood Animal Clinic", notes: "" },
      { id: "vac3", petId: "luna", name: "FVRCP", date: dayOffset(-100), nextDate: dayOffset(24), clinic: "Oak & Paws Vet", notes: "" }
    ],
    grooming: [
      { id: "groom1", petId: "milo", name: "Bath & brush", date: dayOffset(-18), nextDate: dayOffset(10), provider: "The Fluffy Club", notes: "" },
      { id: "groom2", petId: "luna", name: "Nail trim", date: dayOffset(-26), nextDate: dayOffset(18), provider: "At home", notes: "" }
    ],
    completions: {}
  };
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return starterData();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.pets) || !Array.isArray(parsed.medications)) return starterData();
    return { ...starterData(), ...parsed };
  } catch (error) {
    console.error("Could not load My Pet records:", error);
    return starterData();
  }
}

let data = loadData();
let activePetId = data.pets[0]?.id || null;
let currentView = "overview";
let recordFilter = "all";
let toastTimer;
const byId = (id) => document.getElementById(id);
const safe = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const petById = (id) => data.pets.find((pet) => pet.id === id);
const selectedPet = () => petById(activePetId);
const selectedItems = (items) => items.filter((item) => item.petId === activePetId);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function setHeader() {
  const now = new Date();
  byId("today-date").textContent = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  byId("short-date").textContent = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  byId("greeting").textContent = hour < 12 ? "A GOOD DAY TOGETHER" : "HERE'S TO A GOOD DAY";
  byId("page-title").innerHTML = `${greeting}, Alex <span class="wave">✦</span>`;
}

function renderPets() {
  byId("pet-list").innerHTML = data.pets.map((pet) => `
    <button class="pet-item ${pet.id === activePetId ? "selected" : ""}" data-pet-id="${safe(pet.id)}">
      <span class="pet-avatar" style="background:${safe(pet.color || "#edf2ea")}">${emojiFor(pet.species)}</span>
      <span><strong>${safe(pet.name)}</strong><small>${safe(pet.breed || pet.species)}</small></span>
    </button>`).join("") || '<div class="no-pets">Add a pet to get started</div>';
  byId("med-count").textContent = selectedItems(data.medications).filter((med) => med.active).length;
  const pet = selectedPet();
  byId("page-subtitle").textContent = pet
    ? `A little care goes a long way. Here's what's happening for ${pet.name} today.`
    : "Add a pet to start keeping all their care in one happy place.";
  byId("pet-hero").classList.toggle("no-pet-hero", !pet);
}

function isComplete(med) {
  return Boolean(data.completions[`${dayOffset(0)}:${med.id}`]);
}

function getTodayItems() {
  const meds = selectedItems(data.medications).filter((med) => med.active).map((med) => ({
    id: med.id, type: "medicine", title: med.name, detail: med.dose, time: med.time || "Any time", done: isComplete(med)
  }));
  const dueVaccines = selectedItems(data.vaccinations).filter((record) => record.nextDate === dayOffset(0)).map((record) => ({
    id: record.id, type: "vaccine", title: record.name, detail: "Vaccination due", time: "Today"
  }));
  const dueGrooming = selectedItems(data.grooming).filter((record) => record.nextDate === dayOffset(0)).map((record) => ({
    id: record.id, type: "grooming", title: record.name, detail: "Grooming reminder", time: "Today"
  }));
  return [...meds, ...dueVaccines, ...dueGrooming].sort((a, b) => a.time.localeCompare(b.time));
}

function renderToday() {
  const items = getTodayItems();
  const el = byId("today-care-list");
  if (!items.length) {
    el.innerHTML = '<div class="empty-state">Nothing scheduled today. Enjoy a little extra playtime. ✦</div>';
    return;
  }
  el.innerHTML = items.map((item) => `
    <div class="care-item">
      <span class="care-symbol ${item.type}">${item.type === "medicine" ? "✚" : item.type === "vaccine" ? "♡" : "✧"}</span>
      <span class="care-copy"><strong>${safe(item.title)}</strong><span>${safe(item.detail)}</span></span>
      <span class="care-time">${safe(item.time)}</span>
      ${item.type === "medicine" ? `<button class="done-button ${item.done ? "done" : ""}" data-complete="${safe(item.id)}" aria-label="${item.done ? "Mark as not given" : "Mark as given"}">${item.done ? "✓" : "✓"}</button>` : "" }
    </div>`).join("");
}

function getUpcoming() {
  const entries = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, type: "vaccine" })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, type: "grooming" }))
  ].filter((item) => item.nextDate).sort((a, b) => a.nextDate.localeCompare(b.nextDate));
  return entries.slice(0, 3);
}

function renderUpcoming() {
  const entries = getUpcoming();
  byId("upcoming-list").innerHTML = entries.length ? entries.map((item) => {
    const days = Math.round((new Date(`${item.nextDate}T12:00:00`) - new Date(`${dayOffset(0)}T12:00:00`)) / 86400000);
    const date = new Date(`${item.nextDate}T12:00:00`);
    return `<div class="upcoming-item">
      <span class="mini-date"><b>${date.getDate()}</b><small>${date.toLocaleDateString("en-US", { month: "short" })}</small></span>
      <span class="upcoming-copy"><strong>${safe(item.name)}</strong><span>${item.type === "vaccine" ? "Vaccination" : "Grooming"} · ${days < 0 ? `${Math.abs(days)} days overdue` : days === 0 ? "Due today" : `In ${days} days`}</span></span>
      <span class="upcoming-tag ${days <= 14 ? "soon" : ""}">${days < 0 ? "Overdue" : days === 0 ? "Today" : `${days} days`}</span>
    </div>`;
  }).join("") : '<div class="empty-state">Your next dates will show up here.</div>';
}

function renderStats() {
  const pet = selectedPet();
  const meds = selectedItems(data.medications).filter((med) => med.active);
  const records = [...selectedItems(data.vaccinations), ...selectedItems(data.grooming)];
  const upcoming = getUpcoming()[0];
  const dueSoon = records.filter((item) => item.nextDate && item.nextDate >= dayOffset(0) && item.nextDate <= dayOffset(30)).length;
  byId("stats-grid").innerHTML = `
    <article class="stat-card"><span class="stat-icon green">♡</span><span class="stat-copy"><strong>${pet ? 1 : 0}</strong><p>Happy ${pet ? safe(pet.species.toLowerCase()) : "pet"}</p><small>${pet ? `${safe(pet.name)} is in your care` : "Add a pet profile"}</small></span></article>
    <article class="stat-card"><span class="stat-icon peach">✚</span><span class="stat-copy"><strong>${meds.length}</strong><p>Active medications</p><small>${meds.filter(isComplete).length} doses done today</small></span></article>
    <article class="stat-card"><span class="stat-icon blue">▣</span><span class="stat-copy"><strong>${records.length}</strong><p>Care records</p><small>Vaccines & grooming</small></span></article>
    <article class="stat-card"><span class="stat-icon pink">◷</span><span class="stat-copy"><strong>${dueSoon}</strong><p>Coming up soon</p><small>${upcoming ? `${safe(upcoming.name)} · ${shortDate(upcoming.nextDate)}` : "No upcoming reminders"}</small></span></article>`;
}

function renderRecords() {
  const records = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, type: "vaccination", provider: item.clinic || "Clinic visit" })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, type: "grooming", provider: item.provider || "Grooming visit" }))
  ].filter((item) => recordFilter === "all" || item.type === recordFilter)
    .sort((a, b) => b.date.localeCompare(a.date));
  byId("records-list").innerHTML = records.length ? records.map((item) => `
    <div class="record-row">
      <span class="record-icon ${item.type}">${item.type === "vaccination" ? "♡" : "✧"}</span>
      <span class="record-main"><strong>${safe(item.name)}</strong><span>${item.type === "vaccination" ? "Vaccination" : "Grooming"} · ${safe(item.provider)}</span></span>
      <span class="record-meta"><strong>${shortDate(item.date)}</strong><span>Completed</span></span>
      <span class="record-tag ${item.nextDate < dayOffset(0) ? "past" : ""}">${item.nextDate ? `Next · ${shortDate(item.nextDate)}` : "No reminder"}</span>
    </div>`).join("") : '<div class="empty-state">No records yet. Add a vaccination or grooming visit to keep this space up to date.</div>';
}

function renderMedications() {
  const meds = selectedItems(data.medications).filter((med) => med.active);
  byId("med-summary").innerHTML = `<div class="med-summary-card"><strong>${meds.length}</strong><span>Active medications</span></div><div class="med-summary-card"><strong>${meds.filter(isComplete).length} / ${meds.length}</strong><span>Doses given today</span></div><div class="med-summary-card"><strong>${meds.length - meds.filter(isComplete).length}</strong><span>Still to give</span></div>`;
  byId("medications-list").innerHTML = meds.length ? meds.map((med) => `
    <article class="medication-card">
      <span class="care-symbol medicine">✚</span>
      <span class="medication-info"><strong>${safe(med.name)}</strong><span>${safe(med.dose)} · ${safe(med.schedule || "Daily")}</span></span>
      <span class="medication-schedule">${safe(med.time || "Any time")}<br>${isComplete(med) ? "Given today" : "Next dose"}</span>
      <button class="done-button ${isComplete(med) ? "done" : ""}" data-complete="${safe(med.id)}" aria-label="${isComplete(med) ? "Mark as not given" : "Mark as given"}">✓</button>
      <button class="delete-entry" data-delete-med="${safe(med.id)}" aria-label="Remove ${safe(med.name)}">×</button>
    </article>`).join("") : '<div class="empty-state">No active medications for this pet. Add a medication to keep their routine on track.</div>';
}

function render() {
  setHeader();
  renderPets();
  renderStats();
  renderToday();
  renderUpcoming();
  renderRecords();
  renderMedications();
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === currentView));
  byId("crumb-current").textContent = currentView === "overview" ? "Overview" : currentView === "records" ? "Health records" : "Medications";
  byId("page-title").innerHTML = currentView === "overview"
    ? `${new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 17 ? "Good afternoon" : "Good evening"}, Alex <span class="wave">✦</span>`
    : currentView === "records" ? "A little history, a lot of love <span class=\"wave\">✦</span>" : "The medication routine <span class=\"wave\">✦</span>";
  byId("page-subtitle").textContent = currentView === "overview"
    ? selectedPet() ? `A little care goes a long way. Here's what's happening for ${selectedPet().name} today.` : "Add a pet to start keeping all their care in one happy place."
    : currentView === "records" ? "Keep every vaccination and grooming visit close at hand." : "A calm, consistent routine makes all the difference.";
  byId("overview-section").hidden = currentView !== "overview";
  byId("overview-content").hidden = currentView !== "overview";
  byId("records-section").hidden = currentView !== "records";
  byId("medications-section").hidden = currentView !== "medications";
  byId("add-care-button").hidden = currentView !== "overview";
}

function field(label, name, type = "text", value = "", options = {}) {
  const full = options.full ? " full" : "";
  const required = options.required ? " required" : "";
  let control;
  if (type === "select") {
    control = `<select name="${name}"${required}>${options.values.map((option) => `<option value="${safe(option)}" ${value === option ? "selected" : ""}>${safe(option)}</option>`).join("")}</select>`;
  } else if (type === "textarea") {
    control = `<textarea name="${name}" placeholder="${safe(options.placeholder || "")}">${safe(value)}</textarea>`;
  } else {
    control = `<input name="${name}" type="${type}" value="${safe(value)}" placeholder="${safe(options.placeholder || "")}"${required}${options.step ? ` step="${options.step}"` : ""}>`;
  }
  return `<div class="field${full}"><label>${safe(label)}</label>${control}</div>`;
}

function openDialog(kind) {
  if (kind !== "pet" && !selectedPet()) {
    showToast("Add a pet profile before recording care.");
    openDialog("pet");
    return;
  }
  const title = kind === "pet" ? "Add a pet" : kind === "medication" ? "Add medication" : kind === "vaccination" ? "Add vaccination" : "Add grooming visit";
  byId("dialog-title").textContent = title;
  byId("dialog-eyebrow").textContent = kind === "pet" ? "A NEW BEST FRIEND" : "A LITTLE MORE LOVE";
  let fields = "";
  if (kind === "pet") {
    fields = field("Pet's name", "name", "text", "", { required: true }) +
      field("Pet type", "species", "select", "Dog", { values: ["Dog", "Cat", "Other"] }) +
      field("Breed", "breed") + field("Birthday", "birthday", "date") +
      field("Weight (kg)", "weight", "number", "", { step: "0.1" }) +
      field("A little note", "notes", "textarea", "", { full: true, placeholder: "Favorite toy, care notes..." });
  } else if (kind === "medication") {
    fields = field("Medication name", "name", "text", "", { required: true }) +
      field("Dose time", "time", "time", "08:00") +
      field("Dose & instructions", "dose", "text", "", { full: true, required: true, placeholder: "e.g. 1 tablet with breakfast" }) +
      field("Schedule", "schedule", "select", "Daily", { values: ["Daily", "Twice daily", "Weekly", "As needed"] }) +
      field("Start date", "startDate", "date", dayOffset(0));
  } else if (kind === "vaccination") {
    fields = field("Vaccine", "name", "text", "", { required: true }) +
      field("Next due date", "nextDate", "date", "", { required: true }) +
      field("Given on", "date", "date", dayOffset(0)) +
      field("Clinic", "clinic", "text", "", { placeholder: "Clinic name" }) +
      field("Notes", "notes", "textarea", "", { full: true });
  } else {
    fields = field("Grooming service", "name", "text", "", { required: true }) +
      field("Next visit", "nextDate", "date", "") +
      field("Visit date", "date", "date", dayOffset(0)) +
      field("Provider", "provider", "text", "", { placeholder: "Groomer or at home" }) +
      field("Notes", "notes", "textarea", "", { full: true });
  }
  byId("dialog-fields").innerHTML = fields;
  byId("entry-form").dataset.kind = kind;
  byId("entry-dialog").showModal();
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.view) {
    currentView = target.dataset.view;
    render();
  }
  if (target.dataset.petId) {
    activePetId = target.dataset.petId;
    render();
  }
  if (target.id === "add-pet-quick") openDialog("pet");
  if (target.id === "add-care-button") openDialog("medication");
  if (target.dataset.addType) openDialog(target.dataset.addType);
  if (target.dataset.recordTab) {
    recordFilter = target.dataset.recordTab;
    document.querySelectorAll(".record-tab").forEach((tab) => tab.classList.toggle("active", tab === target));
    renderRecords();
  }
  if (target.dataset.complete) {
    const key = `${dayOffset(0)}:${target.dataset.complete}`;
    if (data.completions[key]) delete data.completions[key];
    else data.completions[key] = true;
    save();
    render();
    showToast(data.completions[key] ? "Dose marked as given. Nice work!" : "Dose marked as not given.");
  }
  if (target.dataset.deleteMed) {
    const med = data.medications.find((item) => item.id === target.dataset.deleteMed);
    if (med && window.confirm(`Remove ${med.name} from this pet's medication list?`)) {
      data.medications = data.medications.filter((item) => item.id !== med.id);
      save();
      render();
      showToast("Medication removed.");
    }
  }
  if (target.classList.contains("close-dialog") || target.classList.contains("cancel-dialog")) byId("entry-dialog").close();
});

byId("entry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form).entries());
  const kind = form.dataset.kind;
  if (kind === "pet") {
    data.pets.push({ id: makeId(), name: values.name.trim(), species: values.species, breed: values.breed.trim(), birthday: values.birthday, weight: values.weight, notes: values.notes.trim(), color: values.species === "Cat" ? "#e7edf4" : "#f8e9d8" });
    activePetId = data.pets[data.pets.length - 1].id;
  } else {
    const record = { id: makeId(), petId: activePetId, ...values };
    if (kind === "medication") {
      record.active = true;
      data.medications.push(record);
      currentView = "medications";
    } else if (kind === "vaccination") {
      data.vaccinations.push(record);
      currentView = "records";
    } else {
      data.grooming.push(record);
      currentView = "records";
    }
  }
  save();
  byId("entry-dialog").close();
  render();
  showToast(kind === "pet" ? "Your pet's profile is ready!" : "Care record saved.");
});

byId("entry-dialog").addEventListener("click", (event) => {
  if (event.target === byId("entry-dialog")) byId("entry-dialog").close();
});

setHeader();
render();
