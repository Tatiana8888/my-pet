const STORAGE_KEY = "mypet-care-data-v1";
const LANGUAGE_KEY = "mypet-language-v1";
const PUBLIC_SITE_URL = "https://tatiana8888.github.io/my-pet/";
const MAX_DOCUMENT_BYTES = 10 * 1024 * 1024;
const LANGUAGES = ["en", "ru", "es", "fr", "de"];
const LOCALE_TAGS = { en: "en-US", ru: "ru-RU", es: "es-ES", fr: "fr-FR", de: "de-DE" };
const SOCIAL_LOCALES = { en: "en_US", ru: "ru_RU", es: "es_ES", fr: "fr_FR", de: "de_DE" };
const messages = Object.fromEntries([
  ["yourSpace", "YOUR SPACE", "ВАШЕ ПРОСТРАНСТВО", "TU ESPACIO", "VOTRE ESPACE", "DEIN BEREICH"],
  ["metaTitle", "My Pet — thoughtful pet care, every day", "My Pet — забота о питомцах каждый день", "My Pet — cuidado para mascotas cada día", "My Pet — prendre soin de son animal chaque jour", "My Pet — liebevolle Tierpflege jeden Tag"],
  ["metaDescription", "Track medicines, vaccinations, deworming, weight, meals, grooming, and pet documents, then prepare symptom notes for your vet.", "Следите за лекарствами, прививками, дегельминтизацией, весом, питанием, грумингом и документами, готовьте заметки для ветеринара.", "Organiza medicamentos, vacunas, desparasitación, peso, comidas, peluquería y documentos, y prepara notas para el veterinario.", "Suivez traitements, vaccins, vermifugation, poids, repas, toilettage et documents, et préparez vos notes pour le vétérinaire.", "Verwalte Medikamente, Impfungen, Entwurmung, Gewicht, Mahlzeiten, Pflege und Dokumente und bereite Notizen für den Tierarzt vor."],
  ["onboardingEyebrow", "A FRESH START FOR YOUR FAMILY", "ЗАБОТА О ПИТОМЦЕ НАЧИНАЕТСЯ ЗДЕСЬ", "UN NUEVO COMIENZO PARA VUESTRA FAMILIA", "UN NOUVEAU DÉPART POUR VOTRE FAMILLE", "EIN LIEBEVOLLER START FÜR DEINE FAMILIE"],
  ["onboardingTitle", "A happier care routine starts with your pet.", "Забота о питомце начинается с его профиля.", "Una rutina de cuidados más fácil empieza con tu mascota.", "Une routine de soins plus sereine commence avec votre animal.", "Eine entspanntere Pflegeroutine beginnt mit deinem Tier."],
  ["onboardingDescription", "Create a profile for medications, vaccinations, deworming, weight, meals, grooming, documents, and vet-visit prep.", "Создайте профиль питомца для лекарств, прививок, дегельминтизации, веса, питания, груминга, документов и подготовки к визиту к ветеринару.", "Crea un perfil para medicamentos, vacunas, desparasitación, peso, comidas, documentos y preparación de la visita al veterinario.", "Créez un profil pour traitements, vaccins, vermifugation, poids, repas, documents et préparation des visites vétérinaires.", "Lege ein Profil für Medikamente, Impfungen, Entwurmung, Gewicht, Mahlzeiten, Dokumente und die Vorbereitung auf Tierarztbesuche an."],
  ["onboardingLanguageHint", "Choose your language above, then add your first pet to get started.", "Выберите язык выше, затем добавьте первого питомца.", "Elige el idioma arriba y añade a tu primera mascota para empezar.", "Choisissez votre langue ci-dessus, puis ajoutez votre premier animal.", "Wähle oben deine Sprache und füge dann dein erstes Tier hinzu."],
  ["addFirstPet", "Add your first pet", "Добавить первого питомца", "Añadir a tu primera mascota", "Ajouter votre premier animal", "Erstes Tier hinzufügen"],
  ["onboardingGuide", "See how it works", "Как это работает", "Ver cómo funciona", "Voir comment ça marche", "So funktioniert's"],
  ["home", "My Pet home", "Главная My Pet", "Inicio de My Pet", "Accueil My Pet", "My Pet-Startseite"],
  ["mainNavigation", "Main navigation", "Основная навигация", "Navegación principal", "Navigation principale", "Hauptnavigation"],
  ["profile", "Profile", "Профиль", "Perfil", "Profil", "Profil"],
  ["overview", "Overview", "Обзор", "Resumen", "Vue d’ensemble", "Übersicht"],
  ["medications", "Medications", "Лекарства", "Medicamentos", "Médicaments", "Medikamente"],
  ["healthRecords", "Health records", "Медицинская карта", "Historial médico", "Dossier de santé", "Gesundheitsakte"],
  ["howItWorks", "How it works", "Как это работает", "Cómo funciona", "Comment ça marche", "So funktioniert's"],
  ["myPets", "MY PETS", "МОИ ПИТОМЦЫ", "MIS MASCOTAS", "MES ANIMAUX", "MEINE TIERE"],
  ["addPet", "Add a pet", "Добавить питомца", "Añadir mascota", "Ajouter un animal", "Tier hinzufügen"],
  ["sidebarNote", "Little routines make<br>for a lifetime of love.", "Маленькие ритуалы —<br>забота на всю жизнь.", "Pequeños cuidados,<br>una vida de amor.", "De petits gestes,<br>une vie de tendresse.", "Kleine Rituale,<br>ein Leben voller Liebe."],
  ["profileName", "Alex Morgan", "Алекс Морган", "Alex Morgan", "Alex Morgan", "Alex Morgan"],
  ["petParent", "Pet parent", "Хозяин питомца", "Familia de mascota", "Parent d’animal", "Tiermensch"],
  ["mySpace", "My space", "Моё пространство", "Mi espacio", "Mon espace", "Mein Bereich"],
  ["chooseLanguage", "Choose language", "Выберите язык", "Elige idioma", "Choisir la langue", "Sprache wählen"],
  ["downloadApp", "Get Android app", "Скачать приложение", "Descargar app Android", "Télécharger l’appli", "Android-App laden"],
  ["addCareRecord", "Add care record", "Добавить запись", "Añadir cuidado", "Ajouter un soin", "Pflege erfassen"],
  ["heroTag", "YOUR HAPPY PLACE", "ЗДЕСЬ ЖИВЁТ ЗАБОТА", "SU LUGAR FELIZ", "VOTRE REFUGE DE BONHEUR", "EIN ORT ZUM WOHLFÜHLEN"],
  ["heroTitle", "Every tail wag<br>starts with <em>good care.</em>", "Каждый взмах хвоста<br>начинается с <em>заботы.</em>", "Cada cola feliz<br>empieza con <em>cariño.</em>", "Chaque queue qui remue<br>commence par <em>de bons soins.</em>", "Jedes Wedeln<br>beginnt mit <em>guter Pflege.</em>"],
  ["heroDescription", "Keep all the little things that make<br>your pet feel their best, in one place.", "Всё, что помогает питомцу<br>чувствовать себя отлично, — здесь.", "Todo lo que hace sentir bien<br>a tu mascota, en un solo lugar.", "Tous les petits gestes qui font du bien<br>à votre animal, réunis au même endroit.", "Alles, was deinem Tier guttut,<br>an einem liebevollen Ort."],
  ["exploreRecords", "Explore health records", "Открыть медкарту", "Ver historial médico", "Voir le dossier de santé", "Gesundheitsakte ansehen"],
  ["yourRoutines", "YOUR LITTLE ROUTINES", "ВАШИ МАЛЕНЬКИЕ РИТУАЛЫ", "SUS PEQUEÑAS RUTINAS", "VOS PETITES HABITUDES", "KLEINE PFLEGEROUTINEN"],
  ["careAtGlance", "Care at a glance", "Забота одним взглядом", "Cuidados de un vistazo", "Les soins en un coup d’œil", "Pflege auf einen Blick"],
  ["seeAllCare", "See all care", "Все записи", "Ver todos los cuidados", "Tous les soins", "Alle Pflegedaten"],
  ["oneDayAtTime", "ONE DAY AT A TIME", "ДЕНЬ ЗА ДНЁМ", "DÍA A DÍA", "UN JOUR À LA FOIS", "SCHRITT FÜR SCHRITT"],
  ["todaysCare", "Today's care", "Забота сегодня", "Cuidados de hoy", "Soins du jour", "Heute anstehende Pflege"],
  ["littleHeadsUp", "A LITTLE HEADS-UP", "СКОРО ПОТРЕБУЕТСЯ ЗАБОТА", "UN PEQUEÑO AVISO", "UN PETIT RAPPEL", "KLEINE VORSCHAU"],
  ["comingUp", "Coming up", "Скоро", "Próximamente", "À venir", "Demnächst"],
  ["moreUpcoming", "More upcoming items", "Другие предстоящие события", "Más próximos eventos", "Autres rendez-vous à venir", "Weitere Termine"],
  ["visitMilestones", "EVERY VISIT, EVERY MILESTONE", "КАЖДЫЙ ВИЗИТ — ВАЖНОЕ СОБЫТИЕ", "CADA VISITA, CADA MOMENTO", "CHAQUE VISITE, CHAQUE ÉTAPE", "JEDER BESUCH, JEDER MEILENSTEIN"],
  ["recordsDescription", "Vaccinations, deworming, weight, meals, grooming, and documents, together by pet.", "Прививки, дегельминтизация, вес, питание, груминг и документы — для каждого питомца в одном месте.", "Vacunas, desparasitación, peso, alimentación, peluquería y documentos, organizados por mascota.", "Vaccins, vermifugation, poids, repas, toilettage et documents réunis par animal.", "Impfungen, Entwurmungen, Gewicht, Ernährung, Pflege und Dokumente je Tier an einem Ort."],
  ["addVaccination", "+ Vaccination", "+ Вакцинация", "+ Vacuna", "+ Vaccin", "+ Impfung"],
  ["addDeworming", "+ Deworming", "+ Дегельминтизация", "+ Desparasitación", "+ Vermifugation", "+ Entwurmung"],
  ["addGrooming", "+ Grooming", "+ Груминг", "+ Peluquería", "+ Toilettage", "+ Pflege"],
  ["moreHealthEntries", "More entries", "Другие записи", "Más registros", "Autres entrées", "Weitere Einträge"],
  ["addWeight", "+ Weight", "+ Вес", "+ Peso", "+ Poids", "+ Gewicht"],
  ["addFoodEntry", "+ Food diary", "+ Питание", "+ Alimentación", "+ Repas", "+ Ernährung"],
  ["addDocument", "+ Document", "+ Документ", "+ Documento", "+ Document", "+ Dokument"],
  ["allRecords", "All records", "Все записи", "Todos", "Tout", "Alle Einträge"],
  ["vaccinations", "Vaccinations", "Вакцинации", "Vacunas", "Vaccins", "Impfungen"],
  ["deworming", "Deworming", "Дегельминтизация", "Desparasitación", "Vermifugation", "Entwurmung"],
  ["weight", "Weight", "Вес", "Peso", "Poids", "Gewicht"],
  ["foodDiary", "Food diary", "Дневник питания", "Diario de alimentación", "Journal alimentaire", "Ernährungstagebuch"],
  ["documents", "Documents", "Документы", "Documentos", "Documents", "Dokumente"],
  ["vetPrep", "Vet visit prep", "Подготовка к ветеринару", "Preparar visita al veterinario", "Préparer la visite vétérinaire", "Tierarztbesuch vorbereiten"],
  ["grooming", "Grooming", "Груминг", "Peluquería", "Toilettage", "Pflege"],
  ["steadyCare", "STEADY CARE, SIMPLIFIED", "РЕГУЛЯРНЫЙ УХОД — ПРОСТО", "CUIDADOS, SIN COMPLICACIONES", "LES SOINS EN TOUTE SIMPLICITÉ", "PFLEGE, GANZ EINFACH"],
  ["medicationsDescription", "A clear routine for the treatments that keep them feeling good.", "Понятный график лекарств для хорошего самочувствия.", "Un plan claro para que siempre se sienta bien.", "Un rituel simple pour prendre soin de sa santé.", "Ein klarer Ablauf für das Wohlbefinden deines Lieblings."],
  ["addMedication", "Add medication", "Добавить лекарство", "Añadir medicamento", "Ajouter un médicament", "Medikament hinzufügen"],
  ["careMadeSimple", "PET CARE, MADE SIMPLE", "ЗАБОТА О ПИТОМЦЕ — ПРОСТО", "CUIDAR ES MÁS FÁCIL", "PRENDRE SOIN, TOUT SIMPLEMENT", "TIERPFLEGE, GANZ EINFACH"],
  ["guideTitle", "More happy moments.<br><em>Less to remember.</em>", "Больше счастливых моментов.<br><em>Меньше забот.</em>", "Más momentos felices.<br><em>Menos cosas que recordar.</em>", "Plus de moments heureux.<br><em>Moins de choses à retenir.</em>", "Mehr schöne Momente.<br><em>Weniger im Kopf behalten.</em>"],
  ["guideIntro", "One gentle place for the little routines that help your best friend feel their best.", "Одно удобное место для простых ритуалов, которые помогают любимцу чувствовать себя хорошо.", "Un lugar sencillo para las rutinas que ayudan a tu mejor amigo a sentirse bien.", "Un espace tout doux pour les habitudes qui font du bien à votre compagnon.", "Ein liebevoller Ort für die Routinen, die deinem Liebling guttun."],
  ["downloadAndroid", "Download for Android", "Скачать для Android", "Descargar para Android", "Télécharger pour Android", "Für Android herunterladen"],
  ["downloadNote", "Free · private on your device · works offline", "Бесплатно · данные на устройстве · работает офлайн", "Gratis · tus datos, en tu dispositivo · sin conexión", "Gratuit · vos données restent sur l’appareil · hors ligne", "Kostenlos · Daten bleiben auf deinem Gerät · offline nutzbar"],
  ["smallSteps", "A FEW SMALL STEPS", "ВСЕГО ПАРА ШАГОВ", "UNOS PASOS SENCILLOS", "QUELQUES GESTES SIMPLES", "NUR WENIGE SCHRITTE"],
  ["howUse", "How to use My Pet", "Как пользоваться My Pet", "Cómo usar My Pet", "Comment utiliser My Pet", "So verwendest du My Pet"],
  ["howUseIntro", "Set up in a minute. Feel more on top of care every day.", "Настройте за минуту и каждый день будьте спокойны за заботу о питомце.", "Configúrala en un minuto y ten sus cuidados siempre al día.", "Installez tout en une minute et suivez ses soins sereinement.", "In einer Minute eingerichtet und jeden Tag gut organisiert."],
  ["stepOneTitle", "Add your pet", "Добавьте питомца", "Añade a tu mascota", "Ajoutez votre animal", "Tier hinzufügen"],
  ["stepOneText", "Create a profile for each furry family member. Switch pets anytime.", "Создайте профиль для каждого любимца и переключайтесь между ними.", "Crea un perfil para cada peludo y cambia de mascota cuando quieras.", "Créez un profil par compagnon et changez d’animal à tout moment.", "Lege für jedes Tier ein Profil an und wechsle jederzeit."],
  ["stepTwoTitle", "Set a care routine", "Настройте уход", "Crea una rutina", "Créez une routine de soins", "Pflegeroutine einrichten"],
  ["stepTwoText", "Add medicine and its schedule, then tap the check when a dose is given.", "Добавьте лекарство и расписание, затем отметьте принятую дозу.", "Añade el medicamento y su horario; marca cada dosis cuando la administres.", "Ajoutez un traitement et son horaire, puis cochez chaque prise effectuée.", "Trage Medikamente und Zeiten ein und hake gegebene Dosen ab."],
  ["stepThreeTitle", "Keep dates close", "Следите за датами", "Ten las fechas a mano", "Gardez les dates en tête", "Termine im Blick behalten"],
  ["stepThreeText", "Track vaccines, deworming, weight, meals, grooming, and documents in your pet's health card.", "Храните прививки, дегельминтизацию, вес, питание, груминг и документы в карте питомца.", "Registra vacunas, desparasitación, peso, comidas, peluquería y documentos en la cartilla.", "Notez vaccins, vermifugation, poids, repas, toilettage et documents dans le carnet de santé.", "Erfasse Impfungen, Entwurmungen, Gewicht, Mahlzeiten, Pflege und Dokumente in der Gesundheitsakte."],
  ["featureMedsTitle", "Medication, made manageable", "Лекарства под контролем", "Medicamentos bajo control", "Les médicaments en toute simplicité", "Medikamente leicht im Blick"],
  ["featureMedsText", "See each dose, follow the daily routine, and keep a simple completion history.", "Смотрите дозы, следуйте расписанию и отмечайте выполненные приёмы.", "Consulta cada dosis, sigue la rutina y lleva un registro sencillo.", "Visualisez les prises, suivez le rituel et gardez un historique.", "Dosen und Tagesablauf im Blick, Einnahmen einfach abhaken."],
  ["featureRecordsTitle", "Every important record", "Все важные записи", "Todos los registros importantes", "Tous les dossiers importants", "Alle wichtigen Einträge"],
  ["featureRecordsText", "Keep vaccinations, deworming, weight history, meals, grooming, and documents together by pet.", "Храните прививки, дегельминтизацию, историю веса, питание, груминг и документы каждого питомца вместе.", "Reúne vacunas, desparasitación, historial de peso, comidas, peluquería y documentos por mascota.", "Réunissez vaccins, vermifugation, poids, repas, toilettage et documents pour chaque animal.", "Sammle Impfungen, Entwurmungen, Gewichtsverlauf, Mahlzeiten, Pflege und Dokumente je Tier."],
  ["featureVetPrepTitle", "A clearer vet conversation", "Подготовка к разговору с ветеринаром", "Una conversación más clara con el veterinario", "Un échange plus clair avec le vétérinaire", "Gut vorbereitet ins Tierarztgespräch"],
  ["featureVetPrepText", "Organize observations and questions into a message for your clinic. No diagnosis or treatment advice.", "Соберите наблюдения и вопросы в сообщение для клиники. Без диагноза и советов по лечению.", "Organiza observaciones y preguntas en un mensaje para la clínica. Sin diagnósticos ni tratamientos.", "Rassemblez observations et questions dans un message pour la clinique, sans diagnostic ni traitement.", "Fasse Beobachtungen und Fragen für die Praxis zusammen – ohne Diagnose oder Behandlungstipps."],
  ["vetMessagePet", "Pet: {name} ({species})", "Питомец: {name} ({species})", "Mascota: {name} ({species})", "Animal : {name} ({species})", "Tier: {name} ({species})"],
  ["vetMessageOtherSigns", "Other signs: {value}", "Другие симптомы: {value}", "Otros signos: {value}", "Autres signes : {value}", "Weitere Anzeichen: {value}"],
  ["vetMessageThanks", "Thank you.", "Спасибо.", "Gracias.", "Merci.", "Vielen Dank."],
  ["vetReportSaveFailed", "The note could not be saved on this device.", "Не удалось сохранить заметку на устройстве.", "No se pudo guardar la nota en este dispositivo.", "Impossible d’enregistrer la note sur cet appareil.", "Die Notiz konnte nicht auf dem Gerät gespeichert werden."],
  ["removeVetReport", "Delete this saved vet-prep note", "Удалить эту заметку для ветеринара", "Eliminar esta nota guardada", "Supprimer cette note enregistrée", "Diese gespeicherte Notiz löschen"],
  ["removeVetReportConfirm", "Delete this vet-prep note from this pet's health card?", "Удалить эту заметку из карты питомца?", "¿Eliminar esta nota de la cartilla de esta mascota?", "Supprimer cette note du dossier de cet animal ?", "Diese Notiz aus der Gesundheitsakte dieses Tiers löschen?"],
  ["vetReportDeleteFailed", "The note could not be deleted.", "Не удалось удалить заметку.", "No se pudo eliminar la nota.", "Impossible de supprimer la note.", "Die Notiz konnte nicht gelöscht werden."],
  ["cameraDocument", "Take a photo", "Сфотографировать документ", "Hacer una foto", "Prendre une photo", "Dokument fotografieren"],
  ["documentPickFile", "Choose a document file or take a photo.", "Выберите файл документа или сфотографируйте его.", "Elige un archivo o haz una foto.", "Choisissez un fichier ou prenez une photo.", "Wähle eine Datei oder fotografiere das Dokument."],
  ["documentToolsTitle", "Tools for {pet}", "Документы питомца: {pet}", "Herramientas para {pet}", "Outils pour {pet}", "Dokumente für {pet}"],
  ["downloadPetPassport", "Download pet passport", "Скачать карту питомца", "Descargar pasaporte de la mascota", "Télécharger le passeport de l’animal", "Tierpass herunterladen"],
  ["printTreatmentSchedule", "Print treatment schedule", "Распечатать график обработок", "Imprimir el calendario de cuidados", "Imprimer le calendrier des soins", "Behandlungsplan drucken"],
  ["treatmentScheduleTitle", "Treatment schedule", "График обработок", "Calendario de tratamientos", "Calendrier des traitements", "Behandlungsplan"],
  ["upcomingCare", "Upcoming care", "Предстоящий уход", "Próximos cuidados", "Soins à venir", "Anstehende Pflege"],
  ["saveMedicalSummary", "Save discharge summary to Documents", "Сохранить выписку в документах", "Guardar el informe en Documentos", "Enregistrer le compte rendu dans Documents", "Entlassungsbericht in Dokumente speichern"],
  ["passportDownloadReady", "The pet passport download is ready.", "Карта питомца готова к скачиванию.", "El pasaporte de la mascota está listo para descargar.", "Le passeport de l’animal est prêt à être téléchargé.", "Der Tierpass steht zum Download bereit."],
  ["passportTitle", "My Pet · Personal health passport", "My Pet · Карта здоровья питомца", "My Pet · Pasaporte de salud", "My Pet · Carnet de santé personnel", "My Pet · Persönlicher Gesundheitspass"],
  ["passportDisclaimer", "An owner-created care summary, not an official travel or vaccination certificate.", "Личная карта ухода, созданная владельцем; не является официальным документом для поездок или вакцинации.", "Resumen de cuidados creado por el dueño; no es un certificado oficial de viaje o vacunación.", "Résumé de soins créé par le propriétaire, sans valeur de certificat officiel de voyage ou de vaccination.", "Von der Halterin oder dem Halter erstellte Übersicht, kein offizieller Reise- oder Impfnachweis."],
  ["passportGeneratedOn", "Generated on {date}", "Создано: {date}", "Generado el {date}", "Généré le {date}", "Erstellt am {date}"],
  ["petDetailsSection", "Pet details", "Данные питомца", "Datos de la mascota", "Informations sur l’animal", "Angaben zum Tier"],
  ["medicalSummaryTitle", "Medical summary · {pet}", "Выписка · {pet}", "Resumen médico · {pet}", "Résumé médical · {pet}", "Medizinische Zusammenfassung · {pet}"],
  ["medicalSummaryDisclaimer", "Owner-generated summary of saved records. It is not a diagnosis or an official veterinary discharge report.", "Сводка сохранённых записей, созданная владельцем. Это не диагноз и не официальная выписка ветеринара.", "Resumen creado por el dueño a partir de sus registros. No es un diagnóstico ni un informe veterinario oficial.", "Résumé créé par le propriétaire à partir des données enregistrées. Ce n’est ni un diagnostic ni un compte rendu vétérinaire officiel.", "Von der Halterin oder dem Halter erstellte Übersicht gespeicherter Einträge. Keine Diagnose und kein offizieller tierärztlicher Entlassungsbericht."],
  ["passportVaccinations", "Vaccinations", "Прививки", "Vacunas", "Vaccinations", "Impfungen"],
  ["passportTreatments", "Deworming & treatments", "Обработки и дегельминтизация", "Desparasitación y tratamientos", "Vermifugation et traitements", "Entwurmung und Behandlungen"],
  ["passportMedications", "Current medications", "Текущие лекарства", "Medicamentos actuales", "Médicaments actuels", "Aktuelle Medikamente"],
  ["passportWeight", "Weight history", "История веса", "Historial de peso", "Historique du poids", "Gewichtsverlauf"],
  ["passportFood", "Food diary", "Дневник питания", "Diario de alimentación", "Journal alimentaire", "Ernährungstagebuch"],
  ["passportGrooming", "Grooming history", "История груминга", "Historial de peluquería", "Historique du toilettage", "Pflegeverlauf"],
  ["passportDocuments", "Saved documents", "Сохранённые документы", "Documentos guardados", "Documents enregistrés", "Gespeicherte Dokumente"],
  ["passportVetNotes", "Vet visit preparation notes", "Заметки для визита к ветеринару", "Notas para la visita veterinaria", "Notes pour la visite vétérinaire", "Notizen zur Vorbereitung auf den Tierarztbesuch"],
  ["passportNoRecords", "No records saved yet.", "Записей пока нет.", "Aún no hay registros.", "Aucun dossier enregistré.", "Noch keine Einträge gespeichert."],
  ["notRecorded", "Not recorded", "Не указано", "No indicado", "Non renseigné", "Nicht erfasst"],
  ["profileLine", "{label}: {value}", "{label}: {value}", "{label}: {value}", "{label} : {value}", "{label}: {value}"],
  ["recordLine", "{name} · {date}", "{name} · {date}", "{name} · {date}", "{name} · {date}", "{name} · {date}"],
  ["recordNextLine", "{name} · {date} · Next: {nextDate}", "{name} · {date} · Следующая дата: {nextDate}", "{name} · {date} · Próxima: {nextDate}", "{name} · {date} · Prochaine : {nextDate}", "{name} · {date} · Nächster Termin: {nextDate}"],
  ["medicationScheduleLine", "{name} · {dose} · {schedule} · {time}", "{name} · {dose} · {schedule} · {time}", "{name} · {dose} · {schedule} · {time}", "{name} · {dose} · {schedule} · {time}", "{name} · {dose} · {schedule} · {time}"],
  ["weightHistoryLine", "{weight} kg · {date}", "{weight} кг · {date}", "{weight} kg · {date}", "{weight} kg · {date}", "{weight} kg · {date}"],
  ["mealHistoryLine", "{food} · {meal} · {amount} · {date}", "{food} · {meal} · {amount} · {date}", "{food} · {meal} · {amount} · {date}", "{food} · {meal} · {amount} · {date}", "{food} · {meal} · {amount} · {date}"],
  ["documentHistoryLine", "{title} · {category} · {date}", "{title} · {category} · {date}", "{title} · {category} · {date}", "{title} · {category} · {date}", "{title} · {category} · {date}"],
  ["vetNoteLine", "{date} · {summary}", "{date} · {summary}", "{date} · {summary}", "{date} · {summary}", "{date} · {summary}"],
  ["treatmentNoRecords", "No medication schedule or upcoming treatment dates have been recorded for this pet.", "Расписание лекарств и ближайшие даты обработок ещё не записаны.", "No hay tratamientos ni próximas fechas registrados para esta mascota.", "Aucun traitement ni prochaine échéance n’est enregistré pour cet animal.", "Für dieses Tier sind noch keine Medikamente oder anstehenden Behandlungstermine erfasst."],
  ["medicalSummarySaved", "The summary was saved to this pet's Documents.", "Выписка сохранена в документах питомца.", "El informe se guardó en los Documentos de la mascota.", "Le compte rendu a été enregistré dans les documents de l’animal.", "Die Zusammenfassung wurde in den Dokumenten des Tiers gespeichert."],
  ["documentExportFailed", "The document could not be generated or saved on this device.", "Не удалось создать или сохранить документ на устройстве.", "No se pudo generar o guardar el documento en este dispositivo.", "Impossible de créer ou d’enregistrer le document sur cet appareil.", "Das Dokument konnte auf diesem Gerät nicht erstellt oder gespeichert werden."],
  ["printNotSupported", "Printing is not available in this browser.", "Печать недоступна в этом браузере.", "La impresión no está disponible en este navegador.", "L’impression n’est pas disponible dans ce navigateur.", "Drucken ist in diesem Browser nicht verfügbar."],
  ["emptyVetReports", "No vet-prep notes saved for this pet.", "Заметок для ветеринара пока нет.", "Aún no hay notas guardadas para el veterinario.", "Aucune note enregistrée pour le vétérinaire.", "Noch keine Notizen für die Tierarztpraxis gespeichert."],
  ["featureRemindersTitle", "A heads-up before it's due", "Напоминание заранее", "Un aviso antes de la fecha", "Un rappel avant l’échéance", "Rechtzeitig Bescheid wissen"],
  ["featureRemindersText", "See upcoming vaccination, deworming, and grooming dates at a glance. No account needed.", "Следите за датами прививок, дегельминтизации и груминга. Аккаунт не нужен.", "Consulta próximas vacunas, desparasitación y peluquería. Sin necesidad de cuenta.", "Suivez les prochaines dates de vaccins, vermifugation et toilettage, sans compte.", "Behalte Impfungen, Entwurmungen und Pflegetermine im Blick – ganz ohne Konto."],
  ["privacyTitle", "Your pet's care stays yours.", "Данные о питомце остаются у вас.", "Los datos de tu mascota son tuyos.", "Les données de votre animal restent les vôtres.", "Die Daten deines Tiers bleiben bei dir."],
  ["privacyText", "Records and attached documents stay in your browser or Android device. Nothing is sent to a server.", "Записи и документы хранятся в браузере или на Android-устройстве и не отправляются на сервер.", "Los registros y documentos se guardan en tu navegador o Android; no se envían a ningún servidor.", "Les dossiers et documents restent dans votre navigateur ou appareil Android. Rien n’est envoyé à un serveur.", "Einträge und Dokumente bleiben im Browser oder auf deinem Android-Gerät und werden nicht an einen Server gesendet."],
  ["footerNote", "Made with love for the ones with paws.", "С любовью для тех, у кого лапки.", "Hecho con amor para quienes tienen patas.", "Fait avec amour pour ceux qui ont des pattes.", "Mit Liebe für alle mit Pfoten."],
  ["cancel", "Cancel", "Отмена", "Cancelar", "Annuler", "Abbrechen"],
  ["saveRecord", "Save record", "Сохранить запись", "Guardar", "Enregistrer", "Eintrag speichern"],
  ["closeDialog", "Close dialog", "Закрыть окно", "Cerrar ventana", "Fermer", "Dialog schließen"],
  ["close", "Close", "Закрыть", "Cerrar", "Fermer", "Schließen"],
  ["recorded", "Recorded", "Записано", "Anotado", "Enregistré", "Erfasst"],
  ["morning", "Good morning", "Доброе утро", "Buenos días", "Bonjour", "Guten Morgen"],
  ["afternoon", "Good afternoon", "Добрый день", "Buenas tardes", "Bon après-midi", "Guten Tag"],
  ["evening", "Good evening", "Добрый вечер", "Buenas noches", "Bonsoir", "Guten Abend"],
  ["morningTag", "A GOOD DAY TOGETHER", "ХОРОШИЙ ДЕНЬ ВМЕСТЕ", "UN BUEN DÍA JUNTOS", "UNE BELLE JOURNÉE ENSEMBLE", "EIN GUTER TAG ZUSAMMEN"],
  ["laterTag", "HERE'S TO A GOOD DAY", "ПУСТЬ ДЕНЬ БУДЕТ ХОРОШИМ", "POR UN BUEN DÍA", "À UNE BELLE JOURNÉE", "AUF EINEN SCHÖNEN TAG"],
  ["overviewSubtitle", "A little care goes a long way. Here's what's happening for {pet} today.", "Немного заботы — и день лучше. Вот что запланировано для {pet}.", "Un poco de cuidado hace mucho. Esto es lo que toca hoy para {pet}.", "Un peu d’attention change tout. Voici le programme de {pet} aujourd’hui.", "Ein bisschen Fürsorge wirkt lange. Das steht heute für {pet} an."],
  ["noPetSubtitle", "Add a pet to start keeping all their care in one happy place.", "Добавьте питомца, чтобы собрать всю заботу о нём в одном месте.", "Añade una mascota para tener sus cuidados siempre a mano.", "Ajoutez un animal pour réunir tous ses soins au même endroit.", "Füge ein Tier hinzu, um seine Pflege an einem Ort zu organisieren."],
  ["recordsSubtitle", "One organized health card for each pet.", "Общая карта здоровья для каждого питомца.", "Una cartilla de salud organizada para cada mascota.", "Un carnet de santé complet pour chaque animal.", "Eine übersichtliche Gesundheitsakte für jedes Tier."],
  ["medicationsSubtitle", "A calm, consistent routine makes all the difference.", "Спокойный и регулярный уход меняет всё.", "Una rutina tranquila y constante marca la diferencia.", "Une routine sereine et régulière fait toute la différence.", "Eine ruhige, regelmäßige Routine macht den Unterschied."],
  ["happyPet", "Happy {species}", "Счастливый питомец: {species}", "{species} feliz", "{species} heureux", "{species} glücklich"],
  ["petInCare", "{pet} is in your care", "{pet} под вашей заботой", "{pet} está en buenas manos", "{pet} est entre de bonnes mains", "{pet} ist bei dir in guten Händen"],
  ["addPetToProfile", "Add a pet profile", "Добавьте профиль питомца", "Añade el perfil de una mascota", "Ajoutez un profil d’animal", "Tierprofil hinzufügen"],
  ["activeMedications", "Active medications", "Активные лекарства", "Medicamentos activos", "Médicaments actifs", "Aktive Medikamente"],
  ["dosesDone", "{count} doses done today", "Сегодня принято доз: {count}", "Dosis administradas hoy: {count}", "Prises effectuées aujourd’hui : {count}", "Heute gegebene Dosen: {count}"],
  ["careRecords", "Care records", "Записи об уходе", "Registros de cuidados", "Dossiers de soins", "Pflegeeinträge"],
  ["vaccinesGrooming", "Vaccines, weight & more", "Прививки, вес и другое", "Vacunas, peso y más", "Vaccins, poids et plus", "Impfungen, Gewicht & mehr"],
  ["latestWeight", "Latest: {weight} kg", "Последний вес: {weight} кг", "Último peso: {weight} kg", "Dernier poids : {weight} kg", "Zuletzt: {weight} kg"],
  ["healthCardCategories", "Vaccines, care & records", "Прививки, уход и документы", "Vacunas, cuidados y documentos", "Vaccins, soins et documents", "Impfungen, Pflege & Dokumente"],
  ["comingUpSoon", "Coming up soon", "Скоро", "Próximamente", "Bientôt", "Demnächst"],
  ["noUpcomingReminders", "No upcoming reminders", "Нет предстоящих напоминаний", "Sin próximos recordatorios", "Aucun rappel à venir", "Keine anstehenden Erinnerungen"],
  ["today", "Today", "Сегодня", "Hoy", "Aujourd’hui", "Heute"],
  ["vaccinationDue", "Vaccination due", "Пора на вакцинацию", "Vacuna pendiente", "Vaccination à prévoir", "Impfung fällig"],
  ["groomingReminder", "Grooming reminder", "Напоминание о груминге", "Recordatorio de peluquería", "Rappel de toilettage", "Pflegeerinnerung"],
  ["emptyToday", "Nothing scheduled today. Enjoy a little extra playtime. ✦", "На сегодня ничего не запланировано. Время поиграть! ✦", "Hoy no hay nada pendiente. ¡Disfrutad un rato más! ✦", "Rien de prévu aujourd’hui. Profitez-en pour jouer ! ✦", "Heute steht nichts an. Zeit für eine extra Spielrunde! ✦"],
  ["emptyUpcoming", "Your next dates will show up here.", "Ближайшие даты появятся здесь.", "Aquí aparecerán las próximas fechas.", "Vos prochaines dates apparaîtront ici.", "Hier erscheinen deine nächsten Termine."],
  ["daysOverdue", "{count} days overdue", "Просрочено на {count} дн.", "Hace {count} días", "En retard de {count} j", "Seit {count} Tagen überfällig"],
  ["dueToday", "Due today", "Срок сегодня", "Toca hoy", "À faire aujourd’hui", "Heute fällig"],
  ["inDays", "In {count} days", "Через {count} дн.", "En {count} días", "Dans {count} j", "In {count} Tagen"],
  ["vaccination", "Vaccination", "Вакцинация", "Vacuna", "Vaccination", "Impfung"],
  ["completed", "Completed", "Выполнено", "Completado", "Effectué", "Erledigt"],
  ["nextDate", "Next · {date}", "Следующая · {date}", "Próxima · {date}", "Prochaine · {date}", "Nächste · {date}"],
  ["noReminder", "No reminder", "Без напоминания", "Sin recordatorio", "Sans rappel", "Keine Erinnerung"],
  ["emptyRecords", "No health card entries yet. Add a vaccination, deworming, weight, meal, grooming visit, or document.", "Записей пока нет. Добавьте прививку, дегельминтизацию, вес, питание, груминг или документ.", "Aún no hay datos. Añade vacunas, desparasitación, peso, comidas, peluquería o documentos.", "Aucune donnée. Ajoutez vaccin, vermifugation, poids, repas, toilettage ou document.", "Noch keine Einträge. Ergänze Impfungen, Entwurmung, Gewicht, Mahlzeiten, Pflege oder Dokumente."],
  ["weightEntryTitle", "{weight} kg", "{weight} кг", "{weight} kg", "{weight} kg", "{weight} kg"],
  ["weightRecordNote", "Weight recorded", "Вес записан", "Peso registrado", "Poids enregistré", "Gewicht erfasst"],
  ["weightValue", "Weight (kg)", "Вес (кг)", "Peso (kg)", "Poids (kg)", "Gewicht (kg)"],
  ["dewormingProduct", "Product or treatment", "Препарат или обработка", "Producto o tratamiento", "Produit ou traitement", "Mittel oder Behandlung"],
  ["nextDeworming", "Next due date", "Следующая дата", "Próxima fecha", "Prochaine échéance", "Nächster Termin"],
  ["foodName", "Food", "Корм или продукт", "Alimento", "Aliment", "Futter oder Lebensmittel"],
  ["mealType", "Meal", "Приём пищи", "Comida", "Repas", "Mahlzeit"],
  ["breakfast", "Breakfast", "Завтрак", "Desayuno", "Petit-déjeuner", "Frühstück"],
  ["lunch", "Lunch", "Обед", "Comida", "Déjeuner", "Mittagessen"],
  ["dinner", "Dinner", "Ужин", "Cena", "Dîner", "Abendessen"],
  ["snack", "Snack", "Перекус", "Tentempié", "Collation", "Snack"],
  ["amount", "Amount", "Количество", "Cantidad", "Quantité", "Menge"],
  ["amountPlaceholder", "e.g. 1/2 cup", "например, 1/2 чашки", "p. ej., 1/2 taza", "ex. : 1/2 tasse", "z. B. 1/2 Tasse"],
  ["documentTitle", "Document title", "Название документа", "Título del documento", "Titre du document", "Dokumenttitel"],
  ["documentType", "Document type", "Тип документа", "Tipo de documento", "Type de document", "Dokumenttyp"],
  ["dischargeSummary", "Discharge summary", "Выписка", "Informe de alta", "Compte rendu de sortie", "Entlassungsbericht"],
  ["vaccinationCard", "Vaccination card", "Карта прививок", "Cartilla de vacunación", "Carnet de vaccination", "Impfpass"],
  ["prescription", "Prescription", "Назначение врача", "Receta", "Ordonnance", "Rezept"],
  ["testResults", "Test results", "Результаты анализов", "Resultados de pruebas", "Résultats d’analyses", "Testergebnisse"],
  ["medicalRecord", "Medical record", "Медицинский документ", "Documento médico", "Document médical", "Medizinischer Befund"],
  ["otherDocument", "Other", "Другое", "Otro", "Autre", "Sonstiges"],
  ["attachFile", "Attach PDF or image (up to 10 MB)", "Прикрепите PDF или изображение (до 10 МБ)", "Adjunta PDF o imagen (hasta 10 MB)", "Joignez un PDF ou une image (10 Mo max.)", "PDF oder Bild anhängen (max. 10 MB)"],
  ["viewDocument", "View {title}", "Открыть «{title}»", "Ver {title}", "Voir {title}", "{title} ansehen"],
  ["viewDocumentShort", "Open", "Открыть", "Abrir", "Ouvrir", "Öffnen"],
  ["downloadDocument", "Download file", "Скачать файл", "Descargar archivo", "Télécharger le fichier", "Datei herunterladen"],
  ["openExternalDocument", "Open in another app", "Открыть в другом приложении", "Abrir en otra aplicación", "Ouvrir dans une autre application", "In einer anderen App öffnen"],
  ["fileSavedMessage", "File saved to the selected location.", "Файл сохранён в выбранное место.", "Archivo guardado en la ubicación elegida.", "Fichier enregistré à l’emplacement choisi.", "Datei am ausgewählten Ort gespeichert."],
  ["nativeSaveFailed", "The file was not saved.", "Файл не сохранён.", "No se guardó el archivo.", "Le fichier n’a pas été enregistré.", "Die Datei wurde nicht gespeichert."],
  ["nativeSavePending", "Finish the current save action first.", "Сначала завершите текущее сохранение.", "Termina primero el guardado actual.", "Terminez d’abord l’enregistrement en cours.", "Schließe zuerst den aktuellen Speichervorgang ab."],
  ["removeDocument", "Delete {title} from this pet's records?", "Удалить «{title}» из карты питомца?", "¿Eliminar {title} de los documentos de esta mascota?", "Supprimer {title} du dossier de cet animal ?", "{title} aus der Tierakte löschen?"],
  ["documentMissing", "This file is no longer available on this device.", "Файл больше не доступен на этом устройстве.", "El archivo ya no está disponible en este dispositivo.", "Ce fichier n’est plus disponible sur cet appareil.", "Diese Datei ist auf diesem Gerät nicht mehr verfügbar."],
  ["documentTooLarge", "Choose a file smaller than 10 MB.", "Выберите файл меньше 10 МБ.", "Elige un archivo de menos de 10 MB.", "Choisissez un fichier de moins de 10 Mo.", "Wähle eine Datei unter 10 MB."],
  ["documentUnsupported", "Use a PDF, TXT, JPG, PNG, or WebP file.", "Используйте файл PDF, TXT, JPG, PNG или WebP.", "Usa un archivo PDF, TXT, JPG, PNG o WebP.", "Utilisez un fichier PDF, TXT, JPG, PNG ou WebP.", "Verwende eine PDF-, TXT-, JPG-, PNG- oder WebP-Datei."],
  ["documentSaveFailed", "The file could not be saved on this device.", "Не удалось сохранить файл на этом устройстве.", "No se pudo guardar el archivo en este dispositivo.", "Le fichier n’a pas pu être enregistré sur cet appareil.", "Die Datei konnte nicht auf diesem Gerät gespeichert werden."],
  ["documentOpenFailed", "The file could not be opened.", "Не удалось открыть файл.", "No se pudo abrir el archivo.", "Impossible d’ouvrir le fichier.", "Die Datei konnte nicht geöffnet werden."],
  ["documentsLocalOnly", "Files are stored privately on this device.", "Файлы хранятся только на этом устройстве.", "Los archivos se guardan solo en este dispositivo.", "Les fichiers restent sur cet appareil.", "Dateien bleiben auf diesem Gerät."],
  ["documentSaved", "Document added to the health card.", "Документ добавлен в карту питомца.", "Documento añadido a la cartilla.", "Document ajouté au carnet de santé.", "Dokument zur Gesundheitsakte hinzugefügt."],
  ["documentDeleteFailed", "The file could not be removed from this device.", "Не удалось удалить файл с этого устройства.", "No se pudo eliminar el archivo de este dispositivo.", "Impossible de supprimer le fichier de cet appareil.", "Die Datei konnte nicht von diesem Gerät entfernt werden."],
  ["vetAssistantTitle", "Vet visit preparation", "Подготовка к визиту к ветеринару", "Preparación para la visita veterinaria", "Préparer une visite vétérinaire", "Vorbereitung auf den Tierarztbesuch"],
  ["vetAssistantIntro", "Organize what you have noticed and prepare a clear message for your clinic.", "Соберите наблюдения и подготовьте понятное сообщение для клиники.", "Organiza tus observaciones y prepara un mensaje claro para la clínica.", "Organisez vos observations et préparez un message clair pour la clinique.", "Ordne deine Beobachtungen und verfasse eine klare Nachricht an die Praxis."],
  ["vetAssistantDisclaimer", "This local guided helper uses a checklist and message template. It is not a live AI, a diagnosis, or veterinary advice.", "Это локальный помощник с чек-листом и шаблоном сообщения. Это не ИИ-сервис, не диагноз и не ветеринарная консультация.", "Esta guía local usa una lista y una plantilla. No es una IA en directo, un diagnóstico ni consejo veterinario.", "Ce guide local utilise une liste et un modèle. Ce n’est ni une IA en direct, ni un diagnostic, ni un avis vétérinaire.", "Diese lokale Hilfe nutzt Checkliste und Vorlage. Sie ist keine Live-KI, keine Diagnose und keine tierärztliche Beratung."],
  ["vetAssistantPrivacy", "Your notes stay on this device. A share button only opens a draft in the chosen messenger; review it and press Send there.", "Заметки остаются на устройстве. Кнопка откроет черновик в выбранном мессенджере; проверьте его и отправьте сами.", "Tus notas quedan en este dispositivo. Compartir solo abre un borrador; revísalo y envíalo tú desde la aplicación.", "Vos notes restent sur cet appareil. Le partage ouvre un brouillon ; vérifiez-le et envoyez-le vous-même.", "Deine Notizen bleiben auf dem Gerät. Teilen öffnet nur einen Entwurf; prüfe ihn und sende ihn selbst."],
  ["vetUrgentTitle", "When to contact an emergency veterinarian", "Когда нужна срочная помощь ветеринара", "Cuándo acudir a urgencias veterinarias", "Quand contacter un vétérinaire d’urgence", "Wann du sofort tierärztliche Hilfe brauchst"],
  ["vetUrgentText", "Seek emergency veterinary help now for difficulty breathing, collapse, seizures, unresponsiveness, severe bleeding, repeated vomiting, or inability to urinate. For new, worsening, or worrying signs, contact your clinic promptly.", "При затруднённом дыхании, потере сознания, судорогах, отсутствии реакции, сильном кровотечении, многократной рвоте или невозможности помочиться срочно обратитесь в ветклинику. При новых, усиливающихся или тревожных симптомах сразу свяжитесь с врачом.", "Busca atención veterinaria urgente si hay dificultad para respirar, colapso, convulsiones, falta de respuesta, sangrado intenso, vómitos repetidos o imposibilidad de orinar. Ante signos nuevos o que empeoran, contacta pronto con la clínica.", "Consultez les urgences vétérinaires en cas de difficulté respiratoire, malaise, convulsions, absence de réaction, saignement important, vomissements répétés ou impossibilité d’uriner. Pour tout signe nouveau ou aggravé, contactez rapidement votre clinique.", "Bei Atemnot, Kollaps, Krampfanfällen, fehlender Reaktion, starker Blutung, wiederholtem Erbrechen oder fehlendem Urin sofort tierärztliche Hilfe holen. Bei neuen oder schlimmer werdenden Beschwerden zeitnah die Praxis kontaktieren."],
  ["vetObservationTitle", "What to note for the veterinarian", "Что записать для ветеринара", "Qué anotar para el veterinario", "À noter pour le vétérinaire", "Was du für die Tierarztpraxis notieren kannst"],
  ["vetObserveOnset", "When each sign began and how it has changed", "Когда начался каждый симптом и как он менялся", "Cuándo empezó cada signo y cómo ha cambiado", "Début de chaque signe et évolution", "Beginn und Verlauf der einzelnen Anzeichen"],
  ["vetObserveTemperature", "Measured temperature, unit, time, and how it was measured", "Измеренная температура, время и способ измерения", "Temperatura medida, hora y método de medición", "Température mesurée, heure et méthode", "Gemessene Temperatur, Uhrzeit und Messmethode"],
  ["vetObserveAppetiteWater", "Eating and drinking compared with usual", "Аппетит и питьё по сравнению с обычным", "Comida y bebida en comparación con lo habitual", "Appétit et boisson par rapport à l’habitude", "Fressen und Trinken im Vergleich zum Üblichen"],
  ["vetObserveBehavior", "Energy, behavior, breathing, vomiting, and stool", "Активность, поведение, дыхание, рвота и стул", "Energía, conducta, respiración, vómitos y heces", "Énergie, comportement, respiration, vomissements et selles", "Energie, Verhalten, Atmung, Erbrechen und Kot"],
  ["vetObserveMedsExposure", "Medicines, supplements, new foods, and possible exposures", "Лекарства, добавки, новый корм и возможный контакт с опасными веществами", "Medicamentos, suplementos, alimentos nuevos y posibles exposiciones", "Médicaments, compléments, nouveaux aliments et expositions possibles", "Medikamente, Ergänzungen, neues Futter und mögliche Kontakte"],
  ["vetAskTitle", "Questions to ask the clinic", "Что спросить у врача", "Qué preguntar en la clínica", "Questions à poser à la clinique", "Fragen an die Praxis"],
  ["vetAskOne", "How soon should my pet be examined based on these signs?", "Как скоро питомцу нужен осмотр с такими симптомами?", "¿Cuándo debería examinarse a mi mascota con estos signos?", "Dans quel délai mon animal doit-il être examiné ?", "Wie bald sollte mein Tier mit diesen Anzeichen untersucht werden?"],
  ["vetAskTwo", "Which changes would mean I should seek urgent care?", "При каких изменениях нужно срочно обратиться за помощью?", "¿Qué cambios indicarían que debo acudir a urgencias?", "Quels changements nécessitent des soins urgents ?", "Bei welchen Veränderungen brauche ich sofort Hilfe?"],
  ["vetAskThree", "What observations or records should I bring or continue tracking?", "Какие наблюдения и документы принести или продолжить записывать?", "¿Qué observaciones o documentos debo llevar o seguir anotando?", "Quelles observations ou quels documents apporter ou continuer à noter ?", "Welche Beobachtungen oder Unterlagen soll ich mitbringen oder weiter notieren?"],
  ["vetAskFour", "Are any examination or follow-up steps recommended for my pet?", "Нужны ли питомцу обследование или повторный визит?", "¿Recomienda una revisión o seguimiento para mi mascota?", "Recommandez-vous un examen ou un suivi pour mon animal ?", "Sind eine Untersuchung oder eine Nachkontrolle sinnvoll?"],
  ["vetSymptomsLabel", "What have you noticed?", "Что вы заметили?", "¿Qué has observado?", "Qu’avez-vous observé ?", "Was ist dir aufgefallen?"],
  ["vetSymptomsPlaceholder", "For example: cat, temperature 39.8 °C, lethargic, not eating", "Например: кошка, температура 39,8 °C, вялая, не ест", "Por ejemplo: gato, 39,8 °C, decaído, no come", "Exemple : chat, 39,8 °C, léthargique, ne mange pas", "Zum Beispiel: Katze, 39,8 °C, schlapp, frisst nicht"],
  ["symptomOnset", "When did this start?", "Когда это началось?", "¿Cuándo empezó?", "Quand cela a-t-il commencé ?", "Wann hat es begonnen?"],
  ["temperatureC", "Temperature (°C)", "Температура (°C)", "Temperatura (°C)", "Température (°C)", "Temperatur (°C)"],
  ["temperatureTime", "When was it measured?", "Когда измеряли?", "¿Cuándo se midió?", "Quand a-t-elle été mesurée ?", "Wann wurde sie gemessen?"],
  ["appetite", "Appetite", "Аппетит", "Apetito", "Appétit", "Appetit"],
  ["waterIntake", "Water intake", "Питьё", "Consumo de agua", "Prise d’eau", "Wasseraufnahme"],
  ["unknown", "Not noted", "Не отмечено", "No anotado", "Non précisé", "Nicht notiert"],
  ["appetiteNormal", "Eating as usual", "Ест как обычно", "Come como siempre", "Mange comme d’habitude", "Frisst wie üblich"],
  ["appetiteReduced", "Eating less", "Ест меньше обычного", "Come menos", "Mange moins", "Frisst weniger"],
  ["appetiteNone", "Not eating", "Не ест", "No come", "Ne mange pas", "Frisst nicht"],
  ["waterNormal", "Drinking as usual", "Пьёт как обычно", "Bebe como siempre", "Boit comme d’habitude", "Trinkt wie üblich"],
  ["waterLess", "Drinking less", "Пьёт меньше", "Bebe menos", "Boit moins", "Trinkt weniger"],
  ["waterMore", "Drinking more", "Пьёт больше", "Bebe más", "Boit davantage", "Trinkt mehr"],
  ["waterNone", "Not drinking", "Не пьёт", "No bebe", "Ne boit pas", "Trinkt nicht"],
  ["activityBehavior", "Energy and behavior", "Активность и поведение", "Energía y comportamiento", "Énergie et comportement", "Energie und Verhalten"],
  ["otherSymptoms", "Vomiting, stool, or breathing changes", "Рвота, стул или изменения дыхания", "Vómitos, heces o cambios al respirar", "Vomissements, selles ou changements respiratoires", "Erbrechen, Kot oder Veränderungen der Atmung"],
  ["medicationExposure", "Current medicines, new foods, or possible exposures", "Текущие лекарства, новый корм или возможный контакт с веществами", "Medicamentos actuales, alimentos nuevos o posibles exposiciones", "Médicaments actuels, nouveaux aliments ou expositions possibles", "Aktuelle Medikamente, neues Futter oder mögliche Kontakte"],
  ["moreObservations", "Add other observations", "Добавить другие наблюдения", "Añadir otras observaciones", "Ajouter d’autres observations", "Weitere Beobachtungen ergänzen"],
  ["prepareMessage", "Prepare vet message", "Подготовить сообщение ветеринару", "Preparar mensaje para el veterinario", "Préparer un message pour le vétérinaire", "Nachricht an die Praxis vorbereiten"],
  ["vetMessageTitle", "Message for your veterinarian", "Сообщение для ветеринара", "Mensaje para el veterinario", "Message pour le vétérinaire", "Nachricht an die Tierarztpraxis"],
  ["vetMessageIntro", "Hello, I’m contacting you about {pet} ({species}).", "Здравствуйте! Пишу о питомце {pet} ({species}).", "Hola, les escribo por {pet} ({species}).", "Bonjour, je vous contacte au sujet de {pet} ({species}).", "Guten Tag, ich melde mich wegen {pet} ({species})."],
  ["vetMessageSymptoms", "What I’ve noticed: {value}", "Что я заметил(а): {value}", "Lo que he observado: {value}", "Ce que j’ai observé : {value}", "Meine Beobachtungen: {value}"],
  ["vetMessageOnset", "Started: {value}", "Началось: {value}", "Comenzó: {value}", "Début : {value}", "Beginn: {value}"],
  ["vetMessageTemperature", "Temperature: {value} °C", "Температура: {value} °C", "Temperatura: {value} °C", "Température : {value} °C", "Temperatur: {value} °C"],
  ["vetMessageTemperatureTime", " measured at {value}", " (измерена в {value})", " (medida a las {value})", " (mesurée à {value})", " (gemessen um {value})"],
  ["vetMessageAppetite", "Appetite: {value}", "Аппетит: {value}", "Apetito: {value}", "Appétit : {value}", "Appetit: {value}"],
  ["vetMessageWater", "Water: {value}", "Питьё: {value}", "Agua: {value}", "Eau : {value}", "Trinken: {value}"],
  ["vetMessageBehavior", "Energy/behavior: {value}", "Активность/поведение: {value}", "Energía/comportamiento: {value}", "Énergie/comportement : {value}", "Energie/Verhalten: {value}"],
  ["vetMessageOther", "Other signs: {value}", "Другие симптомы: {value}", "Otros signos: {value}", "Autres signes : {value}", "Weitere Anzeichen: {value}"],
  ["vetMessageExposure", "Medicines/possible exposures: {value}", "Лекарства/возможные контакты: {value}", "Medicamentos/posibles exposiciones: {value}", "Médicaments/expositions possibles : {value}", "Medikamente/mögliche Kontakte: {value}"],
  ["vetMessageAsk", "How soon should we be seen, what changes need urgent care, and what should I bring or keep tracking?", "Как скоро нужен осмотр, какие изменения требуют срочной помощи и что принести или продолжать записывать?", "¿Cuándo debemos acudir, qué cambios requieren urgencias y qué debo llevar o seguir anotando?", "Dans quel délai venir, quels signes nécessitent une urgence et que dois-je apporter ou continuer à noter ?", "Wie bald sollten wir kommen, welche Veränderungen sind dringend und was soll ich mitbringen oder weiter notieren?"],
  ["copyMessage", "Copy message", "Скопировать сообщение", "Copiar mensaje", "Copier le message", "Nachricht kopieren"],
  ["messageCopied", "Message copied.", "Сообщение скопировано.", "Mensaje copiado.", "Message copié.", "Nachricht kopiert."],
  ["copyFailed", "Copy failed. Select and copy the message manually.", "Не удалось скопировать. Выделите текст и скопируйте вручную.", "No se pudo copiar. Selecciona y copia el mensaje manualmente.", "Copie impossible. Sélectionnez et copiez le message manuellement.", "Kopieren fehlgeschlagen. Markiere und kopiere den Text manuell."],
  ["saveVetReport", "Save to health card", "Сохранить в карту питомца", "Guardar en la cartilla", "Enregistrer dans le carnet", "In der Gesundheitsakte speichern"],
  ["savedVetReports", "Saved vet-prep notes", "Сохранённые заметки для ветеринара", "Notas guardadas para el veterinario", "Notes enregistrées pour le vétérinaire", "Gespeicherte Notizen für die Praxis"],
  ["vetReportSaved", "Vet-prep note saved on this device.", "Заметка сохранена на устройстве.", "Nota guardada en este dispositivo.", "Note enregistrée sur cet appareil.", "Notiz auf diesem Gerät gespeichert."],
  ["vetSavedReport", "Vet-prep note", "Заметка для ветеринара", "Nota para el veterinario", "Note pour le vétérinaire", "Notiz für die Tierarztpraxis"],
  ["sharePrompt", "Choose a messenger. It opens a draft; review it and send it yourself.", "Выберите мессенджер. Откроется черновик — проверьте его и отправьте сами.", "Elige una aplicación. Se abrirá un borrador para revisar y enviar tú mismo.", "Choisissez une messagerie. Un brouillon s’ouvre : vérifiez-le puis envoyez-le vous-même.", "Wähle einen Messenger. Ein Entwurf wird geöffnet; prüfe und sende ihn selbst."],
  ["shareWhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp", "WhatsApp"],
  ["shareTelegram", "Telegram", "Telegram", "Telegram", "Telegram", "Telegram"],
  ["shareMax", "MAX", "MAX", "MAX", "MAX", "MAX"],
  ["dosesGivenToday", "Doses given today", "Доз сегодня", "Dosis de hoy", "Prises du jour", "Heute gegeben"],
  ["stillToGive", "Still to give", "Осталось дать", "Pendientes", "À donner", "Noch zu geben"],
  ["nextDose", "Next dose", "Следующая доза", "Próxima dosis", "Prochaine prise", "Nächste Dosis"],
  ["givenToday", "Given today", "Дано сегодня", "Administrado hoy", "Pris aujourd’hui", "Heute gegeben"],
  ["emptyMeds", "No active medications for this pet. Add a medication to keep their routine on track.", "У питомца нет активных лекарств. Добавьте лекарство и расписание.", "No hay medicamentos activos. Añade uno para seguir su rutina.", "Aucun médicament actif. Ajoutez un traitement pour suivre sa routine.", "Keine aktiven Medikamente. Füge ein Medikament für die Routine hinzu."],
  ["clinicVisit", "Clinic visit", "Визит в клинику", "Visita a la clínica", "Visite en clinique", "Klinikbesuch"],
  ["groomingVisit", "Grooming visit", "Визит к грумеру", "Visita de peluquería", "Visite de toilettage", "Pflegebesuch"],
  ["petName", "Pet's name", "Имя питомца", "Nombre de la mascota", "Nom de l’animal", "Name des Tiers"],
  ["petType", "Pet type", "Вид питомца", "Tipo de mascota", "Type d’animal", "Tierart"],
  ["breed", "Breed", "Порода", "Raza", "Race", "Rasse"],
  ["birthday", "Birthday", "День рождения", "Cumpleaños", "Date de naissance", "Geburtstag"],
  ["weightKg", "Weight (kg)", "Вес (кг)", "Peso (kg)", "Poids (kg)", "Gewicht (kg)"],
  ["littleNote", "A little note", "Заметка", "Una nota", "Une petite note", "Kleine Notiz"],
  ["favoriteToy", "Favorite toy, care notes...", "Любимая игрушка, особенности ухода...", "Juguete favorito, notas...", "Jouet préféré, notes de soin…", "Lieblingsspielzeug, Pflegehinweise …"],
  ["medicationName", "Medication name", "Название лекарства", "Nombre del medicamento", "Nom du médicament", "Name des Medikaments"],
  ["doseTime", "Dose time", "Время приёма", "Hora de la dosis", "Heure de prise", "Dosiszeit"],
  ["doseInstructions", "Dose & instructions", "Доза и инструкция", "Dosis e instrucciones", "Dose et instructions", "Dosis & Hinweise"],
  ["dosePlaceholder", "e.g. 1 tablet with breakfast", "например, 1 таблетка с завтраком", "p. ej., 1 comprimido con el desayuno", "ex. : 1 comprimé au petit-déjeuner", "z. B. 1 Tablette zum Frühstück"],
  ["schedule", "Schedule", "Расписание", "Frecuencia", "Fréquence", "Häufigkeit"],
  ["startDate", "Start date", "Дата начала", "Fecha de inicio", "Date de début", "Startdatum"],
  ["vaccineName", "Vaccine", "Вакцина", "Vacuna", "Vaccin", "Impfung"],
  ["nextDueDate", "Next due date", "Следующая дата", "Próxima fecha", "Prochaine échéance", "Nächster Termin"],
  ["givenOn", "Given on", "Дата вакцинации", "Administrada el", "Administré le", "Gegeben am"],
  ["clinic", "Clinic", "Клиника", "Clínica", "Clinique", "Klinik"],
  ["clinicName", "Clinic name", "Название клиники", "Nombre de la clínica", "Nom de la clinique", "Name der Klinik"],
  ["notes", "Notes", "Заметки", "Notas", "Notes", "Notizen"],
  ["groomingService", "Grooming service", "Услуга груминга", "Servicio de peluquería", "Soin de toilettage", "Pflegeleistung"],
  ["nextVisit", "Next visit", "Следующий визит", "Próxima visita", "Prochaine visite", "Nächster Besuch"],
  ["visitDate", "Visit date", "Дата визита", "Fecha de la visita", "Date de visite", "Besuchsdatum"],
  ["provider", "Provider", "Специалист", "Profesional", "Professionnel", "Dienstleister"],
  ["groomerAtHome", "Groomer or at home", "Грумер или дома", "Peluquería o en casa", "Toiletteur ou à domicile", "Salon oder zuhause"],
  ["addPetTitle", "Add a pet", "Добавить питомца", "Añadir mascota", "Ajouter un animal", "Tier hinzufügen"],
  ["addMedicationTitle", "Add medication", "Добавить лекарство", "Añadir medicamento", "Ajouter un médicament", "Medikament hinzufügen"],
  ["addVaccinationTitle", "Add vaccination", "Добавить вакцинацию", "Añadir vacuna", "Ajouter un vaccin", "Impfung hinzufügen"],
  ["addDewormingTitle", "Add deworming record", "Добавить дегельминтизацию", "Añadir desparasitación", "Ajouter une vermifugation", "Entwurmung erfassen"],
  ["addGroomingTitle", "Add grooming visit", "Добавить визит к грумеру", "Añadir visita de peluquería", "Ajouter une visite de toilettage", "Pflegebesuch hinzufügen"],
  ["addWeightTitle", "Record weight", "Записать вес", "Registrar el peso", "Enregistrer le poids", "Gewicht erfassen"],
  ["addFoodTitle", "Add food diary entry", "Добавить запись питания", "Añadir comida al diario", "Ajouter un repas au journal", "Mahlzeit eintragen"],
  ["addDocumentTitle", "Add a health document", "Добавить медицинский документ", "Añadir documento médico", "Ajouter un document médical", "Medizinisches Dokument hinzufügen"],
  ["healthCardTabs", "Health card categories", "Разделы карты питомца", "Categorías de la cartilla", "Rubriques du carnet de santé", "Kategorien der Gesundheitsakte"],
  ["newBestFriend", "A NEW BEST FRIEND", "НОВЫЙ ЛЮБИМЕЦ", "UN NUEVO AMIGO", "UN NOUVEL AMI", "EIN NEUER LIEBLING"],
  ["littleMoreLove", "A LITTLE MORE LOVE", "ЕЩЁ НЕМНОГО ЗАБОТЫ", "UN POCO MÁS DE CARIÑO", "UN PEU PLUS D’AMOUR", "NOCH EIN BISSCHEN LIEBE"],
  ["dog", "Dog", "Собака", "Perro", "Chien", "Hund"],
  ["cat", "Cat", "Кошка", "Gato", "Chat", "Katze"],
  ["other", "Other", "Другой", "Otro", "Autre", "Andere"],
  ["daily", "Daily", "Ежедневно", "Diario", "Chaque jour", "Täglich"],
  ["twiceDaily", "Twice daily", "Дважды в день", "Dos veces al día", "Deux fois par jour", "Zweimal täglich"],
  ["weekly", "Weekly", "Еженедельно", "Semanal", "Chaque semaine", "Wöchentlich"],
  ["asNeeded", "As needed", "По необходимости", "Según necesidad", "Si besoin", "Bei Bedarf"],
  ["addPetFirst", "Add a pet profile before recording care.", "Сначала добавьте профиль питомца.", "Añade primero el perfil de una mascota.", "Ajoutez d’abord un profil d’animal.", "Füge zuerst ein Tierprofil hinzu."],
  ["markGiven", "Mark as given", "Отметить как данное", "Marcar como administrada", "Marquer comme pris", "Als gegeben markieren"],
  ["markNotGiven", "Mark as not given", "Отметить как не данное", "Marcar como no administrada", "Marquer comme non pris", "Als nicht gegeben markieren"],
  ["removeMedication", "Remove {name} from this pet's medication list?", "Удалить «{name}» из списка лекарств питомца?", "¿Quitar {name} de los medicamentos de esta mascota?", "Retirer {name} des médicaments de cet animal ?", "{name} aus der Medikamentenliste dieses Tiers entfernen?"],
  ["doseSaved", "Dose marked as given. Nice work!", "Приём отмечен. Отличная работа!", "Dosis marcada. ¡Buen trabajo!", "Prise notée. Bravo !", "Dosis abgehakt. Gut gemacht!"],
  ["doseUndo", "Dose marked as not given.", "Приём отмечен как невыполненный.", "Dosis marcada como pendiente.", "Prise indiquée comme non prise.", "Dosis als nicht gegeben markiert."],
  ["medRemoved", "Medication removed.", "Лекарство удалено.", "Medicamento eliminado.", "Médicament supprimé.", "Medikament entfernt."],
  ["petProfileReady", "Your pet's profile is ready!", "Профиль питомца готов!", "¡El perfil está listo!", "Le profil de votre animal est prêt !", "Das Tierprofil ist fertig!"],
  ["recordSaved", "Care record saved.", "Запись сохранена.", "Registro guardado.", "Soin enregistré.", "Pflegeeintrag gespeichert."],
  ["markToday", "Today", "Сегодня", "Hoy", "Aujourd’hui", "Heute"],
  ["exampleJoint", "Joint support", "Поддержка суставов", "Apoyo articular", "Soutien articulaire", "Gelenkpflege"],
  ["exampleOmega", "Omega-3 oil", "Масло Омега-3", "Aceite Omega-3", "Huile oméga-3", "Omega-3-Öl"],
  ["exampleDental", "Dental gel", "Гель для зубов", "Gel dental", "Gel dentaire", "Zahngel"],
  ["exampleBath", "Bath & brush", "Купание и расчёсывание", "Baño y cepillado", "Bain et brossage", "Bad & Bürsten"],
  ["exampleNails", "Nail trim", "Стрижка когтей", "Corte de uñas", "Coupe des griffes", "Krallenpflege"],
  ["exampleRabies", "Rabies booster", "Прививка от бешенства", "Refuerzo contra la rabia", "Rappel antirabique", "Tollwut-Auffrischung"],
  ["goldenRetriever", "Golden retriever", "Золотистый ретривер", "Golden retriever", "Golden retriever", "Golden Retriever"],
  ["britishShorthair", "British shorthair", "Британская короткошёрстная", "British shorthair", "British shorthair", "Britisch Kurzhaar"],
  ["atHome", "At home", "Дома", "En casa", "À domicile", "Zu Hause"],
  ["overdue", "Overdue", "Просрочено", "Atrasado", "En retard", "Überfällig"],
  ["recordsPageTitle", "A little history, a lot of love", "История заботы и любви", "Una historia de cuidados y cariño", "Une belle histoire de soins et d’amour", "Eine Geschichte voller Fürsorge und Liebe"],
  ["medicationsPageTitle", "The medication routine", "Режим приёма лекарств", "La rutina de medicamentos", "La routine des médicaments", "Der Medikamentenplan"],
  ["emptyPetList", "Add a pet to get started", "Добавьте питомца", "Añade una mascota para empezar", "Ajoutez un animal pour commencer", "Füge ein Tier hinzu"]
].map(([key, en, ru, es, fr, de]) => [key, { en, ru, es, fr, de }]));

let locale = (() => {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (LANGUAGES.includes(requested)) return requested;
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch (error) {
    console.warn("Could not read the saved language preference:", error);
  }
  const browserLanguage = (navigator.languages && navigator.languages[0] || navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browserLanguage) ? browserLanguage : "en";
})();
const t = (key, values = {}) => {
  const message = (messages[key] && (messages[key][locale] || messages[key].en)) || key;
  return message.replace(/\{(\w+)\}/g, (_, name) => values[name] == null ? "" : String(values[name]));
};
const formatNumber = (value) => new Intl.NumberFormat(LOCALE_TAGS[locale]).format(value);
const today = new Date();
const isoDate = (date) => {
  const d = new Date(date);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};
const dayOffset = (amount) => isoDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + amount));
const shortDate = (value, options = { month: "short", day: "numeric" }) =>
  new Intl.DateTimeFormat(LOCALE_TAGS[locale], options).format(new Date(`${value}T12:00:00`));
const makeId = () => `id-${Date.now()}-${Math.random().toString(16).slice(2, 7)}`;
const emojiFor = (species) => species === "Cat" ? "🐱" : species === "Dog" ? "🐶" : "🐾";
const localizedSpecies = (species) => species === "Dog" ? t("dog") : species === "Cat" ? t("cat") : t("other");
const localizedBreed = (pet) => pet.id === "milo" ? t("goldenRetriever") : pet.id === "luna" ? t("britishShorthair") : pet.breed || localizedSpecies(pet.species);
const localizedProvider = (provider) => provider === "At home" ? t("atHome") : provider;
const localizedName = (item) => {
  const exampleNames = { med1: "exampleJoint", med2: "exampleOmega", med3: "exampleDental", vac1: "exampleRabies", groom1: "exampleBath", groom2: "exampleNails" };
  return exampleNames[item.id] ? t(exampleNames[item.id]) : item.name;
};
const localizedDose = (item) => {
  const exampleDoses = {
    med1: { en: "1 chew · with breakfast", ru: "1 жевательная таблетка · с завтраком", es: "1 masticable · con el desayuno", fr: "1 bouchée · au petit-déjeuner", de: "1 Kautablette · zum Frühstück" },
    med2: { en: "1 pump · with food", ru: "1 нажатие · с едой", es: "1 pulsación · con la comida", fr: "1 pression · avec le repas", de: "1 Pumpstoß · zum Futter" },
    med3: { en: "Small amount · brush gently", ru: "Немного геля · аккуратно почистить", es: "Poca cantidad · cepillar suavemente", fr: "Petite quantité · brosser doucement", de: "Wenig Gel · sanft bürsten" }
  };
  return exampleDoses[item.id] ? exampleDoses[item.id][locale] : item.dose;
};
const localizedSchedule = (schedule) => ({
  "Daily": t("daily"),
  "Twice daily": t("twiceDaily"),
  "Weekly": t("weekly"),
  "As needed": t("asNeeded")
}[schedule] || schedule || t("daily"));
const formatTime = (value) => {
  if (!value) return "";
  const [hours, minutes] = value.split(":").map(Number);
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], { hour: "numeric", minute: "2-digit" })
    .format(new Date(2000, 0, 1, hours, minutes));
};

function emptyData() {
  return { pets: [], medications: [], vaccinations: [], deworming: [], grooming: [], weights: [], foodEntries: [], documents: [], vetReports: [], completions: {} };
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return emptyData();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.pets) || !Array.isArray(parsed.medications)) return emptyData();
    return { ...emptyData(), ...parsed };
  } catch (error) {
    console.error("Could not load My Pet records:", error);
    return emptyData();
  }
}

let data = loadData();
let activePetId = data.pets[0]?.id || null;
let currentView = "overview";
let recordFilter = "all";
let toastTimer;
let currentVetDraft = null;
let nativeSaveSuccessKey = "fileSavedMessage";
let nativeSavePending = false;
let nativePrintVisibilityHandler = null;
let nativePrintAfterHandler = null;
const byId = (id) => document.getElementById(id);
const safe = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const petById = (id) => data.pets.find((pet) => pet.id === id);
const selectedPet = () => petById(activePetId);
const selectedItems = (items) => items.filter((item) => item.petId === activePetId);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function openDocumentDatabase() {
  if (!window.indexedDB) return Promise.reject(new Error("IndexedDB is unavailable"));
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open("my-pet-documents-v1", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("files")) request.result.createObjectStore("files", { keyPath: "id" });
    };
    request.onsuccess = () => {
      request.result.onversionchange = () => request.result.close();
      resolve(request.result);
    };
    request.onerror = () => reject(request.error || new Error("Could not open the document store"));
  });
}

function storeDocumentFile(id, file) {
  return openDocumentDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction("files", "readwrite");
    transaction.objectStore("files").put({ id, file });
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = transaction.onabort = () => {
      const error = transaction.error || new Error("Could not save the document");
      database.close();
      reject(error);
    };
  }));
}

function readDocumentFile(id) {
  return openDocumentDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction("files", "readonly");
    const request = transaction.objectStore("files").get(id);
    let file = null;
    request.onsuccess = () => {
      file = request.result ? request.result.file : null;
    };
    transaction.oncomplete = () => {
      database.close();
      resolve(file);
    };
    transaction.onerror = transaction.onabort = () => {
      const error = transaction.error || new Error("Could not read the document");
      database.close();
      reject(error);
    };
  }));
}

function deleteDocumentFile(id) {
  return openDocumentDatabase().then((database) => new Promise((resolve, reject) => {
    const transaction = database.transaction("files", "readwrite");
    transaction.objectStore("files").delete(id);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = transaction.onabort = () => {
      const error = transaction.error || new Error("Could not delete the document");
      database.close();
      reject(error);
    };
  }));
}

function documentAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(reader.error || new Error("Could not read the document"));
    reader.readAsDataURL(file);
  });
}

function documentMimeType(fileName, fallback = "application/octet-stream") {
  const extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
  return ({
    html: "text/html",
    txt: "text/plain",
    pdf: "application/pdf",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp"
  })[extension] || fallback;
}

async function viewDocument(id) {
  const record = data.documents.find((item) => item.id === id);
  if (!record) return;
  try {
    const file = await readDocumentFile(id);
    if (!file) {
      showToast(t("documentMissing"));
      return;
    }
    const dialog = byId("document-dialog");
    if (dialog.open) closeDocumentViewer();
    const url = URL.createObjectURL(file);
    byId("document-view-title").textContent = record.title;
    byId("document-download").href = url;
    byId("document-download").download = record.fileName;
    byId("open-native-document").hidden = !(window.MyPetAndroid && typeof window.MyPetAndroid.openDocument === "function");
    byId("document-preview").replaceChildren();
    if (record.fileName.toLowerCase().endsWith(".pdf")) {
      const preview = document.createElement("iframe");
      preview.src = url;
      preview.title = record.title;
      byId("document-preview").append(preview);
    } else if (record.fileName.toLowerCase().endsWith(".txt")) {
      const preview = document.createElement("pre");
      preview.className = "document-text-preview";
      preview.textContent = await file.text();
      byId("document-preview").append(preview);
    } else {
      const preview = document.createElement("img");
      preview.src = url;
      preview.alt = record.title;
      byId("document-preview").append(preview);
    }
    dialog.dataset.objectUrl = url;
    dialog.dataset.documentId = id;
    dialog.showModal();
  } catch (error) {
    console.error("Could not open the health document:", error);
    showToast(t("documentOpenFailed"));
  }
}

async function removeDocument(id) {
  const record = data.documents.find((item) => item.id === id);
  if (!record || !window.confirm(t("removeDocument", { title: record.title }))) return;
  try {
    await deleteDocumentFile(id);
  } catch (error) {
    console.error("Could not remove the health document:", error);
    showToast(t("documentDeleteFailed"));
    return;
  }
  if (byId("document-dialog").dataset.documentId === id) closeDocumentViewer();
  data.documents = data.documents.filter((item) => item.id !== id);
  save();
  render();
  showToast(t("recordSaved"));
}

function closeDocumentViewer() {
  const dialog = byId("document-dialog");
  if (dialog.open) dialog.close();
}

function updateLanguageUrl() {
  if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return;
  const url = new URL(window.location.href);
  if (url.searchParams.get("lang") !== locale) {
    url.searchParams.set("lang", locale);
    window.history.replaceState(window.history.state, "", url);
  }
}

function applyTranslations() {
  updateLanguageUrl();
  document.documentElement.lang = LOCALE_TAGS[locale].slice(0, 2);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (messages[key]) element.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (messages[key]) element.setAttribute("aria-label", t(key));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (messages[key]) element.placeholder = t(key);
  });
  byId("language-picker").value = locale;
  const title = t("metaTitle");
  const description = t("metaDescription");
  const localizedUrl = new URL(PUBLIC_SITE_URL);
  localizedUrl.searchParams.set("lang", locale);
  document.title = title;
  document.getElementById("app-description").content = description;
  document.querySelector('link[rel="canonical"]').href = localizedUrl.href;
  document.querySelector('meta[property="og:title"]').content = title;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:url"]').content = localizedUrl.href;
  document.querySelector('meta[property="og:locale"]').content = SOCIAL_LOCALES[locale];
  const alternateLocales = LANGUAGES.filter((language) => language !== locale).map((language) => SOCIAL_LOCALES[language]);
  document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((meta, index) => {
    meta.content = alternateLocales[index];
  });
  document.querySelector('meta[name="twitter:title"]').content = title;
  document.querySelector('meta[name="twitter:description"]').content = description;
  render();
}

function setLocale(language) {
  if (!LANGUAGES.includes(language) || language === locale) return;
  locale = language;
  try {
    localStorage.setItem(LANGUAGE_KEY, locale);
  } catch (error) {
    console.warn("Could not save the language preference:", error);
  }
  applyTranslations();
}

function setHeader() {
  const now = new Date();
  byId("today-date").textContent = new Intl.DateTimeFormat(LOCALE_TAGS[locale], { weekday: "short", month: "short", day: "numeric" }).format(now);
  byId("short-date").textContent = shortDate(dayOffset(0));
  const hour = now.getHours();
  const greeting = t(hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening");
  byId("greeting").textContent = t(hour < 12 ? "morningTag" : "laterTag");
  byId("page-title").innerHTML = `${greeting}, Alex <span class="wave">✦</span>`;
}

function renderPets() {
  byId("pet-list").innerHTML = data.pets.map((pet) => `
    <button class="pet-item ${pet.id === activePetId ? "selected" : ""}" data-pet-id="${safe(pet.id)}">
      <span class="pet-avatar" style="background:${safe(pet.color || "#edf2ea")}">${emojiFor(pet.species)}</span>
      <span><strong>${safe(pet.name)}</strong><small>${safe(localizedBreed(pet))}</small></span>
    </button>`).join("") || `<div class="no-pets">${safe(t("emptyPetList"))}</div>`;
  byId("med-count").textContent = selectedItems(data.medications).filter((med) => med.active).length;
  const pet = selectedPet();
  byId("page-subtitle").textContent = pet ? t("overviewSubtitle", { pet: pet.name }) : t("noPetSubtitle");
  byId("pet-hero").classList.toggle("no-pet-hero", !pet);
}

function isComplete(med) {
  return Boolean(data.completions[`${dayOffset(0)}:${med.id}`]);
}

function getTodayItems() {
  const meds = selectedItems(data.medications).filter((med) => med.active).map((med) => ({
    id: med.id, type: "medicine", title: localizedName(med), detail: localizedDose(med), time: formatTime(med.time), sortTime: med.time || "99:99", done: isComplete(med)
  }));
  const dueVaccines = selectedItems(data.vaccinations).filter((record) => record.nextDate === dayOffset(0)).map((record) => ({
    id: record.id, type: "vaccine", title: localizedName(record), detail: t("vaccinationDue"), time: t("today"), sortTime: "23:59"
  }));
  const dueGrooming = selectedItems(data.grooming).filter((record) => record.nextDate === dayOffset(0)).map((record) => ({
    id: record.id, type: "grooming", title: localizedName(record), detail: t("groomingReminder"), time: t("today"), sortTime: "23:59"
  }));
  const dueDeworming = selectedItems(data.deworming).filter((record) => record.nextDate === dayOffset(0)).map((record) => ({
    id: record.id, type: "deworming", title: record.name, detail: t("deworming"), time: t("today"), sortTime: "23:59"
  }));
  return [...meds, ...dueVaccines, ...dueGrooming, ...dueDeworming].sort((a, b) => a.sortTime.localeCompare(b.sortTime));
}

function renderToday() {
  const items = getTodayItems();
  const el = byId("today-care-list");
  if (!items.length) {
    el.innerHTML = `<div class="empty-state">${safe(t("emptyToday"))}</div>`;
    return;
  }
  el.innerHTML = items.map((item) => `
    <div class="care-item">
      <span class="care-symbol ${item.type}">${item.type === "medicine" || item.type === "deworming" ? "✚" : item.type === "vaccine" ? "♡" : "✧"}</span>
      <span class="care-copy"><strong>${safe(item.title)}</strong><span>${safe(item.detail)}</span></span>
      <span class="care-time">${safe(item.time)}</span>
      ${item.type === "medicine" ? `<button class="done-button ${item.done ? "done" : ""}" data-complete="${safe(item.id)}" aria-label="${safe(t(item.done ? "markNotGiven" : "markGiven"))}">✓</button>` : "" }
    </div>`).join("");
}

function getUpcoming() {
  const entries = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, type: "vaccine" })),
    ...selectedItems(data.deworming).map((item) => ({ ...item, type: "deworming" })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, type: "grooming" }))
  ].filter((item) => item.nextDate).sort((a, b) => a.nextDate.localeCompare(b.nextDate));
  return entries.slice(0, 3);
}

function renderUpcoming() {
  const entries = getUpcoming();
  byId("upcoming-list").innerHTML = entries.length ? entries.map((item) => {
    const days = Math.round((new Date(`${item.nextDate}T12:00:00`) - new Date(`${dayOffset(0)}T12:00:00`)) / 86400000);
    const date = new Date(`${item.nextDate}T12:00:00`);
    const reminderType = item.type === "vaccine" ? t("vaccination") : item.type === "deworming" ? t("deworming") : t("grooming");
    return `<div class="upcoming-item">
      <span class="mini-date"><b>${formatNumber(date.getDate())}</b><small>${new Intl.DateTimeFormat(LOCALE_TAGS[locale], { month: "short" }).format(date)}</small></span>
      <span class="upcoming-copy"><strong>${safe(localizedName(item))}</strong><span>${safe(reminderType)} · ${days < 0 ? t("daysOverdue", { count: formatNumber(Math.abs(days)) }) : days === 0 ? t("dueToday") : t("inDays", { count: formatNumber(days) })}</span></span>
      <span class="upcoming-tag ${days <= 14 ? "soon" : ""}">${days < 0 ? t("overdue") : days === 0 ? t("today") : t("inDays", { count: formatNumber(days) })}</span>
    </div>`;
  }).join("") : `<div class="empty-state">${safe(t("emptyUpcoming"))}</div>`;
}

function renderStats() {
  const pet = selectedPet();
  const meds = selectedItems(data.medications).filter((med) => med.active);
  const records = [
    ...selectedItems(data.vaccinations), ...selectedItems(data.deworming), ...selectedItems(data.grooming),
    ...selectedItems(data.weights), ...selectedItems(data.foodEntries), ...selectedItems(data.documents), ...selectedItems(data.vetReports)
  ];
  const latestWeight = selectedItems(data.weights).sort((a, b) => b.date.localeCompare(a.date))[0];
  const upcoming = getUpcoming()[0];
  const dueSoon = [...selectedItems(data.vaccinations), ...selectedItems(data.deworming), ...selectedItems(data.grooming)]
    .filter((item) => item.nextDate && item.nextDate >= dayOffset(0) && item.nextDate <= dayOffset(30)).length;
  byId("stats-grid").innerHTML = `
    <article class="stat-card"><span class="stat-icon green">♡</span><span class="stat-copy"><strong>${formatNumber(pet ? 1 : 0)}</strong><p>${safe(t("happyPet", { species: localizedSpecies(pet ? pet.species : "Other") }))}</p><small>${pet ? safe(t("petInCare", { pet: pet.name })) : safe(t("addPetToProfile"))}</small></span></article>
    <article class="stat-card"><span class="stat-icon peach">✚</span><span class="stat-copy"><strong>${formatNumber(meds.length)}</strong><p>${safe(t("activeMedications"))}</p><small>${safe(t("dosesDone", { count: formatNumber(meds.filter(isComplete).length) }))}</small></span></article>
    <article class="stat-card"><span class="stat-icon blue">▣</span><span class="stat-copy"><strong>${formatNumber(records.length)}</strong><p>${safe(t("careRecords"))}</p><small>${safe(latestWeight ? t("latestWeight", { weight: formatNumber(Number(latestWeight.weight)) }) : t("healthCardCategories"))}</small></span></article>
    <article class="stat-card"><span class="stat-icon pink">◷</span><span class="stat-copy"><strong>${formatNumber(dueSoon)}</strong><p>${safe(t("comingUpSoon"))}</p><small>${upcoming ? `${safe(localizedName(upcoming))} · ${safe(shortDate(upcoming.nextDate))}` : safe(t("noUpcomingReminders"))}</small></span></article>`;
}

function renderRecords() {
  const records = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, type: "vaccination", provider: item.clinic || t("clinicVisit") })),
    ...selectedItems(data.deworming).map((item) => ({ ...item, type: "deworming", provider: item.provider || "" })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, type: "grooming", provider: item.provider || t("groomingVisit") })),
    ...selectedItems(data.weights).map((item) => ({ ...item, type: "weight" })),
    ...selectedItems(data.foodEntries).map((item) => ({ ...item, type: "food" })),
    ...selectedItems(data.documents).map((item) => ({ ...item, type: "document" })),
    ...selectedItems(data.vetReports).map((item) => ({ ...item, type: "vet" }))
  ].filter((item) => recordFilter === "all" || item.type === recordFilter)
    .sort((a, b) => b.date.localeCompare(a.date));
  const detailFor = (item) => {
    if (item.type === "vaccination") return `${t("vaccination")} · ${item.provider}`;
    if (item.type === "deworming") return `${t("deworming")}${item.provider ? ` · ${item.provider}` : ""}`;
    if (item.type === "grooming") return `${t("grooming")} · ${item.provider}`;
    if (item.type === "weight") return item.notes || t("weightRecordNote");
    if (item.type === "food") return `${t(item.meal)} · ${item.amount}`;
    if (item.type === "vet") return item.summary;
    return `${t(item.category)} · ${item.fileName}`;
  };
  const titleFor = (item) => item.type === "weight"
    ? t("weightEntryTitle", { weight: formatNumber(Number(item.weight)) })
    : item.type === "food" ? item.food : item.type === "document" ? item.title : item.type === "vet" ? t("vetSavedReport") : item.name;
  const vetMode = recordFilter === "vet";
  if (currentVetDraft && currentVetDraft.petId !== activePetId) {
    currentVetDraft = null;
    byId("vet-report-form").reset();
    byId("vet-result").hidden = true;
    byId("save-vet-report").disabled = true;
  }
  byId("vet-assistant").hidden = !vetMode;
  byId("records-list").hidden = vetMode;
  byId("record-actions").hidden = vetMode;
  byId("document-actions").hidden = recordFilter !== "document";
  byId("document-storage-note").hidden = recordFilter !== "document";
  if (vetMode) {
    renderVetHistory();
    return;
  }
  byId("records-list").innerHTML = records.length ? records.map((item) => `
    <div class="record-row">
      <span class="record-icon ${item.type}">${item.type === "vaccination" ? "♡" : item.type === "deworming" ? "✚" : item.type === "grooming" ? "✧" : item.type === "weight" ? "↗" : item.type === "food" ? "◌" : item.type === "vet" ? "✉" : "▤"}</span>
      <span class="record-main"><strong>${safe(titleFor(item))}</strong><span>${safe(detailFor(item))}</span></span>
      <span class="record-meta"><strong>${safe(shortDate(item.date))}</strong><span>${safe(t("recorded"))}</span></span>
      <span class="record-trailing">
        ${item.nextDate ? `<span class="record-tag ${item.nextDate < dayOffset(0) ? "past" : ""}">${safe(t("nextDate", { date: shortDate(item.nextDate) }))}</span>` : ""}
        ${item.type === "document" ? `<button type="button" class="record-tool" data-view-document="${safe(item.id)}" aria-label="${safe(t("viewDocument", { title: item.title }))}">${safe(t("viewDocumentShort"))}</button><button type="button" class="delete-entry" data-delete-document="${safe(item.id)}" aria-label="${safe(t("removeDocument", { title: item.title }))}">×</button>` : ""}
        ${item.type === "vet" ? `<button type="button" class="delete-entry" data-delete-vet-report="${safe(item.id)}" aria-label="${safe(t("removeVetReport"))}">×</button>` : ""}
      </span>
    </div>`).join("") : `<div class="empty-state">${safe(t("emptyRecords"))}</div>`;
}

function renderVetHistory() {
  const reports = selectedItems(data.vetReports).sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""));
  byId("vet-history-list").innerHTML = reports.length ? reports.map((report) => `
    <details class="vet-history-item">
      <summary><strong>${safe(shortDate(report.date))}</strong><span>${safe(report.summary)}</span></summary>
      <pre>${safe(report.message)}</pre>
      <button type="button" class="delete-entry" data-delete-vet-report="${safe(report.id)}" aria-label="${safe(t("removeVetReport"))}">×</button>
    </details>`).join("") : `<p class="empty-state">${safe(t("emptyVetReports"))}</p>`;
}

function formatLocalDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function prepareVetMessage(values) {
  const pet = selectedPet();
  const lines = [
    t("vetMessageIntro", { pet: pet.name, species: localizedSpecies(pet.species) }),
    t("vetMessageSymptoms", { value: values.symptoms.trim() }),
    t("vetMessageOnset", { value: formatLocalDateTime(values.onset) })
  ];
  if (values.temperature) {
    const measuredAt = values.temperatureTime ? t("vetMessageTemperatureTime", { value: formatLocalDateTime(values.temperatureTime) }) : "";
    lines.push(`${t("vetMessageTemperature", { value: formatNumber(Number(values.temperature)) })}${measuredAt}`);
  }
  if (values.appetite !== "unknown") lines.push(t("vetMessageAppetite", { value: t(`appetite${values.appetite[0].toUpperCase()}${values.appetite.slice(1)}`) }));
  if (values.water !== "unknown") lines.push(t("vetMessageWater", { value: t(`water${values.water[0].toUpperCase()}${values.water.slice(1)}`) }));
  if (values.behavior.trim()) lines.push(t("vetMessageBehavior", { value: values.behavior.trim() }));
  if (values.otherSigns.trim()) lines.push(t("vetMessageOther", { value: values.otherSigns.trim() }));
  if (values.exposures.trim()) lines.push(t("vetMessageExposure", { value: values.exposures.trim() }));
  lines.push("", t("vetMessageAsk"));
  return lines.join("\n");
}

function setVetShareLinks(message) {
  const text = encodeURIComponent(message);
  byId("share-whatsapp").href = `https://wa.me/?text=${text}`;
  byId("share-telegram").href = `https://t.me/share/url?url=&text=${text}`;
  byId("share-max").href = `https://max.ru/:share?text=${text}`;
}

async function copyVetDraft() {
  if (!currentVetDraft) return;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentVetDraft.message);
    } else {
      const field = byId("vet-message");
      field.focus();
      field.select();
      if (!document.execCommand("copy")) throw new Error("Copy command was not accepted");
      field.setSelectionRange(0, 0);
    }
    showToast(t("messageCopied"));
  } catch (error) {
    console.error("Could not copy the vet-prep message:", error);
    showToast(t("copyFailed"));
  }
}

function saveVetDraft() {
  if (!currentVetDraft || currentVetDraft.saved || currentVetDraft.petId !== activePetId) return;
  const report = {
    id: makeId(),
    petId: activePetId,
    date: currentVetDraft.onset.slice(0, 10),
    createdAt: new Date().toISOString(),
    summary: currentVetDraft.symptoms.slice(0, 180),
    message: currentVetDraft.message
  };
  data.vetReports.push(report);
  try {
    save();
  } catch (error) {
    data.vetReports.pop();
    console.error("Could not save the vet-prep note:", error);
    showToast(t("vetReportSaveFailed"));
    return;
  }
  currentVetDraft.saved = true;
  byId("save-vet-report").disabled = true;
  renderStats();
  renderVetHistory();
  showToast(t("recordSaved"));
}

function removeVetReport(id) {
  const report = data.vetReports.find((item) => item.id === id && item.petId === activePetId);
  if (!report || !window.confirm(t("removeVetReportConfirm"))) return;
  const previous = data.vetReports;
  data.vetReports = previous.filter((item) => item.id !== id);
  try {
    save();
  } catch (error) {
    data.vetReports = previous;
    console.error("Could not delete the vet-prep note:", error);
    showToast(t("vetReportDeleteFailed"));
    return;
  }
  renderStats();
  renderVetHistory();
}

function formattedRecordDate(value) {
  return value ? shortDate(value, { year: "numeric", month: "long", day: "numeric" }) : t("notRecorded");
}

function petRecordSections(pet) {
  const profile = [
    t("profileLine", { label: t("petName"), value: pet.name }),
    t("profileLine", { label: t("petType"), value: localizedSpecies(pet.species) }),
    t("profileLine", { label: t("breed"), value: pet.breed || t("notRecorded") }),
    t("profileLine", { label: t("birthday"), value: pet.birthday ? formattedRecordDate(pet.birthday) : t("notRecorded") })
  ];
  const latestWeight = selectedItems(data.weights).sort((a, b) => b.date.localeCompare(a.date))[0];
  if (latestWeight) {
    profile.push(t("profileLine", {
      label: t("weight"),
      value: t("weightHistoryLine", { weight: formatNumber(Number(latestWeight.weight)), date: formattedRecordDate(latestWeight.date) })
    }));
  } else if (pet.weight) {
    profile.push(t("profileLine", { label: t("weight"), value: `${formatNumber(Number(pet.weight))} kg` }));
  }
  const dateLine = (name, date) => t("recordLine", { name, date: formattedRecordDate(date) });
  const nextDateLine = (name, date, nextDate) => nextDate
    ? t("recordNextLine", { name, date: formattedRecordDate(date), nextDate: formattedRecordDate(nextDate) })
    : dateLine(name, date);
  const medications = selectedItems(data.medications).filter((item) => item.active).map((item) =>
    t("medicationScheduleLine", {
      name: localizedName(item),
      dose: localizedDose(item) || t("notRecorded"),
      schedule: localizedSchedule(item.schedule),
      time: item.time ? formatTime(item.time) : t("notRecorded")
    }));
  const vaccinations = selectedItems(data.vaccinations).map((item) =>
    nextDateLine(localizedName(item), item.date, item.nextDate));
  const treatments = selectedItems(data.deworming).map((item) =>
    nextDateLine(item.name, item.date, item.nextDate));
  const weights = selectedItems(data.weights).sort((a, b) => b.date.localeCompare(a.date)).map((item) =>
    t("weightHistoryLine", { weight: formatNumber(Number(item.weight)), date: formattedRecordDate(item.date) }));
  const meals = selectedItems(data.foodEntries).sort((a, b) => b.date.localeCompare(a.date)).map((item) =>
    t("mealHistoryLine", {
      food: item.food,
      meal: t(item.meal),
      amount: item.amount || t("notRecorded"),
      date: formattedRecordDate(item.date)
    }));
  const grooming = selectedItems(data.grooming).map((item) =>
    nextDateLine(item.name, item.date, item.nextDate));
  const documents = selectedItems(data.documents).map((item) =>
    t("documentHistoryLine", { title: item.title, category: t(item.category), date: formattedRecordDate(item.date) }));
  const vetNotes = selectedItems(data.vetReports).sort((a, b) => b.date.localeCompare(a.date)).map((item) =>
    t("vetNoteLine", { date: formattedRecordDate(item.date), summary: item.message }));
  return [
    { title: t("petDetailsSection"), lines: profile },
    { title: t("passportVaccinations"), lines: vaccinations },
    { title: t("passportTreatments"), lines: treatments },
    { title: t("passportMedications"), lines: medications },
    { title: t("passportWeight"), lines: weights },
    { title: t("passportFood"), lines: meals },
    { title: t("passportGrooming"), lines: grooming },
    { title: t("passportDocuments"), lines: documents },
    { title: t("passportVetNotes"), lines: vetNotes }
  ];
}

async function downloadBlob(blob, fileName, successMessageKey) {
  if (window.MyPetAndroid && typeof window.MyPetAndroid.saveGeneratedDocument === "function") {
    if (nativeSavePending) {
      showToast(t("nativeSavePending"));
      return true;
    }
    nativeSavePending = true;
    nativeSaveSuccessKey = successMessageKey || "fileSavedMessage";
    try {
      await window.MyPetAndroid.saveGeneratedDocument(fileName, documentMimeType(fileName, blob.type.split(";")[0]), await documentAsBase64(blob));
    } catch (error) {
      nativeSavePending = false;
      throw error;
    }
    return true;
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return false;
}

async function downloadPetPassport() {
  const pet = selectedPet();
  if (!pet) {
    showToast(t("addPetFirst"));
    return;
  }
  const sections = petRecordSections(pet).map((section) => `
    <section>
      <h2>${safe(section.title)}</h2>
      ${section.lines.length ? `<ul>${section.lines.map((line) => `<li>${safe(line)}</li>`).join("")}</ul>` : `<p>${safe(t("passportNoRecords"))}</p>`}
    </section>`).join("");
  const generated = t("passportGeneratedOn", { date: formattedRecordDate(dayOffset(0)) });
  const html = `<!doctype html>
<html lang="${safe(locale)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${safe(t("passportTitle"))}</title>
<style>body{max-width:760px;margin:32px auto;padding:0 20px;color:#263a36;font:15px/1.6 Arial,sans-serif}h1{font-size:26px}h2{margin:24px 0 8px;padding-bottom:5px;border-bottom:1px solid #dfe7df;font-size:17px}li{margin:5px 0}.note{color:#66776d;font-size:13px}.date{color:#75847b;font-size:12px}section{break-inside:avoid}@media print{body{margin:0 auto}}</style></head>
<body><main><h1>${safe(t("passportTitle"))}</h1><p class="note">${safe(t("passportDisclaimer"))}</p><p class="date">${safe(generated)}</p>${sections}</main></body></html>`;
  try {
    const nativeSave = await downloadBlob(new Blob([html], { type: "text/html;charset=utf-8" }), `my-pet-passport-${dayOffset(0)}.html`, "passportDownloadReady");
    if (!nativeSave) showToast(t("passportDownloadReady"));
  } catch (error) {
    console.error("Could not generate the pet passport:", error);
    showToast(t("documentExportFailed"));
  }
}

function printTreatmentSchedule() {
  const pet = selectedPet();
  if (!pet) {
    showToast(t("addPetFirst"));
    return;
  }
  const nativePrint = window.MyPetAndroid && typeof window.MyPetAndroid.printCurrentPage === "function";
  if (!nativePrint && typeof window.print !== "function") {
    showToast(t("printNotSupported"));
    return;
  }
  const medications = selectedItems(data.medications).filter((item) => item.active).map((item) =>
    t("medicationScheduleLine", {
      name: localizedName(item),
      dose: localizedDose(item) || t("notRecorded"),
      schedule: localizedSchedule(item.schedule),
      time: item.time ? formatTime(item.time) : t("notRecorded")
    }));
  const dueItems = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, category: t("vaccination") })),
    ...selectedItems(data.deworming).map((item) => ({ ...item, category: t("deworming") })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, category: t("grooming") }))
  ].filter((item) => item.nextDate).sort((a, b) => a.nextDate.localeCompare(b.nextDate))
    .map((item) => t("recordNextLine", {
      name: `${item.category}: ${localizedName(item)}`,
      date: formattedRecordDate(item.date),
      nextDate: formattedRecordDate(item.nextDate)
    }));
  const hasEntries = medications.length || dueItems.length;
  const sheet = byId("print-sheet");
  sheet.innerHTML = `
    <header class="print-header">
      <h1>${safe(t("treatmentScheduleTitle"))}</h1>
      <p>${safe(t("profileLine", { label: t("petName"), value: pet.name }))} · ${safe(localizedSpecies(pet.species))}</p>
      <p>${safe(t("passportGeneratedOn", { date: formattedRecordDate(dayOffset(0)) }))}</p>
    </header>
    <section><h2>${safe(t("passportMedications"))}</h2>${medications.length ? `<ul>${medications.map((line) => `<li>${safe(line)}</li>`).join("")}</ul>` : `<p>${safe(t("passportNoRecords"))}</p>`}</section>
    <section><h2>${safe(t("upcomingCare"))}</h2>${dueItems.length ? `<ul>${dueItems.map((line) => `<li>${safe(line)}</li>`).join("")}</ul>` : `<p>${safe(t("passportNoRecords"))}</p>`}</section>
    ${hasEntries ? "" : `<p class="print-empty">${safe(t("treatmentNoRecords"))}</p>`}`;
  sheet.hidden = false;
  const cleanup = clearPrintSheet;
  nativePrintAfterHandler = cleanup;
  window.addEventListener("afterprint", cleanup, { once: true });
  if (nativePrint) {
    window.MyPetAndroid.printCurrentPage(t("treatmentScheduleTitle"));
    nativePrintVisibilityHandler = () => {
      if (document.visibilityState === "visible") clearPrintSheet();
    };
    document.addEventListener("visibilitychange", nativePrintVisibilityHandler);
    setTimeout(cleanup, 300000);
  } else {
    window.print();
    setTimeout(cleanup, 30000);
  }
}

async function saveMedicalSummary() {
  const pet = selectedPet();
  if (!pet) {
    showToast(t("addPetFirst"));
    return;
  }
  const sections = petRecordSections(pet);
  const lines = [
    t("medicalSummaryTitle", { pet: pet.name }),
    t("medicalSummaryDisclaimer"),
    t("passportGeneratedOn", { date: formattedRecordDate(dayOffset(0)) }),
    ""
  ];
  for (const section of sections) {
    lines.push(section.title);
    lines.push(...(section.lines.length ? section.lines.map((line) => `- ${line}`) : [`- ${t("passportNoRecords")}`]), "");
  }
  const id = makeId();
  const fileName = `my-pet-medical-summary-${dayOffset(0)}.txt`;
  const record = {
    id,
    petId: activePetId,
    title: t("medicalSummaryTitle", { pet: pet.name }),
    category: "dischargeSummary",
    date: dayOffset(0),
    fileName,
    notes: t("medicalSummaryDisclaimer")
  };
  const file = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  try {
    await storeDocumentFile(id, file);
  } catch (error) {
    console.error("Could not store the generated medical summary:", error);
    showToast(t("documentExportFailed"));
    return;
  }
  data.documents.push(record);
  try {
    save();
  } catch (error) {
    data.documents.pop();
    try {
      await deleteDocumentFile(id);
    } catch (cleanupError) {
      console.error("Could not clean up an unsaved medical summary:", cleanupError);
    }
    console.error("Could not save the medical summary record:", error);
    showToast(t("documentExportFailed"));
    return;
  }
  renderStats();
  renderRecords();
  showToast(t("medicalSummarySaved"));
}

function renderMedications() {
  const meds = selectedItems(data.medications).filter((med) => med.active);
  byId("med-summary").innerHTML = `<div class="med-summary-card"><strong>${formatNumber(meds.length)}</strong><span>${safe(t("activeMedications"))}</span></div><div class="med-summary-card"><strong>${formatNumber(meds.filter(isComplete).length)} / ${formatNumber(meds.length)}</strong><span>${safe(t("dosesGivenToday"))}</span></div><div class="med-summary-card"><strong>${formatNumber(meds.length - meds.filter(isComplete).length)}</strong><span>${safe(t("stillToGive"))}</span></div>`;
  byId("medications-list").innerHTML = meds.length ? meds.map((med) => `
    <article class="medication-card">
      <span class="care-symbol medicine">✚</span>
      <span class="medication-info"><strong>${safe(localizedName(med))}</strong><span>${safe(localizedDose(med))} · ${safe(localizedSchedule(med.schedule))}</span></span>
      <span class="medication-schedule">${safe(formatTime(med.time))}<br>${safe(t(isComplete(med) ? "givenToday" : "nextDose"))}</span>
      <button class="done-button ${isComplete(med) ? "done" : ""}" data-complete="${safe(med.id)}" aria-label="${safe(t(isComplete(med) ? "markNotGiven" : "markGiven"))}">✓</button>
      <button class="delete-entry" data-delete-med="${safe(med.id)}" aria-label="${safe(t("removeMedication", { name: localizedName(med) }))}">×</button>
    </article>`).join("") : `<div class="empty-state">${safe(t("emptyMeds"))}</div>`;
}

function render() {
  const firstRun = data.pets.length === 0;
  byId("first-run").hidden = !firstRun || currentView !== "overview";
  document.querySelectorAll(".main-nav .nav-link").forEach((button) => {
    button.hidden = firstRun && (button.dataset.view === "medications" || button.dataset.view === "records");
  });
  setHeader();
  renderPets();
  renderStats();
  renderToday();
  renderUpcoming();
  renderRecords();
  renderMedications();
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === currentView));
  byId("crumb-current").textContent = currentView === "overview" ? t("overview") : currentView === "records" ? t("healthRecords") : currentView === "medications" ? t("medications") : t("howItWorks");
  byId("page-title").innerHTML = currentView === "overview"
    ? `${t(new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening")}, Alex <span class="wave">✦</span>`
    : currentView === "records" ? `${t("recordsPageTitle")} <span class="wave">✦</span>` : currentView === "medications" ? `${t("medicationsPageTitle")} <span class="wave">✦</span>` : `${t("howUse")} <span class="wave">✦</span>`;
  byId("page-subtitle").textContent = currentView === "overview"
    ? selectedPet() ? t("overviewSubtitle", { pet: selectedPet().name }) : t("noPetSubtitle")
    : currentView === "records" ? t("recordsSubtitle") : currentView === "medications" ? t("medicationsSubtitle") : t("howUseIntro");
  byId("overview-section").hidden = currentView !== "overview" || firstRun;
  byId("overview-content").hidden = currentView !== "overview" || firstRun;
  byId("records-section").hidden = currentView !== "records";
  byId("medications-section").hidden = currentView !== "medications";
  byId("guide-section").hidden = currentView !== "guide";
  byId("page-heading").hidden = currentView === "guide" || firstRun;
  byId("pet-hero").hidden = currentView === "guide" || firstRun;
  byId("add-care-button").hidden = currentView !== "overview" || firstRun;
}

function field(label, name, type = "text", value = "", options = {}) {
  const full = options.full ? " full" : "";
  const required = options.required ? " required" : "";
  const controlId = `entry-${name}`;
  let control;
  if (type === "select") {
    control = `<select id="${controlId}" name="${name}"${required}>${options.values.map((option) => `<option value="${safe(option)}" ${value === option ? "selected" : ""}>${safe(t(options.labels[option]))}</option>`).join("")}</select>`;
  } else if (type === "textarea") {
    control = `<textarea id="${controlId}" name="${name}" placeholder="${safe(options.placeholder || "")}">${safe(value)}</textarea>`;
  } else {
    const fileValue = type === "file" ? "" : ` value="${safe(value)}"`;
    control = `<input id="${controlId}" name="${name}" type="${type}"${fileValue} placeholder="${safe(options.placeholder || "")}"${required}${options.step ? ` step="${options.step}"` : ""}${options.min ? ` min="${options.min}"` : ""}${options.accept ? ` accept="${safe(options.accept)}"` : ""}${options.capture ? ` capture="${safe(options.capture)}"` : ""}>`;
  }
  return `<div class="field${full}"><label for="${controlId}">${safe(label)}</label>${control}</div>`;
}

function openDialog(kind) {
  if (kind !== "pet" && !selectedPet()) {
    showToast(t("addPetFirst"));
    openDialog("pet");
    return;
  }
  const titleKey = kind === "pet" ? "addPetTitle" : kind === "medication" ? "addMedicationTitle" :
    kind === "vaccination" ? "addVaccinationTitle" : kind === "deworming" ? "addDewormingTitle" :
      kind === "weight" ? "addWeightTitle" : kind === "food" ? "addFoodTitle" :
        kind === "document" ? "addDocumentTitle" : "addGroomingTitle";
  byId("dialog-title").textContent = t(titleKey);
  byId("dialog-eyebrow").textContent = t(kind === "pet" ? "newBestFriend" : "littleMoreLove");
  let fields = "";
  if (kind === "pet") {
    fields = field(t("petName"), "name", "text", "", { required: true }) +
      field(t("petType"), "species", "select", "Dog", { values: ["Dog", "Cat", "Other"], labels: { Dog: "dog", Cat: "cat", Other: "other" } }) +
      field(t("breed"), "breed") + field(t("birthday"), "birthday", "date") +
      field(t("weightKg"), "weight", "number", "", { step: "0.1" }) +
      field(t("littleNote"), "notes", "textarea", "", { full: true, placeholder: t("favoriteToy") });
  } else if (kind === "medication") {
    fields = field(t("medicationName"), "name", "text", "", { required: true }) +
      field(t("doseTime"), "time", "time", "08:00") +
      field(t("doseInstructions"), "dose", "text", "", { full: true, required: true, placeholder: t("dosePlaceholder") }) +
      field(t("schedule"), "schedule", "select", "Daily", { values: ["Daily", "Twice daily", "Weekly", "As needed"], labels: { "Daily": "daily", "Twice daily": "twiceDaily", "Weekly": "weekly", "As needed": "asNeeded" } }) +
      field(t("startDate"), "startDate", "date", dayOffset(0));
  } else if (kind === "vaccination") {
    fields = field(t("vaccineName"), "name", "text", "", { required: true }) +
      field(t("nextDueDate"), "nextDate", "date", "", { required: true }) +
      field(t("givenOn"), "date", "date", dayOffset(0)) +
      field(t("clinic"), "clinic", "text", "", { placeholder: t("clinicName") }) +
      field(t("notes"), "notes", "textarea", "", { full: true });
  } else if (kind === "deworming") {
    fields = field(t("dewormingProduct"), "name", "text", "", { required: true }) +
      field(t("givenOn"), "date", "date", dayOffset(0)) +
      field(t("nextDeworming"), "nextDate", "date", "", { required: true }) +
      field(t("provider"), "provider", "text", "") +
      field(t("notes"), "notes", "textarea", "", { full: true });
  } else if (kind === "weight") {
    fields = field(t("weightValue"), "weight", "number", "", { required: true, step: "0.1", min: "0.1" }) +
      field(t("visitDate"), "date", "date", dayOffset(0), { required: true }) +
      field(t("notes"), "notes", "textarea", "", { full: true });
  } else if (kind === "food") {
    fields = field(t("foodName"), "food", "text", "", { required: true }) +
      field(t("mealType"), "meal", "select", "breakfast", { values: ["breakfast", "lunch", "dinner", "snack"], labels: { breakfast: "breakfast", lunch: "lunch", dinner: "dinner", snack: "snack" } }) +
      field(t("amount"), "amount", "text", "", { placeholder: t("amountPlaceholder") }) +
      field(t("visitDate"), "date", "date", dayOffset(0), { required: true }) +
      field(t("notes"), "notes", "textarea", "", { full: true });
  } else if (kind === "document") {
    fields = field(t("documentTitle"), "title", "text", "", { required: true }) +
      field(t("documentType"), "category", "select", "medicalRecord", { values: ["medicalRecord", "dischargeSummary", "vaccinationCard", "prescription", "testResults", "otherDocument"], labels: { medicalRecord: "medicalRecord", dischargeSummary: "dischargeSummary", vaccinationCard: "vaccinationCard", prescription: "prescription", testResults: "testResults", otherDocument: "otherDocument" } }) +
      field(t("visitDate"), "date", "date", dayOffset(0), { required: true }) +
      field(t("attachFile"), "file", "file", "", { full: true, accept: ".pdf,.txt,.jpg,.jpeg,.png,.webp,application/pdf,text/plain,image/jpeg,image/png,image/webp" }) +
      field(t("cameraDocument"), "cameraFile", "file", "", { full: true, accept: "image/*", capture: "environment" }) +
      field(t("notes"), "notes", "textarea", "", { full: true });
  } else {
    fields = field(t("groomingService"), "name", "text", "", { required: true }) +
      field(t("nextVisit"), "nextDate", "date", "") +
      field(t("visitDate"), "date", "date", dayOffset(0)) +
      field(t("provider"), "provider", "text", "", { placeholder: t("groomerAtHome") }) +
      field(t("notes"), "notes", "textarea", "", { full: true });
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

function clearPrintSheet() {
  const sheet = byId("print-sheet");
  sheet.hidden = true;
  sheet.replaceChildren();
  if (nativePrintAfterHandler) {
    window.removeEventListener("afterprint", nativePrintAfterHandler);
    nativePrintAfterHandler = null;
  }
  if (nativePrintVisibilityHandler) {
    document.removeEventListener("visibilitychange", nativePrintVisibilityHandler);
    nativePrintVisibilityHandler = null;
  }
}

window.myPetHandleNativeSaveResult = (saved) => {
  nativeSavePending = false;
  showToast(t(saved ? nativeSaveSuccessKey : "nativeSaveFailed"));
  nativeSaveSuccessKey = "fileSavedMessage";
};
window.myPetHandleNativePrintDone = clearPrintSheet;

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
  if (target.dataset.addType) {
    openDialog(target.dataset.addType);
    const menu = target.closest(".record-add-menu");
    if (menu) menu.open = false;
  }
  if (target.dataset.viewDocument) viewDocument(target.dataset.viewDocument);
  if (target.dataset.deleteDocument) removeDocument(target.dataset.deleteDocument);
  if (target.dataset.deleteVetReport) removeVetReport(target.dataset.deleteVetReport);
  if (target.id === "download-passport") downloadPetPassport();
  if (target.id === "print-schedule") printTreatmentSchedule();
  if (target.id === "save-medical-summary") saveMedicalSummary();
  if (target.id === "copy-vet-message") copyVetDraft();
  if (target.id === "open-native-document") {
    const record = data.documents.find((item) => item.id === byId("document-dialog").dataset.documentId);
    if (record && window.MyPetAndroid) {
      readDocumentFile(record.id).then(async (file) => {
        if (!file) {
          showToast(t("documentMissing"));
          return;
        }
        try {
          window.MyPetAndroid.openDocument(await documentAsBase64(file), record.fileName);
        } catch (error) {
          console.error("Could not open the health document in another app:", error);
          showToast(t("documentOpenFailed"));
        }
      }).catch((error) => {
        console.error("Could not read the health document:", error);
        showToast(t("documentOpenFailed"));
      });
    }
  }
  if (target.id === "save-vet-report") saveVetDraft();
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
    showToast(data.completions[key] ? t("doseSaved") : t("doseUndo"));
  }
  if (target.dataset.deleteMed) {
    const med = data.medications.find((item) => item.id === target.dataset.deleteMed);
    if (med && window.confirm(t("removeMedication", { name: localizedName(med) }))) {
      data.medications = data.medications.filter((item) => item.id !== med.id);
      save();
      render();
      showToast(t("medRemoved"));
    }
  }
  if (target.classList.contains("close-dialog") || target.classList.contains("cancel-dialog")) byId("entry-dialog").close();
  if (target.classList.contains("close-document-dialog")) closeDocumentViewer();
});

byId("vet-report-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form).entries());
  const message = prepareVetMessage(values);
  currentVetDraft = {
    petId: activePetId,
    onset: values.onset,
    symptoms: values.symptoms.trim(),
    message
  };
  byId("vet-message").value = message;
  byId("vet-result").hidden = false;
  byId("save-vet-report").disabled = false;
  setVetShareLinks(message);
});
byId("vet-report-form").addEventListener("input", () => {
  if (!currentVetDraft) return;
  currentVetDraft = null;
  byId("vet-result").hidden = true;
  byId("save-vet-report").disabled = true;
});

byId("entry-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form).entries());
  const kind = form.dataset.kind;
  if (kind === "pet") {
    const pet = { id: makeId(), name: values.name.trim(), species: values.species, breed: values.breed.trim(), birthday: values.birthday, weight: values.weight, notes: values.notes.trim(), color: values.species === "Cat" ? "#e7edf4" : "#f8e9d8" };
    data.pets.push(pet);
    activePetId = pet.id;
    if (values.weight) data.weights.push({ id: makeId(), petId: pet.id, weight: Number(values.weight), date: dayOffset(0), notes: "" });
  } else if (kind === "medication") {
    data.medications.push({ id: makeId(), petId: activePetId, ...values, active: true });
    currentView = "medications";
  } else if (kind === "vaccination") {
    data.vaccinations.push({ id: makeId(), petId: activePetId, ...values });
    currentView = "records";
  } else if (kind === "deworming") {
    data.deworming.push({ id: makeId(), petId: activePetId, ...values });
    currentView = "records";
  } else if (kind === "grooming") {
    data.grooming.push({ id: makeId(), petId: activePetId, ...values });
    currentView = "records";
  } else if (kind === "weight") {
    data.weights.push({ id: makeId(), petId: activePetId, ...values, weight: Number(values.weight) });
    currentView = "records";
  } else if (kind === "food") {
    data.foodEntries.push({ id: makeId(), petId: activePetId, ...values });
    currentView = "records";
  } else if (kind === "document") {
    const file = values.file && values.file.size ? values.file : values.cameraFile;
    if (!file || !file.size) {
      showToast(t("documentPickFile"));
      return;
    }
    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    if (file.size > MAX_DOCUMENT_BYTES) {
      showToast(t("documentTooLarge"));
      return;
    }
    if (![".pdf", ".txt", ".jpg", ".jpeg", ".png", ".webp"].includes(extension)) {
      showToast(t("documentUnsupported"));
      return;
    }
    const record = {
      id: makeId(), petId: activePetId, title: values.title.trim(), category: values.category,
      date: values.date, fileName: file.name, notes: values.notes.trim()
    };
    try {
      await storeDocumentFile(record.id, file);
    } catch (error) {
      console.error("Could not save the health document:", error);
      showToast(t("documentSaveFailed"));
      return;
    }
    data.documents.push(record);
    currentView = "records";
  }
  save();
  byId("entry-dialog").close();
  render();
  showToast(kind === "pet" ? t("petProfileReady") : kind === "document" ? t("documentSaved") : t("recordSaved"));
});

byId("entry-dialog").addEventListener("click", (event) => {
  if (event.target === byId("entry-dialog")) byId("entry-dialog").close();
});

byId("document-dialog").addEventListener("click", (event) => {
  if (event.target === byId("document-dialog")) closeDocumentViewer();
});
byId("document-dialog").addEventListener("close", (event) => {
  const dialog = event.currentTarget;
  if (dialog.dataset.objectUrl) URL.revokeObjectURL(dialog.dataset.objectUrl);
  delete dialog.dataset.objectUrl;
  delete dialog.dataset.documentId;
  byId("document-preview").replaceChildren();
});
byId("document-download").addEventListener("click", async (event) => {
  if (!window.MyPetAndroid || typeof window.MyPetAndroid.saveGeneratedDocument !== "function") return;
  event.preventDefault();
  const record = data.documents.find((item) => item.id === byId("document-dialog").dataset.documentId);
  if (!record) return;
  try {
    const file = await readDocumentFile(record.id);
    if (!file) {
      showToast(t("documentMissing"));
      return;
    }
    if (nativeSavePending) {
      showToast(t("nativeSavePending"));
      return;
    }
    nativeSavePending = true;
    nativeSaveSuccessKey = "fileSavedMessage";
    window.MyPetAndroid.saveGeneratedDocument(record.fileName, documentMimeType(record.fileName, file.type), await documentAsBase64(file));
  } catch (error) {
    nativeSavePending = false;
    console.error("Could not pass the health document to Android:", error);
    showToast(t("nativeSaveFailed"));
  }
});
byId("language-picker").addEventListener("change", (event) => setLocale(event.target.value));
byId("onboarding-add-pet").addEventListener("click", () => openDialog("pet"));
applyTranslations();
