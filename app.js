const STORAGE_KEY = "mypet-care-data-v1";
const LANGUAGE_KEY = "mypet-language-v1";
const LANGUAGES = ["en", "ru", "es", "fr", "de"];
const LOCALE_TAGS = { en: "en-US", ru: "ru-RU", es: "es-ES", fr: "fr-FR", de: "de-DE" };
const messages = Object.fromEntries([
  ["yourSpace", "YOUR SPACE", "ВАШЕ ПРОСТРАНСТВО", "TU ESPACIO", "VOTRE ESPACE", "DEIN BEREICH"],
  ["metaDescription", "All your pet's medications, vaccinations, and grooming in one caring, easy-to-use place.", "Лекарства, прививки и груминг питомца — в одном удобном месте.", "Medicamentos, vacunas y peluquería de tu mascota en un solo lugar.", "Médicaments, vaccins et toilettage de votre animal au même endroit.", "Medikamente, Impfungen und Pflege für dein Tier an einem Ort."],
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
  ["recordsDescription", "Vaccinations and grooming, thoughtfully kept together.", "Вакцинации и груминг в одном месте.", "Vacunas y peluquería, todo junto.", "Vaccins et toilettage, réunis avec soin.", "Impfungen und Pflege an einem Ort."],
  ["addVaccination", "+ Vaccination", "+ Вакцинация", "+ Vacuna", "+ Vaccin", "+ Impfung"],
  ["addGrooming", "+ Grooming", "+ Груминг", "+ Peluquería", "+ Toilettage", "+ Pflege"],
  ["allRecords", "All records", "Все записи", "Todos", "Tout", "Alle Einträge"],
  ["vaccinations", "Vaccinations", "Вакцинации", "Vacunas", "Vaccins", "Impfungen"],
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
  ["stepThreeText", "Save vaccine and grooming visits. Upcoming dates appear on your home screen.", "Сохраняйте прививки и груминг — ближайшие даты появятся на главном экране.", "Guarda vacunas y citas de peluquería. Las próximas fechas aparecerán en inicio.", "Notez vaccins et toilettages : les prochaines dates s’affichent à l’accueil.", "Speichere Impfungen und Pflegebesuche. Anstehende Termine erscheinen auf der Startseite."],
  ["featureMedsTitle", "Medication, made manageable", "Лекарства под контролем", "Medicamentos bajo control", "Les médicaments en toute simplicité", "Medikamente leicht im Blick"],
  ["featureMedsText", "See each dose, follow the daily routine, and keep a simple completion history.", "Смотрите дозы, следуйте расписанию и отмечайте выполненные приёмы.", "Consulta cada dosis, sigue la rutina y lleva un registro sencillo.", "Visualisez les prises, suivez le rituel et gardez un historique.", "Dosen und Tagesablauf im Blick, Einnahmen einfach abhaken."],
  ["featureRecordsTitle", "Every important record", "Все важные записи", "Todos los registros importantes", "Tous les dossiers importants", "Alle wichtigen Einträge"],
  ["featureRecordsText", "Keep vaccinations, clinic details, and grooming visits together by pet.", "Храните прививки, данные клиники и груминг для каждого питомца отдельно.", "Guarda vacunas, datos de la clínica y visitas de peluquería por mascota.", "Vaccins, coordonnées de la clinique et toilettage, classés par animal.", "Impfungen, Klinikdaten und Pflegebesuche je Tier gesammelt."],
  ["featureRemindersTitle", "A heads-up before it's due", "Напоминание заранее", "Un aviso antes de la fecha", "Un rappel avant l’échéance", "Rechtzeitig Bescheid wissen"],
  ["featureRemindersText", "See upcoming vaccination and grooming dates at a glance. No account needed.", "Ближайшие прививки и груминг всегда на виду. Аккаунт не нужен.", "Consulta próximas vacunas y citas de peluquería. Sin necesidad de cuenta.", "Les prochaines dates de vaccin et toilettage en un coup d’œil. Sans compte.", "Anstehende Impfungen und Pflegebesuche auf einen Blick. Kein Konto nötig."],
  ["privacyTitle", "Your pet's care stays yours.", "Данные о питомце остаются у вас.", "Los datos de tu mascota son tuyos.", "Les données de votre animal restent les vôtres.", "Die Daten deines Tiers bleiben bei dir."],
  ["privacyText", "This app keeps records in your browser or Android device. It doesn't send them to a server.", "Записи хранятся в браузере или на Android-устройстве и не отправляются на сервер.", "Los datos se guardan en tu navegador o Android; no se envían a ningún servidor.", "Les données restent dans votre navigateur ou appareil Android. Aucun envoi vers un serveur.", "Einträge bleiben im Browser oder auf deinem Android-Gerät und werden nicht an einen Server gesendet."],
  ["footerNote", "Made with love for the ones with paws.", "С любовью для тех, у кого лапки.", "Hecho con amor para quienes tienen patas.", "Fait avec amour pour ceux qui ont des pattes.", "Mit Liebe für alle mit Pfoten."],
  ["cancel", "Cancel", "Отмена", "Cancelar", "Annuler", "Abbrechen"],
  ["saveRecord", "Save record", "Сохранить запись", "Guardar", "Enregistrer", "Eintrag speichern"],
  ["closeDialog", "Close dialog", "Закрыть окно", "Cerrar ventana", "Fermer", "Dialog schließen"],
  ["morning", "Good morning", "Доброе утро", "Buenos días", "Bonjour", "Guten Morgen"],
  ["afternoon", "Good afternoon", "Добрый день", "Buenas tardes", "Bon après-midi", "Guten Tag"],
  ["evening", "Good evening", "Добрый вечер", "Buenas noches", "Bonsoir", "Guten Abend"],
  ["morningTag", "A GOOD DAY TOGETHER", "ХОРОШИЙ ДЕНЬ ВМЕСТЕ", "UN BUEN DÍA JUNTOS", "UNE BELLE JOURNÉE ENSEMBLE", "EIN GUTER TAG ZUSAMMEN"],
  ["laterTag", "HERE'S TO A GOOD DAY", "ПУСТЬ ДЕНЬ БУДЕТ ХОРОШИМ", "POR UN BUEN DÍA", "À UNE BELLE JOURNÉE", "AUF EINEN SCHÖNEN TAG"],
  ["overviewSubtitle", "A little care goes a long way. Here's what's happening for {pet} today.", "Немного заботы — и день лучше. Вот что запланировано для {pet}.", "Un poco de cuidado hace mucho. Esto es lo que toca hoy para {pet}.", "Un peu d’attention change tout. Voici le programme de {pet} aujourd’hui.", "Ein bisschen Fürsorge wirkt lange. Das steht heute für {pet} an."],
  ["noPetSubtitle", "Add a pet to start keeping all their care in one happy place.", "Добавьте питомца, чтобы собрать всю заботу о нём в одном месте.", "Añade una mascota para tener sus cuidados siempre a mano.", "Ajoutez un animal pour réunir tous ses soins au même endroit.", "Füge ein Tier hinzu, um seine Pflege an einem Ort zu organisieren."],
  ["recordsSubtitle", "Keep every vaccination and grooming visit close at hand.", "Все прививки и визиты к грумеру — под рукой.", "Ten siempre a mano sus vacunas y visitas de peluquería.", "Gardez vaccins et toilettages toujours à portée de main.", "Impfungen und Pflegebesuche immer griffbereit."],
  ["medicationsSubtitle", "A calm, consistent routine makes all the difference.", "Спокойный и регулярный уход меняет всё.", "Una rutina tranquila y constante marca la diferencia.", "Une routine sereine et régulière fait toute la différence.", "Eine ruhige, regelmäßige Routine macht den Unterschied."],
  ["happyPet", "Happy {species}", "Счастливый питомец: {species}", "{species} feliz", "{species} heureux", "{species} glücklich"],
  ["petInCare", "{pet} is in your care", "{pet} под вашей заботой", "{pet} está en buenas manos", "{pet} est entre de bonnes mains", "{pet} ist bei dir in guten Händen"],
  ["addPetToProfile", "Add a pet profile", "Добавьте профиль питомца", "Añade el perfil de una mascota", "Ajoutez un profil d’animal", "Tierprofil hinzufügen"],
  ["activeMedications", "Active medications", "Активные лекарства", "Medicamentos activos", "Médicaments actifs", "Aktive Medikamente"],
  ["dosesDone", "{count} doses done today", "Сегодня принято доз: {count}", "Dosis administradas hoy: {count}", "Prises effectuées aujourd’hui : {count}", "Heute gegebene Dosen: {count}"],
  ["careRecords", "Care records", "Записи об уходе", "Registros de cuidados", "Dossiers de soins", "Pflegeeinträge"],
  ["vaccinesGrooming", "Vaccines & grooming", "Прививки и груминг", "Vacunas y peluquería", "Vaccins et toilettage", "Impfungen & Pflege"],
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
  ["emptyRecords", "No records yet. Add a vaccination or grooming visit to keep this space up to date.", "Записей пока нет. Добавьте вакцинацию или визит к грумеру.", "Aún no hay registros. Añade una vacuna o visita de peluquería.", "Aucun dossier. Ajoutez un vaccin ou une visite de toilettage.", "Noch keine Einträge. Füge eine Impfung oder einen Pflegebesuch hinzu."],
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
  ["addGroomingTitle", "Add grooming visit", "Добавить визит к грумеру", "Añadir visita de peluquería", "Ajouter une visite de toilettage", "Pflegebesuch hinzufügen"],
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

function applyTranslations() {
  document.documentElement.lang = LOCALE_TAGS[locale].slice(0, 2);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (messages[key]) element.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (messages[key]) element.setAttribute("aria-label", t(key));
  });
  byId("language-picker").value = locale;
  document.getElementById("app-description").content = t("metaDescription");
  document.title = `My Pet — ${locale === "ru" ? "забота каждый день" : locale === "es" ? "cuidamos cada día" : locale === "fr" ? "prendre soin chaque jour" : locale === "de" ? "liebevolle Pflege jeden Tag" : "thoughtful care, every day"}`;
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
  return [...meds, ...dueVaccines, ...dueGrooming].sort((a, b) => a.sortTime.localeCompare(b.sortTime));
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
      <span class="care-symbol ${item.type}">${item.type === "medicine" ? "✚" : item.type === "vaccine" ? "♡" : "✧"}</span>
      <span class="care-copy"><strong>${safe(item.title)}</strong><span>${safe(item.detail)}</span></span>
      <span class="care-time">${safe(item.time)}</span>
      ${item.type === "medicine" ? `<button class="done-button ${item.done ? "done" : ""}" data-complete="${safe(item.id)}" aria-label="${safe(t(item.done ? "markNotGiven" : "markGiven"))}">✓</button>` : "" }
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
      <span class="mini-date"><b>${formatNumber(date.getDate())}</b><small>${new Intl.DateTimeFormat(LOCALE_TAGS[locale], { month: "short" }).format(date)}</small></span>
      <span class="upcoming-copy"><strong>${safe(localizedName(item))}</strong><span>${item.type === "vaccine" ? t("vaccination") : t("grooming")} · ${days < 0 ? t("daysOverdue", { count: formatNumber(Math.abs(days)) }) : days === 0 ? t("dueToday") : t("inDays", { count: formatNumber(days) })}</span></span>
      <span class="upcoming-tag ${days <= 14 ? "soon" : ""}">${days < 0 ? t("overdue") : days === 0 ? t("today") : t("inDays", { count: formatNumber(days) })}</span>
    </div>`;
  }).join("") : `<div class="empty-state">${safe(t("emptyUpcoming"))}</div>`;
}

function renderStats() {
  const pet = selectedPet();
  const meds = selectedItems(data.medications).filter((med) => med.active);
  const records = [...selectedItems(data.vaccinations), ...selectedItems(data.grooming)];
  const upcoming = getUpcoming()[0];
  const dueSoon = records.filter((item) => item.nextDate && item.nextDate >= dayOffset(0) && item.nextDate <= dayOffset(30)).length;
  byId("stats-grid").innerHTML = `
    <article class="stat-card"><span class="stat-icon green">♡</span><span class="stat-copy"><strong>${formatNumber(pet ? 1 : 0)}</strong><p>${safe(t("happyPet", { species: localizedSpecies(pet ? pet.species : "Other") }))}</p><small>${pet ? safe(t("petInCare", { pet: pet.name })) : safe(t("addPetToProfile"))}</small></span></article>
    <article class="stat-card"><span class="stat-icon peach">✚</span><span class="stat-copy"><strong>${formatNumber(meds.length)}</strong><p>${safe(t("activeMedications"))}</p><small>${safe(t("dosesDone", { count: formatNumber(meds.filter(isComplete).length) }))}</small></span></article>
    <article class="stat-card"><span class="stat-icon blue">▣</span><span class="stat-copy"><strong>${formatNumber(records.length)}</strong><p>${safe(t("careRecords"))}</p><small>${safe(t("vaccinesGrooming"))}</small></span></article>
    <article class="stat-card"><span class="stat-icon pink">◷</span><span class="stat-copy"><strong>${formatNumber(dueSoon)}</strong><p>${safe(t("comingUpSoon"))}</p><small>${upcoming ? `${safe(localizedName(upcoming))} · ${safe(shortDate(upcoming.nextDate))}` : safe(t("noUpcomingReminders"))}</small></span></article>`;
}

function renderRecords() {
  const records = [
    ...selectedItems(data.vaccinations).map((item) => ({ ...item, type: "vaccination", provider: item.clinic || t("clinicVisit") })),
    ...selectedItems(data.grooming).map((item) => ({ ...item, type: "grooming", provider: item.provider || t("groomingVisit") }))
  ].filter((item) => recordFilter === "all" || item.type === recordFilter)
    .sort((a, b) => b.date.localeCompare(a.date));
  byId("records-list").innerHTML = records.length ? records.map((item) => `
    <div class="record-row">
      <span class="record-icon ${item.type}">${item.type === "vaccination" ? "♡" : "✧"}</span>
      <span class="record-main"><strong>${safe(localizedName(item))}</strong><span>${item.type === "vaccination" ? t("vaccination") : t("grooming")} · ${safe(localizedProvider(item.provider))}</span></span>
      <span class="record-meta"><strong>${safe(shortDate(item.date))}</strong><span>${safe(t("completed"))}</span></span>
      <span class="record-tag ${item.nextDate && item.nextDate < dayOffset(0) ? "past" : ""}">${item.nextDate ? safe(t("nextDate", { date: shortDate(item.nextDate) })) : safe(t("noReminder"))}</span>
    </div>`).join("") : `<div class="empty-state">${safe(t("emptyRecords"))}</div>`;
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
  byId("overview-section").hidden = currentView !== "overview";
  byId("overview-content").hidden = currentView !== "overview";
  byId("records-section").hidden = currentView !== "records";
  byId("medications-section").hidden = currentView !== "medications";
  byId("guide-section").hidden = currentView !== "guide";
  byId("page-heading").hidden = currentView === "guide";
  byId("pet-hero").hidden = currentView === "guide";
  byId("add-care-button").hidden = currentView !== "overview";
}

function field(label, name, type = "text", value = "", options = {}) {
  const full = options.full ? " full" : "";
  const required = options.required ? " required" : "";
  let control;
  if (type === "select") {
    control = `<select name="${name}"${required}>${options.values.map((option) => `<option value="${safe(option)}" ${value === option ? "selected" : ""}>${safe(t(options.labels[option]))}</option>`).join("")}</select>`;
  } else if (type === "textarea") {
    control = `<textarea name="${name}" placeholder="${safe(options.placeholder || "")}">${safe(value)}</textarea>`;
  } else {
    control = `<input name="${name}" type="${type}" value="${safe(value)}" placeholder="${safe(options.placeholder || "")}"${required}${options.step ? ` step="${options.step}"` : ""}>`;
  }
  return `<div class="field${full}"><label>${safe(label)}</label>${control}</div>`;
}

function openDialog(kind) {
  if (kind !== "pet" && !selectedPet()) {
    showToast(t("addPetFirst"));
    openDialog("pet");
    return;
  }
  const titleKey = kind === "pet" ? "addPetTitle" : kind === "medication" ? "addMedicationTitle" : kind === "vaccination" ? "addVaccinationTitle" : "addGroomingTitle";
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
  showToast(kind === "pet" ? t("petProfileReady") : t("recordSaved"));
});

byId("entry-dialog").addEventListener("click", (event) => {
  if (event.target === byId("entry-dialog")) byId("entry-dialog").close();
});

byId("language-picker").addEventListener("change", (event) => setLocale(event.target.value));
applyTranslations();
