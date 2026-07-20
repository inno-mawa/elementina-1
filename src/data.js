export const PERSONAS = [
  {
    id: "goldina",
    name: "Goldina",
    element: "Au · 79",
    role: "Kontakt, SIM, Mikroprozessor",
    tagline: "Das wertvollste Metall der Welt",
    portrait: "Au",
    color: "#f0c020",
    colorLight: "#ffe878",
    glow: "rgba(240, 192, 32, 0.58)",
    ink: "#3a2000",
    bg: "#0d0a00",
    mood: "glamourös, selbstbewusst, nachdenklich",
  },
  {
    id: "kobaltin",
    name: "Kobaltin",
    element: "Co · 27",
    role: "Lithium-Ionen-Akku",
    tagline: "Die Kraft hinter jedem Akku",
    portrait: "Co",
    color: "#2878f0",
    colorLight: "#77b6ff",
    glow: "rgba(40, 120, 240, 0.58)",
    ink: "#07124f",
    bg: "#020510",
    mood: "stark, direkt, kämpferisch",
  },
  {
    id: "lithia",
    name: "Lithia",
    element: "Li · 3",
    role: "Akku",
    tagline: "Die Energie im Akku",
    portrait: "Li",
    color: "#b85cff",
    colorLight: "#dda8ff",
    glow: "rgba(184, 92, 255, 0.58)",
    ink: "#25003d",
    bg: "#100018",
    mood: "energiegeladen, neugierig, direkt",
  },
  {
    id: "indira",
    name: "Indira",
    element: "In · 49",
    role: "Touchscreen, Display",
    tagline: "Die Berührung im Display",
    portrait: "In",
    color: "#2db7a3",
    colorLight: "#8af2df",
    glow: "rgba(45, 183, 163, 0.58)",
    ink: "#003d36",
    bg: "#021614",
    mood: "präzise, ruhig, aufmerksam",
  },
  {
    id: "gallia",
    name: "Gallia",
    element: "Ga · 31",
    role: "Display, Funkchips, LEDs",
    tagline: "Das Licht in der Elektronik",
    portrait: "Ga",
    color: "#ff6f61",
    colorLight: "#ffb1a8",
    glow: "rgba(255, 111, 97, 0.58)",
    ink: "#4a0d08",
    bg: "#1a0504",
    mood: "hell, clever, schnell",
  },
  {
    id: "silico",
    name: "Silico",
    element: "Si · 14",
    role: "Chips, Kamera, Sensoren",
    tagline: "Das Gehirn im Smartphone",
    portrait: "Si",
    color: "#58a6ff",
    colorLight: "#a9d1ff",
    glow: "rgba(88, 166, 255, 0.58)",
    ink: "#06284d",
    bg: "#020b18",
    mood: "logisch, konzentriert, sachlich",
  },
  {
    id: "zinnia",
    name: "Zinnia",
    element: "Sn · 50",
    role: "Lötstellen, Kamera, Platinen",
    tagline: "Die Verbindung im Inneren",
    portrait: "Sn",
    color: "#9aa5b1",
    colorLight: "#dce3ea",
    glow: "rgba(154, 165, 177, 0.58)",
    ink: "#24303b",
    bg: "#080b10",
    mood: "verbindend, bodenständig, ehrlich",
  },
  {
    id: "neodya",
    name: "Neodya",
    element: "Nd · 60",
    role: "Lautsprecher, Vibration, Magnete",
    tagline: "Die starke Kraft im Kleinen",
    portrait: "Nd",
    color: "#e84393",
    colorLight: "#ffadd4",
    glow: "rgba(232, 67, 147, 0.58)",
    ink: "#500026",
    bg: "#18000d",
    mood: "kraftvoll, magnetisch, dramatisch",
  },
  {
    id: "dysra",
    name: "Dysra",
    element: "Dy · 66",
    role: "Hitzefeste Magnete",
    tagline: "Die Ausdauer der Magnete",
    portrait: "Dy",
    color: "#7a5cff",
    colorLight: "#c5b7ff",
    glow: "rgba(122, 92, 255, 0.58)",
    ink: "#21134d",
    bg: "#0b061a",
    mood: "ruhig, widerstandsfähig, ernst",
  },
  {
    id: "alumina",
    name: "Alumina",
    element: "Al · 13",
    role: "Gehäuse, Rahmen",
    tagline: "Das leichte Schutzschild",
    portrait: "Al",
    color: "#c0c7d1",
    colorLight: "#f2f5f8",
    glow: "rgba(192, 199, 209, 0.58)",
    ink: "#303946",
    bg: "#0a0c10",
    mood: "leicht, robust, klar",
  },
  {
    id: "nickelix",
    name: "Nickelix",
    element: "Ni · 28",
    role: "Gehäuse, Akku, Beschichtungen",
    tagline: "Die Widerstandskraft im Akku",
    portrait: "Ni",
    color: "#4ecdc4",
    colorLight: "#a6fff7",
    glow: "rgba(78, 205, 196, 0.58)",
    ink: "#06433f",
    bg: "#021411",
    mood: "hartnäckig, modern, direkt",
  },
  {
    id: "kupfero",
    name: "Kupfero",
    element: "Cu · 29",
    role: "Kabel, Ladebuchse, Leiterbahnen",
    tagline: "Die Strombahn im Smartphone",
    portrait: "Cu",
    color: "#d9772e",
    colorLight: "#ffc18e",
    glow: "rgba(217, 119, 46, 0.58)",
    ink: "#4b1f05",
    bg: "#170803",
    mood: "warm, leitend, offen",
  },
];

const createDialog = (introStatement, answers) => ({
  introStatement,
  initialQuestionIds: ["q1", "q2", "q3", "q4", "q5", "q6"],
  questions: Object.fromEntries(
    answers.map(([eyebrow, label, answer], index) => {
      const id = `q${index + 1}`;

      return [id, { id, eyebrow, label, answer, unlocks: [] }];
    }),
  ),
});

const DIALOG_FLOWS = {
  goldina: createDialog(
    "Ich bin Goldina. In jedem Smartphone glänze ich unsichtbar in Kontakten und Schaltkreisen. Frag mich alles, ich antworte direkt.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich komme aus Südafrika, Australien, China, Russland und Ghana. Fast überall gibt es mich, aber nur in winzigen Mengen. Für ein Gramm Gold werden oft mehrere Tonnen Gestein zermahlen.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich stecke in der SIM-Karte, an Akku-Kontakten und in hauchdünnen Leiterbahnen. Ich leite zuverlässig und roste kaum. Pro Handy sind es weniger als 30 Milligramm, aber bei Milliarden Geräten summiert sich das.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Gold ist vollständig recycelbar. Trotzdem landen viele Geräte im Müll oder in Schubladen. In einer Tonne alter Handys steckt oft mehr Gold als in einer Tonne Gold-Erz.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Im Großbergbau werden ganze Berge aufgesprengt. Im Kleinbergbau wird Gold oft mit Quecksilber aus Gestein gelöst. Das Gift kann Flüsse, Böden und die Gesundheit der Menschen dauerhaft belasten.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Tagebau zerstört große Naturflächen. Quecksilber und Zyanid können Gewässer und Böden über Jahrzehnte vergiften. Dazu kommen hoher Wasser- und Energieverbrauch.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "In einigen Förderregionen arbeiten Erwachsene und Kinder ohne ausreichenden Schutz. Quecksilberdämpfe können Nerven, Gehirn und Nieren schädigen.",
      ],
    ],
  ),

  kobaltin: createDialog(
    "Ich bin Kobaltin. Ohne mich speichert dein Akku kaum Energie. Stell deine Fragen, ich rede Klartext.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Rund 70 Prozent von mir kommen aus der Demokratischen Republik Kongo, vor allem aus Katanga. Weitere Förderländer sind Russland, Australien, die Philippinen und Kanada.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich stecke in der Kathode vieler Lithium-Ionen-Akkus. Ich helfe dabei, Energie stabil und dicht zu speichern. Deshalb steckt meine Nachfrage nicht nur in Handys, sondern auch in Laptops und Elektroautos.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Kobalt lässt sich aus Akkus technisch gut zurückgewinnen. Viele alte Akkus liegen jedoch ungenutzt herum oder werden falsch entsorgt. Recycling senkt den Druck auf neue Minen.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ein Teil kommt aus großen Minen, viel aber auch aus Kleinbergbau. Menschen arbeiten dort teils in engen Schächten ohne Helm, Belüftung oder ausreichende Schutzausrüstung.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Beim Bergbau können Säuren und Schwermetalle in Böden und Flüsse gelangen. Felder und Trinkwasser werden dadurch belastet, oft noch lange nach Schließung einer Mine.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Kleinbergbau bedeutet für viele Menschen Einsturzrisiken, Staub und Vergiftungen. Organisationen berichten seit Jahren auch über Kinderarbeit in Kobaltminen.",
      ],
    ],
  ),

  lithia: createDialog(
    "Ich bin Lithia. Ich halte die Energie deines Smartphones fest – aber mein Weg bis in den Akku ist nicht leicht.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich komme aus Salzlaken und Hartgestein. Große Mengen werden unter anderem in Australien, Chile, China und Argentinien gewonnen. Das Lithium-Dreieck umfasst Chile, Argentinien und Bolivien und ist vor allem für seine großen Salzseen bekannt.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich stecke im Akku, genauer gesagt in der Lithium-Ionen-Batterie. Dort ermögliche ich, dass Energie gespeichert und beim Benutzen des Handys wieder abgegeben werden kann.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Wenn ein altes Handy in der Schublade bleibt, bleibe ich ungenutzt im Akku zurück. Wird der Akku fachgerecht gesammelt, kann ich mit modernen Recyclingverfahren zurückgewonnen werden.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "In Australien werde ich meist aus dem Hartgestein Spodumen gewonnen. In Teilen von Chile und Argentinien wird lithiumhaltige Sole aus dem Untergrund gefördert und anschließend in Verdunstungsbecken oder neuen Direkt-Extraktionsverfahren verarbeitet.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "In trockenen Salzsee-Regionen kann die Förderung den empfindlichen Wasserhaushalt verändern. Das ist besonders problematisch, weil diese Gebiete ohnehin sehr wasserarm sind.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Wenn Bergbau Wasserquellen, Landwirtschaft oder Weideflächen betrifft, kann es zu Konflikten mit lokalen und indigenen Gemeinschaften kommen. Deshalb sind Mitbestimmung, transparente Wasserdaten und faire Vereinbarungen wichtig.",
      ],
    ],
  ),

  indira: createDialog(
    "Ich bin Indira. Ich mache aus einer Glasfläche einen Touchscreen, der deine Berührung versteht.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde meist als Nebenprodukt aus Zinkerzen gewonnen. China ist heute der wichtigste Produzent, weitere Raffinerien befinden sich unter anderem in Südkorea, Japan, Kanada und Europa.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich bilde zusammen mit Zinn eine sehr dünne, transparente und elektrisch leitfähige Schicht im Display. Dadurch kann der Bildschirm Berührungen erkennen, obwohl man durch die Schicht hindurchsehen kann.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich bleibe als hauchdünne Schicht im alten Display zurück. Aus Produktionsresten werde ich bereits zurückgewonnen, aus alten Handys jedoch bisher nur begrenzt.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde nicht in einer eigenen Indium-Mine abgebaut. Meist falle ich bei der Verarbeitung von Zinksulfid-Erzen als Nebenprodukt an und werde anschließend chemisch abgetrennt.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Meine Umweltfolgen hängen vor allem mit dem Zinkbergbau zusammen. Dort können Abraum, Staub und belastete Abwässer entstehen, wenn Rückstände nicht sicher behandelt werden.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Die Menschen in Förderregionen sind vor allem von den Arbeits- und Umweltstandards des Zinkbergbaus abhängig. Gleichzeitig macht die starke Konzentration der Produktion Länder und Unternehmen von wenigen Lieferanten abhängig.",
      ],
    ],
  ),

  gallia: createDialog(
    "Ich bin Gallia. Ich helfe Chips und LEDs dabei, schnell zu denken und zu leuchten.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde überwiegend als Nebenprodukt der Bauxit- und Zinkverarbeitung gewonnen. China produziert fast das gesamte weltweit gewonnene Primärgallium.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "In eurem Modell bin ich dem Display zugeordnet. Je nach Smartphone-Modell kann ich in Beleuchtungs- und Displaytechnik vorkommen, besonders wichtig bin ich aber auch in Funkchips und LEDs, etwa für den Kamerablitz.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Nach dem Handy bleibe ich in kleinen elektronischen Bauteilen zurück. Aus alten Geräten werde ich derzeit kaum gezielt zurückgewonnen.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde aus Prozesslösungen der Aluminium- oder Zinkverarbeitung abgetrennt. Deshalb hängt meine Produktion davon ab, wie viel Bauxit und Zinkerz verarbeitet werden.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Meine Umweltbilanz hängt besonders mit der Bauxitverarbeitung zusammen. Beim Abbau von Bauxit und bei der Aluminiumoxid-Produktion können Landschaften verändert und alkalische Rückstände entstehen.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Die starke Abhängigkeit von China schafft ein Versorgungsrisiko. Exportkontrollen können deshalb weltweit Auswirkungen auf Technikunternehmen und die Produktion elektronischer Geräte haben.",
      ],
    ],
  ),

  silico: createDialog(
    "Ich bin Silico. Ohne mich gäbe es keine Chips, keine Sensoren und kein digitales Gehirn im Smartphone.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich beginne als Quarz beziehungsweise Siliciumdioxid in Gestein und Sand. Für Chips werde ich anschließend extrem stark gereinigt, bis daraus hochreines Polysilizium entsteht.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich bin der Grundstoff für fast alle Chips im Smartphone: Prozessor, Speicher, Funktechnik und Kamerasensor. In eurem Modell liege ich bei der Kamera, weil der Bildsensor auf Silizium basiert.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "In alten Handys bleibe ich in Chips und Sensoren zurück. Weil die Bauteile sehr klein und komplex sind, wird daraus meist kein neues hochreines Chip-Silizium gewonnen.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Quarz wird bei sehr hohen Temperaturen zu Silizium verarbeitet. Danach wird das Material in mehreren Schritten gereinigt und zu Wafern verarbeitet, auf denen später Chips entstehen.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Die Herstellung von hochreinem Silizium benötigt viel Energie. Wie groß die Klimabelastung ist, hängt deshalb stark davon ab, ob der eingesetzte Strom aus Kohle, Gas oder erneuerbaren Quellen stammt.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Die Herstellung leistungsfähiger Chips ist weltweit auf wenige Regionen und Unternehmen konzentriert. Störungen in wichtigen Produktionsstandorten, zum Beispiel in Taiwan, können dadurch weltweit Lieferengpässe auslösen.",
      ],
    ],
  ),

  zinnia: createDialog(
    "Ich bin Zinnia. Ich halte die Elektronik im Inneren deines Smartphones zusammen.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde vor allem aus dem Mineral Kassiterit gewonnen. Zu den wichtigen Förderländern zählen China, Indonesien, Peru, Brasilien und die Demokratische Republik Kongo.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich verbinde elektronische Bauteile durch Lötstellen miteinander. In eurem Modell bin ich der Kamera zugeordnet, tatsächlich komme ich aber in Lötstellen vieler Smartphone-Bauteile vor.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich bleibe in Lötstellen auf Platinen und Modulen zurück. Ich kann recycelt werden, dafür müssen alte Geräte jedoch gesammelt, zerlegt und richtig behandelt werden.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde aus Kassiterit-Erz gewonnen. Je nach Lagerstätte geschieht das im Tagebau, Untertagebau oder durch das Auswaschen von Schwemmsedimenten.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Besonders der Abbau aus Schwemmsedimenten kann Böden aufwühlen und Flüsse mit Sedimenten belasten. Rückstände aus dem Bergbau müssen deshalb sicher gelagert werden.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Zinn gehört zusammen mit Gold, Tantal und Wolfram zu den sogenannten Konfliktmineralien. Das heißt nicht, dass jedes Zinn problematisch ist, aber bei Lieferketten aus Konflikt- und Hochrisikogebieten sind besondere Kontrollen nötig.",
      ],
    ],
  ),

  neodya: createDialog(
    "Ich bin Neodya. Klein gebaut, aber magnetisch stark – ich bringe dein Smartphone zum Klingen und Vibrieren.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich gehöre zu den Seltenen Erden und werde gemeinsam mit anderen Seltenen Erden gefördert. China ist der wichtigste Produzent und Verarbeiter, es gibt aber auch Förderung in Ländern wie Australien, den USA und Myanmar.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich stecke in sehr starken Permanentmagneten. Diese Magnete befinden sich zum Beispiel im Lautsprecher, im Vibrationsmotor und teilweise in weiteren kleinen Antrieben des Smartphones.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Nach dem Handy bleibe ich in winzigen Magneten zurück. Seltene Erden werden aus Elektroschrott bisher nur in begrenzten Mengen zurückgewonnen.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde nicht allein abgebaut, sondern zusammen mit anderen Seltenen Erden aus Mineralgemischen gewonnen. Danach müssen die einzelnen Elemente mit aufwendigen chemischen Verfahren voneinander getrennt werden.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Bei manchen Lagerstätten enthalten die Erze auch Thorium oder Uran. Bei der Aufbereitung können deshalb Rückstände entstehen, die sorgfältig überwacht und sicher gelagert werden müssen.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Menschen in der Nähe von Minen und Aufbereitungsanlagen können betroffen sein, wenn Staub, belastetes Wasser oder Rückstände nicht sicher kontrolliert werden. Das Risiko entsteht vor allem durch schlechte Umwelt- und Sicherheitsstandards.",
      ],
    ],
  ),

  dysra: createDialog(
    "Ich bin Dysra. Ich mache Magnete hitzefester, damit sie auch unter Druck zuverlässig bleiben.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich bin ebenfalls eine Seltene Erde und komme gemeinsam mit anderen Seltenen Erden vor. Meine Lieferkette ist besonders stark auf wenige Förder- und Verarbeitungsregionen konzentriert, vor allem auf China.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich werde Neodym-Magneten in kleinen Mengen beigemischt. Dadurch bleiben die Magnete auch bei Wärme stabil und funktionieren zuverlässig.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich bleibe zusammen mit Neodym in alten Magneten zurück. Da ich nur in sehr kleinen Mengen vorkomme, ist meine Rückgewinnung aus Elektroschrott bisher schwierig.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde aus einem Gemisch Seltener Erden chemisch abgetrennt. Die Trennung ist komplex, weil ich chemisch sehr ähnliche Eigenschaften wie viele andere Seltene Erden habe.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Wie bei Neodym können bei der Gewinnung bestimmter Seltene-Erden-Erze belastete oder radioaktive Begleitstoffe anfallen. Gute Abfallbehandlung ist deshalb besonders wichtig.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Meine starke Konzentration in wenigen Lieferketten kann zu Versorgungsrisiken führen. Exportbeschränkungen oder politische Konflikte können dann weltweit die Produktion von Magneten und Elektronik beeinflussen.",
      ],
    ],
  ),

  alumina: createDialog(
    "Ich bin Alumina. Ich halte dein Smartphone leicht, stabil und geschützt.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde aus Bauxit gewonnen. Bauxit wird meist im Tagebau abgebaut und anschließend zu Aluminiumoxid und danach mit sehr viel Strom zu Aluminium verarbeitet.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "In eurem Modell stecke ich im Gehäuse und Rahmen. Ich mache viele Smartphones leicht, stabil und hochwertig.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich kann sehr gut eingeschmolzen und wiederverwendet werden. Das funktioniert aber nur, wenn das alte Handy abgegeben und fachgerecht recycelt wird.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Zuerst wird Bauxit abgebaut und mit Natronlauge verarbeitet. Danach wird Aluminiumoxid durch Elektrolyse in Aluminium umgewandelt.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Für Bauxitminen können Wälder und Böden großflächig verändert werden. Bei der Verarbeitung entsteht außerdem Bauxitrückstand, auch Rotschlamm genannt, der sicher gelagert werden muss.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Wenn Minen Land, Wasser oder Wälder verändern, kann das Landwirtschaft und lokale Lebensgrundlagen beeinträchtigen. Deshalb sind faire Entschädigung, Beteiligung und Renaturierung nach dem Abbau wichtig.",
      ],
    ],
  ),

  nickelix: createDialog(
    "Ich bin Nickelix. Ich mache Kontakte robust und unterstütze moderne Akkus.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde vor allem aus Laterit- und Sulfiderzen gewonnen. Indonesien ist heute mit großem Abstand der wichtigste Förderstaat für Nickel.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "In eurem Modell bin ich dem Gehäuse zugeordnet, weil ich in Legierungen und Beschichtungen vorkommen kann. In modernen Smartphones bin ich jedoch besonders wichtig für bestimmte Akkuchemien, zum Beispiel NMC-Akkus.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich kann aus Akkus, Legierungen und Elektronikschrott zurückgewonnen werden. Wenn Handys nicht gesammelt werden, bleibe ich jedoch ungenutzt in alten Geräten.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Lateriterze werden häufig im Tagebau abgebaut und danach energieintensiv geschmolzen oder chemisch ausgelaugt. Sulfiderze werden dagegen anders aufbereitet und können zusammen mit Kupfer oder Kobalt vorkommen.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Nickelabbau und Raffination können viel Energie benötigen. Bei unzureichendem Schutz können Abraum, Sedimente oder belastete Abwässer Flüsse, Küstengewässer und Böden beeinträchtigen.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "Wenn Gewässer oder Fischgründe belastet werden, kann das Menschen treffen, die von Landwirtschaft oder Fischerei leben. Auch sichere Arbeitsbedingungen und eine faire Beteiligung lokaler Gemeinschaften sind wichtige Themen.",
      ],
    ],
  ),

  kupfero: createDialog(
    "Ich bin Kupfero. Ich bin die Strombahn im Smartphone – ohne mich würde kein Signal ankommen.",
    [
      [
        "Herkunft",
        "Woher kommst du?",
        "Ich werde weltweit gefördert. Nach aktuellen USGS-Daten ist Chile der größte Produzent, gefolgt von der Demokratischen Republik Kongo und Peru; die Mine Escondida liegt in Chile.",
      ],
      [
        "Smartphone",
        "Wo steckst du im Handy?",
        "Ich bilde Leitbahnen auf Platinen, feine Drähte und elektrische Verbindungen. Von allen Metallen steckt von mir besonders viel in einem Smartphone, weil ich Strom sehr gut leite.",
      ],
      [
        "Danach",
        "Was passiert nach dem Handy?",
        "Ich bin wertvoll und kann gut recycelt werden. Wenn ein Handy richtig gesammelt wird, kann ich aus Elektronikschrott zurückgewonnen und erneut eingesetzt werden.",
      ],
      [
        "Abbau",
        "Wie wirst du gewonnen?",
        "Ich werde aus Kupfererz gewonnen, häufig in großen Tagebauen, manchmal aber auch unter Tage. Das Erz wird zerkleinert, aufbereitet und anschließend geschmolzen oder durch Laugung verarbeitet.",
      ],
      [
        "Umwelt",
        "Welche Folgen hat mein Abbau für die Umwelt?",
        "Bei sulfidischen Kupfererzen kann saure Grubenentwässerung entstehen. Diese kann Schwermetalle aus dem Gestein lösen und Grundwasser, Flüsse oder Böden belasten.",
      ],
      [
        "Menschen",
        "Welche Folgen hat mein Abbau für Menschen?",
        "In Bergbauregionen entstehen häufig Konflikte, wenn Minen Wasser verbrauchen oder Trinkwasserquellen gefährden. Gute Kontrolle, transparente Umweltprüfungen und Mitsprache der Bevölkerung sind deshalb entscheidend.",
      ],
    ],
  ),
};

function getDialog(personaId) {
  return DIALOG_FLOWS[personaId] ?? {
    introStatement: "",
    initialQuestionIds: [],
    questions: {},
  };
}

export function getPersonaIntro(personaId) {
  return getDialog(personaId).introStatement;
}

export function getInitialQuestions(personaId) {
  const dialog = getDialog(personaId);

  return dialog.initialQuestionIds
    .map((questionId) => dialog.questions[questionId])
    .filter(Boolean);
}

export function getQuestions(personaId) {
  const dialog = getDialog(personaId);

  return Object.values(dialog.questions);
}

export function getQuestionById(personaId, questionId) {
  return getDialog(personaId).questions[questionId] ?? null;
}

export function getVisibleQuestions(personaId, visibleQuestionIds) {
  const dialog = getDialog(personaId);

  return visibleQuestionIds
    .map((questionId) => dialog.questions[questionId])
    .filter(Boolean);
}

export function getResponseForQuestion(personaId, questionId) {
  const question = getQuestionById(personaId, questionId);

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        answer: question?.answer ?? "Dazu habe ich gerade keine Antwort.",
        unlocks: question?.unlocks ?? [],
      });
    }, 720);
  });
}