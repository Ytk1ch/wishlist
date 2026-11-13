/*
  СПИСОК ПОДАРКОВ. Тут всё, что видно на сайте. Править можно прямо здесь.

  КАТЕГОРИИ: id (латиницей, без пробелов) и name (как написано на кнопке).

  ПОДАРОК:
    cat      — id категории
    name     — название подарка
    note     — короткая подпись (можно пустую: "")
    variants — варианты этого подарка (от 1 до сколько угодно):
        label — как называется вариант
        price — цена числом, например 2500 (если неизвестна: null)
        url   — ссылка, где купить ("" если пока нет)
        img   — путь к картинке, например "img/mouse-pad-1.jpg" ("" если нет)
        warning — красная пометка WARNING с твоим текстом, например "Нет в наличии" (необязательно)
        btn   — надпись на кнопке вместо «ЗАКАЗАТЬ» (необязательно)
        bg    — цвет фона под фото, если оно не белое, например "#0a1029" (необязательно)
        comment — твои слова про этот вариант: зачем он тебе ("" если не нужен).
                  Если есть, на карточке появится кнопка «КОММЕНТАРИЙ К ПОДАРКУ», а текст
                  покажется как реплика «Danya: ...» (как в звонке Cyberpunk).
                  Абзацы разделяются переносом строки \n.

  Самый дешёвый вариант сайт подсвечивает сам.
  Ниже — ПРИМЕРЫ, чтобы было видно, как всё выглядит. Потом заменим на настоящие.
*/

const CATEGORIES = [
  { id: "tech", name: "ТЕХНИКА И БЫТ" },
  { id: "workspace", name: "РАБОЧЕЕ МЕСТО" },
  { id: "emotions", name: "ЭМОЦИИ" },
  { id: "other", name: "ДРУГОЕ" },
];

const GIFTS = [
  {
    cat: "workspace",
    name: "Коврик для мыши",
    note: "Большой, под клавиатуру и мышь",
    variants: [
      { label: "Artisan FX Zero Soft XL, чёрный, 490×420 мм", price: 8915,
        url: "https://market.yandex.ru/card/artisan-fx-zero-soft-razmer-xl-490x420x4-mm-tsvet-chernyy-kovrik-dlya-myshi-original-slimflex/4399221441",
        img: "img/mouse-pad-artisan.png",
        comment: "Дорогая падаль, но интересно, стоит ли оно того)\nЭто замена моего Deepcool коврика, который лежит сверху на другом коврике, который, по-моему, Тима выиграл у Герасима на ивенте и отдал мне))" },
    ],
  },
  {
    cat: "workspace",
    name: "Наушники",
    note: "",
    variants: [
      { label: "IO by Red Square Graphite 2 FE, белые (беспроводные, полноразмерные)", price: 4949,
        url: "https://www.ozon.ru/product/io-by-red-square-graphite-2-fe-besprovodnye-polnorazmernye-naushniki-belye-4670184339/",
        img: "img/headphones-redsquare.png", bg: "#43bdd3",
        comment: "Какая-то имбовая разработка Фиспекта с аккумом на 2000 мАч за 5к.\nМои Logitech, которые как раз таки тоже мне дарили вы, уже довольно быстро разряжаются, и нужна замена." },
    ],
  },
  {
    cat: "tech",
    name: "Аэрогриль",
    note: "",
    variants: [
      { label: "Xiaomi Air Fryer N1, 6 л, 1500 Вт, белый (MAF13)", price: 5717,
        url: "https://market.yandex.ru/card/aerogril-xiaomi--air-fryer-6l-regulirovka-temperatury-mekhanicheskoye-upravleniye-belyy/4824546727",
        img: "img/airfryer-xiaomi.png", bg: "#ee1503",
        comment: "Я маме на её ДР дарил электрогриль, так что в целом у нас в доме уже есть гриль)\nНо если вы мне подарите этот, то он будет мой, а у мамы свой." },
    ],
  },
  {
    cat: "tech",
    name: "Мини-пылесос",
    note: "Ручной, беспроводной",
    variants: [
      { label: "Xiaomi Mi Vacuum Cleaner Mini (BHR7911), белый", price: 3302,
        url: "https://www.ozon.ru/product/ruchnoy-avtomobilnyy-pylesos-besprovodnoy-xiaomi-mi-vacuum-cleaner-mini-bhr7911-3856471459/",
        img: "img/vacuum-xiaomi.png", bg: "linear-gradient(90deg,#0e1118,#1c2530)",
        comment: "Прикольная штука, с помощью которой я, возможно, начал бы хотя бы на столе у себя убираться.\nПлюс таксишные машины, а потом и свою, если возрожу или если в будущем будет новая, можно будет легко пылесосить." },
    ],
  },
  {
    cat: "tech",
    name: "Триммер",
    note: "Электрический, для лица",
    variants: [
      { label: "Philips OneBlade QP1624/10, серый, расширенная комплектация", price: 2499,
        url: "https://www.dns-shop.ru/product/31175ec58fafd582/trimmer-philips-oneblade-qp162410-seryj/",
        img: "img/trimmer-philips.png",
        comment: "Моя обычная бритва, которой уже лет 5, мне поднадоела и подызносилась.\nВ прошлом году мне мама дарила электробритву, и плюс я ещё сам себе покупал, но они мне не подошли. Осталась последняя надежда на вот эту расхайпленную и расхваленную всеми штуку)" },
    ],
  },
  {
    cat: "workspace",
    name: "Пантограф для микрофона",
    note: "Настольная стойка",
    variants: [
      { label: "Fifine BM88, чёрный", price: 3690,
        url: "https://www.ozon.ru/product/mikrofonnaya-stoyka-fifine-bm88-chernyy-pantograf-nastolnyy-1660304090/",
        img: "img/mic-arm-fifine.png", bg: "linear-gradient(90deg,#2a4042,#2f242f)",
        comment: "Мы дарили эту штуку Андрику на ДР, но теперь настал тот момент, когда мне тоже нужна эта стойка.\nМеня задолбало, что когда я ставлю микрофон перед собой, он закрывает половину клавиатуры и кусок монитора." },
    ],
  },
  {
    cat: "workspace",
    name: "Кронштейн для мониторов",
    note: "Настольный, 13–32 дюйма",
    variants: [
      { label: "ONKRON G250, для двух мониторов, бело-чёрный", price: 4849,
        url: "https://www.ozon.ru/product/onkron-kronshteyn-dlya-monitorov-nastolnyy-13-32-dyuymov-g250-chernyy-belyy-podstavka-pod-monitory-5280069982/",
        img: "img/monitor-arm-onkron.png", bg: "#b3b3b3",
        comment: "Когда у Глеба перевешивали мониторы, я увидел вот этот кронштейн, и он мне сразу понравился.\nЯ подумал, что в целом мне бы тоже такой нужен был)" },
    ],
  },
  {
    cat: "emotions",
    name: "Полёт в аэротрубе",
    note: "Подарочный сертификат, Санкт-Петербург",
    variants: [
      { label: "Сертификат на 4 минуты полёта (1–2 человека)", price: 5900,
        url: "https://aerotruba-spb.ru/podarochnyj-sertifikat-na-polet-v-aehrotrube/",
        btn: "ОТКРЫТЬ САЙТ",
        img: "img/aerotruba.png", bg: "#0b0c12",
        comment: "Всегда хотел полетать в такой штуке или прыгнуть с парашютом, но самому деньги впадлу на это тратить." },
    ],
  },
  {
    cat: "emotions",
    name: "Сертификат на эмоции",
    note: "Один сертификат, много активностей: параплан, дайвинг, эндуро, питбайки и другое",
    variants: [
      { label: "Подарочный набор «maXimum адреналина», Санкт-Петербург (27 впечатлений на выбор)", price: 4881,
        url: "https://xpresent.ru/spb/set/maximum-adrenalina-spb",
        btn: "ОТКРЫТЬ САЙТ",
        img: "img/xpresent-adrenalin.png", bg: "#d5d9df",
        comment: "Тут сертификат на кучу разных активностей, которые дарят эмоции.\nНо я, если что, скорее всего выбирал бы между эндуро, дайвингом и полётом на параплане." },
    ],
  },
  {
    cat: "emotions",
    name: "Урок дрифта",
    note: "Сертификат, Санкт-Петербург",
    variants: [
      { label: "Обучение дрифту 30 минут на BMW E92, школа «Культура заноса»", price: 8000,
        url: "https://kultura-zanosa.ru/spb/certificate/tproduct/5035334301-886664533401-obuchenie-driftu-30-min",
        btn: "ОТКРЫТЬ САЙТ",
        img: "img/drift.png", bg: "#0b0c12",
        comment: "Ну тут я даже хз, чё писать. Мне кажется, от этой темки у меня будут самые лютые эмоции, но, конечно, дороговато)" },
    ],
  },
  {
    cat: "other",
    name: "Подставка под запястье",
    note: "С магнитной крышкой и набором для чистки",
    variants: [
      { label: "CyberLine QS-22, чёрная, под клавиатуру (с набором для чистки)", price: 1184,
        url: "https://www.wildberries.ru/catalog/662963270/detail.aspx",
        img: "img/wrist-rest.png", bg: "#8b949f",
        comment: "Интересно было бы попробовать вот эту подставку под запястье.\nНо даже если мне не понравится, то будет набор для чистки телефона и клавиатуры." },
    ],
  },
  {
    cat: "other",
    name: "Держатель для телефона в машину",
    note: "С беспроводной зарядкой",
    variants: [
      { label: "hoco, автомобильный, с автозажимом и зарядкой 15 Вт", price: 1487,
        url: "https://www.ozon.ru/product/hoco-derzhatel-avtomobilnyy-derzhatel-dlya-telefona-diagonal-7-3-982615855/",
        img: "img/phone-holder-hoco.png", bg: "#151515",
        comment: "Вот такая штука в машину, мне кажется, имба лютая.\nНо самому мне, если честно, впадлу было бы на это тратить 1,5к)" },
    ],
  },
  {
    cat: "workspace",
    name: "Мышка",
    note: "",
    variants: [
      { label: "DarkProject ION PRO (DP-ION-2001), чёрная, беспроводная", price: 7172,
        url: "https://www.ozon.ru/product/mysh-besprovodnaya-igrovaya-dlya-kompyutera-dark-prodzhekt-ion-pro-dp-ion-2001-black-6045027589/",
        btn: "ОТКРЫТЬ НА OZON",
        warning: "На момент создания сайта нет в наличии. Цена последняя из известных.",
        img: "img/mouse-darkproject.png", bg: "#0a0a0c",
        comment: "Очередной топ от DarkProject, и в очередной раз её нет в наличии, но я уже увидел эту мышку и никакую другую, и более дешёвую её версию со старым сенсором я не хочу.\nТак что если вдруг она появится в наличии, то это будет имба." },
    ],
  },
];

/*
  ТОП ПОДАРКОВ (скрыт на сайте до 23.11.2026, 00:00).
  Порядок подарков зашифрован, чтобы его не было видно в открытом виде.
  Чтобы поменять топ, скажи Claude новый порядок, он перепишет эту строку.
*/
const TOP_SECRET = "WyLQo9GA0L7QuiDQtNGA0LjRhNGC0LAiLCLQnNGL0YjQutCwIiwi0KHQtdGA0YLQuNGE0LjQutCw0YIg0L3QsCDRjdC80L7RhtC40LgiLCLQndCw0YPRiNC90LjQutC4Iiwi0JrRgNC+0L3RiNGC0LXQudC9INC00LvRjyDQvNC+0L3QuNGC0L7RgNC+0LIiXQ==";
