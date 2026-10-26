// Список подарков.
// ages: [от, до] — группы возраста: 1 = 6–9, 2 = 10–13, 3 = 14–17, 4 = 18+
// tags: интересы друга (ключи из INTERESTS в script.js)
// g: "b" — чаще выбирают мальчики, "g" — чаще девочки, нет поля — подходит всем
//    (это только подсказка для порядка: интересы друга важнее)
var GIFTS = [
  // ---------- Универсальный подарок ----------
  { emoji: "🥟", tags: ["antistress", "plush", "slime"], ages: [1, 4],
    name: { pt: "Dumpling antistress (aperta e relaxa)", ru: "Дамплинг — антистресс-пельмень (мнёшь и расслабляешься)", en: "Dumpling squishy (anti-stress toy)" } },

  // ---------- Антистрессы ----------
  { emoji: "🫧", tags: ["antistress"], ages: [1, 4],
    name: { pt: "Pop It", ru: "Поп-ит (Pop It)", en: "Pop It" } },
  { emoji: "🔘", tags: ["antistress"], ages: [1, 3],
    name: { pt: "Simple Dimple", ru: "Симпл-димпл (Simple Dimple)", en: "Simple Dimple" } },
  { emoji: "🌀", tags: ["antistress"], ages: [1, 4],
    name: { pt: "Fidget spinner", ru: "Спиннер", en: "Fidget spinner" } },
  { emoji: "🎲", tags: ["antistress", "puzzles"], ages: [1, 4],
    name: { pt: "Cubo antistress (Fidget Cube)", ru: "Кубик-антистресс (Fidget Cube)", en: "Fidget Cube" } },
  { emoji: "♾️", tags: ["antistress"], ages: [1, 4],
    name: { pt: "Cubo infinito", ru: "Бесконечный кубик (Infinity Cube)", en: "Infinity Cube" } },
  { emoji: "🍡", tags: ["antistress", "plush"], ages: [1, 3],
    name: { pt: "Squishy mochi", ru: "Сквиши-моти", en: "Mochi squishies" } },
  { emoji: "🍩", tags: ["antistress", "sweets"], ages: [1, 3],
    name: { pt: "Squishy em forma de comida", ru: "Сквиш в виде еды (пончик, бургер)", en: "Food-shaped squishy" } },
  { emoji: "🔵", tags: ["antistress"], ages: [1, 4],
    name: { pt: "NeeDoh (bola para apertar)", ru: "NeeDoh — мялка-антистресс", en: "NeeDoh squeeze ball" } },
  { emoji: "🕸️", tags: ["antistress"], ages: [1, 3],
    name: { pt: "Bola de apertar com rede", ru: "Мялка в сеточке", en: "Mesh squeeze ball" } },
  { emoji: "👀", tags: ["antistress"], ages: [1, 2],
    name: { pt: "Monstro de apertar com olhos", ru: "Мялка-монстр с глазами", en: "Pop-eye squeeze monster" } },
  { emoji: "🌈", tags: ["antistress"], ages: [1, 3],
    name: { pt: "Pop Tubes (tubos que esticam)", ru: "Поп-трубки (Pop Tubes)", en: "Pop Tubes" } },
  { emoji: "🦔", tags: ["antistress"], ages: [1, 3],
    name: { pt: "Bola sensorial com picos", ru: "Мячик-ёжик сенсорный", en: "Spiky sensory ball" } },
  { emoji: "🏖️", tags: ["antistress", "art"], ages: [1, 3],
    name: { pt: "Areia cinética", ru: "Кинетический песок", en: "Kinetic sand" } },
  { emoji: "⛓️", tags: ["antistress"], ages: [2, 4],
    name: { pt: "Corrente fidget (Flippy Chain)", ru: "Цепочка-антистресс (Flippy Chain)", en: "Flippy Chain fidget" } },
  { emoji: "🥚", tags: ["antistress"], ages: [3, 4],
    name: { pt: "Bola antistress clássica", ru: "Классический мячик-антистресс", en: "Classic stress ball" } },

  // ---------- Спорт ----------
  { emoji: "⚽", tags: ["sport"], ages: [1, 4],
    name: { pt: "Bola de futebol", ru: "Футбольный мяч", en: "Football" } },
  { emoji: "🧤", tags: ["sport"], ages: [1, 4],
    name: { pt: "Luvas de guarda-redes", ru: "Вратарские перчатки", en: "Goalkeeper gloves" } },
  { emoji: "👕", tags: ["sport", "fashion"], ages: [1, 4],
    name: { pt: "Camisola do clube favorito", ru: "Футболка любимого клуба", en: "Favourite club jersey" } },
  { emoji: "🏓", tags: ["sport"], ages: [1, 4],
    name: { pt: "Raquetes de ping-pong", ru: "Ракетки для пинг-понга", en: "Ping-pong paddles" } },
  { emoji: "🛹", tags: ["sport"], ages: [2, 4],
    name: { pt: "Skate", ru: "Скейтборд", en: "Skateboard" } },
  { emoji: "🧃", tags: ["sport"], ages: [1, 4],
    name: { pt: "Garrafa de água desportiva", ru: "Спортивная бутылка для воды", en: "Sports water bottle" } },
  { emoji: "🏎️", tags: ["sport", "cars"], ages: [2, 4],
    name: { pt: "Corrida de karting", ru: "Заезд на картинге", en: "Go-karting session" } },
  { emoji: "🧢", tags: ["sport", "fashion"], ages: [1, 4],
    name: { pt: "Boné fixe", ru: "Крутая кепка", en: "Cool cap" } },

  // ---------- Игры ----------
  { emoji: "🎮", tags: ["games"], ages: [1, 4],
    name: { pt: "Cartão de oferta para jogos", ru: "Подарочная карта для игр", en: "Gaming gift card" } },
  { emoji: "🕹️", tags: ["games", "tech"], ages: [2, 4],
    name: { pt: "Comando sem fios", ru: "Беспроводной геймпад", en: "Wireless controller" } },
  { emoji: "🎧", tags: ["games", "music", "tech"], ages: [2, 4],
    name: { pt: "Auscultadores gaming", ru: "Игровые наушники", en: "Gaming headset" } },
  { emoji: "♟️", tags: ["games", "puzzles"], ages: [1, 4],
    name: { pt: "Jogo de tabuleiro", ru: "Настольная игра", en: "Board game" } },
  { emoji: "🃏", tags: ["games"], ages: [1, 4],
    name: { pt: "Cartas UNO", ru: "Карты UNO", en: "UNO cards" } },
  { emoji: "🧸", tags: ["games", "plush"], ages: [1, 2],
    name: { pt: "Peluche de personagem de jogo", ru: "Мягкая игрушка из игры", en: "Video game plush toy" } },

  // ---------- LEGO ----------
  { emoji: "🧱", tags: ["lego"], ages: [1, 4],
    name: { pt: "Conjunto de LEGO City", ru: "Набор LEGO City", en: "LEGO City set" } },
  { emoji: "⛏️", tags: ["lego", "minecraft"], ages: [1, 3],
    name: { pt: "LEGO Minecraft", ru: "LEGO Minecraft", en: "LEGO Minecraft" } },
  { emoji: "🏡", tags: ["lego"], ages: [1, 3], g: "g",
    name: { pt: "LEGO Friends", ru: "LEGO Friends", en: "LEGO Friends" } },
  { emoji: "⚙️", tags: ["lego", "tech"], ages: [2, 4],
    name: { pt: "LEGO Technic", ru: "LEGO Technic", en: "LEGO Technic" } },
  { emoji: "🚀", tags: ["lego"], ages: [1, 4], g: "b",
    name: { pt: "LEGO Star Wars", ru: "LEGO Star Wars", en: "LEGO Star Wars" } },

  // ---------- Hot Wheels и машинки ----------
  { emoji: "🏁", tags: ["cars"], ages: [1, 2], g: "b",
    name: { pt: "Pista Hot Wheels com looping", ru: "Трек Hot Wheels с петлёй", en: "Hot Wheels loop track" } },
  { emoji: "🚗", tags: ["cars"], ages: [1, 3], g: "b",
    name: { pt: "Pack de 5 carros Hot Wheels", ru: "Набор из 5 машинок Hot Wheels", en: "Hot Wheels 5-car pack" } },
  { emoji: "🚙", tags: ["cars", "rc"], ages: [1, 3],
    name: { pt: "Carro telecomandado", ru: "Машинка на пульте", en: "Remote control car" } },
  { emoji: "🚓", tags: ["cars", "rc"], ages: [3, 4],
    name: { pt: "Carro telecomandado de hobby", ru: "Скоростная RC-машинка (хобби)", en: "Hobby-grade RC car" } },
  { emoji: "🚘", tags: ["cars", "rc"], ages: [3, 4],
    name: { pt: "Carro telecomandado rápido (off-road)", ru: "Скоростной радиоуправляемый внедорожник", en: "Fast RC off-road car" } },

  // ---------- Куклы ----------
  { emoji: "👸", tags: ["dolls"], ages: [1, 2], g: "g",
    name: { pt: "Boneca Barbie", ru: "Кукла Barbie", en: "Barbie doll" } },
  { emoji: "🎀", tags: ["dolls"], ages: [1, 2], g: "g",
    name: { pt: "L.O.L. Surprise!", ru: "L.O.L. Surprise!", en: "L.O.L. Surprise!" } },
  { emoji: "🏠", tags: ["dolls"], ages: [1, 1], g: "g",
    name: { pt: "Casa de bonecas", ru: "Кукольный домик", en: "Dollhouse" } },
  { emoji: "🎎", tags: ["dolls"], ages: [3, 4], g: "g",
    name: { pt: "Boneca de coleção (L.O.L. OMG)", ru: "Коллекционная кукла (L.O.L. OMG)", en: "Collector doll (L.O.L. OMG)" } },
  { emoji: "🪆", tags: ["dolls"], ages: [3, 4],
    name: { pt: "Bonecas russas (matryoshka)", ru: "Матрёшки", en: "Matryoshka nesting dolls" } },
  { emoji: "🪡", tags: ["dolls", "art"], ages: [3, 4], g: "g",
    name: { pt: "Kit para criar roupa para bonecas", ru: "Набор для шитья одежды куклам", en: "Doll clothes sewing kit" } },

  // ---------- Мягкие игрушки ----------
  { emoji: "🐻", tags: ["plush"], ages: [1, 4],
    name: { pt: "Squishmallow", ru: "Squishmallow", en: "Squishmallow" } },
  { emoji: "🦄", tags: ["plush"], ages: [1, 3],
    name: { pt: "Peluche gigante", ru: "Огромная мягкая игрушка", en: "Giant plush toy" } },

  // ---------- Pokémon ----------
  { emoji: "⚡", tags: ["pokemon", "games"], ages: [1, 4],
    name: { pt: "Cartas Pokémon (booster)", ru: "Карточки Pokémon (бустер)", en: "Pokémon cards (booster)" } },
  { emoji: "🐭", tags: ["pokemon", "plush"], ages: [1, 3],
    name: { pt: "Peluche do Pikachu", ru: "Мягкий Пикачу", en: "Pikachu plush" } },
  { emoji: "🔴", tags: ["pokemon"], ages: [1, 2],
    name: { pt: "Pokébola com figura", ru: "Покебол с фигуркой", en: "Poké Ball with figure" } },
  { emoji: "🟨", tags: ["pokemon"], ages: [3, 4],
    name: { pt: "Figura colecionável Pokémon", ru: "Коллекционная фигурка Pokémon", en: "Collectible Pokémon figure" } },

  // ---------- Minecraft ----------
  { emoji: "🟩", tags: ["minecraft"], ages: [1, 2],
    name: { pt: "Figuras do Minecraft", ru: "Фигурки Minecraft", en: "Minecraft figures" } },
  { emoji: "🔥", tags: ["minecraft", "tech"], ages: [1, 3],
    name: { pt: "Candeeiro tocha do Minecraft", ru: "Светильник-факел Minecraft", en: "Minecraft torch lamp" } },
  { emoji: "📘", tags: ["minecraft", "books"], ages: [1, 3],
    name: { pt: "Livro de construções Minecraft", ru: "Книга построек Minecraft", en: "Minecraft building book" } },
  { emoji: "📗", tags: ["minecraft", "books"], ages: [3, 4],
    name: { pt: "Guia oficial de Minecraft", ru: "Официальный гайд по Minecraft", en: "Official Minecraft guide" } },
  { emoji: "🐷", tags: ["minecraft", "plush"], ages: [3, 4],
    name: { pt: "Peluche Minecraft grande", ru: "Большая мягкая игрушка Minecraft", en: "Large Minecraft plush" } },
  { emoji: "🖥️", tags: ["minecraft", "games", "tech"], ages: [3, 4],
    name: { pt: "Cartão de oferta Minecraft", ru: "Подарочная карта Minecraft", en: "Minecraft gift card" } },

  // ---------- Nerf ----------
  { emoji: "🔫", tags: ["nerf", "sport"], ages: [1, 3],
    name: { pt: "Lançador Nerf", ru: "Бластер Nerf", en: "Nerf blaster" } },
  { emoji: "🎯", tags: ["nerf"], ages: [1, 3],
    name: { pt: "Alvo para Nerf", ru: "Мишень для Nerf", en: "Nerf target" } },
  { emoji: "🏟️", tags: ["nerf", "sport"], ages: [3, 4],
    name: { pt: "Batalha Nerf em grupo", ru: "Командная битва на Нерфах", en: "Group Nerf battle" } },
  { emoji: "💥", tags: ["nerf", "sport"], ages: [3, 4],
    name: { pt: "Nerf Elite (blaster grande)", ru: "Nerf Elite — большой бластер", en: "Nerf Elite blaster" } },
  { emoji: "🛡️", tags: ["nerf"], ages: [3, 4],
    name: { pt: "Set de batalha Nerf (2 blasters + alvos)", ru: "Набор для боя Nerf (2 бластера и мишени)", en: "Nerf battle set (2 blasters + targets)" } },

  // ---------- Слаймы ----------
  { emoji: "🧪", tags: ["slime", "science", "art"], ages: [1, 2],
    name: { pt: "Kit para fazer slime", ru: "Набор для создания слайма", en: "Slime making kit" } },
  { emoji: "🟢", tags: ["slime"], ages: [1, 2],
    name: { pt: "Slime fofinho", ru: "Пушистый слайм", en: "Fluffy slime" } },
  { emoji: "🧫", tags: ["slime", "art"], ages: [3, 4],
    name: { pt: "Kit de slime artístico", ru: "Набор для арт-слайма", en: "Art slime kit" } },

  // ---------- На пульте ----------
  { emoji: "🚁", tags: ["rc", "tech"], ages: [2, 4],
    name: { pt: "Drone para iniciantes", ru: "Дрон для начинающих", en: "Beginner drone" } },
  { emoji: "🛸", tags: ["rc"], ages: [2, 3],
    name: { pt: "Helicóptero telecomandado", ru: "Вертолёт на пульте", en: "Remote control helicopter" } },

  // ---------- Головоломки ----------
  { emoji: "🧊", tags: ["puzzles"], ages: [1, 4],
    name: { pt: "Cubo de Rubik", ru: "Кубик Рубика", en: "Rubik's Cube" } },
  { emoji: "🧩", tags: ["puzzles"], ages: [3, 4],
    name: { pt: "Puzzle de 1000 peças", ru: "Пазл на 1000 деталей", en: "1000-piece puzzle" } },
  { emoji: "🏰", tags: ["puzzles", "art"], ages: [2, 4],
    name: { pt: "Puzzle 3D", ru: "3D-пазл", en: "3D puzzle" } },

  // ---------- Рисование ----------
  { emoji: "🖍️", tags: ["art"], ages: [1, 4],
    name: { pt: "Conjunto de marcadores", ru: "Набор маркеров", en: "Marker set" } },
  { emoji: "📓", tags: ["art"], ages: [1, 4],
    name: { pt: "Caderno de desenho", ru: "Скетчбук", en: "Sketchbook" } },
  { emoji: "🖼️", tags: ["art"], ages: [1, 4],
    name: { pt: "Kit de pintura em tela", ru: "Набор для рисования на холсте", en: "Canvas painting kit" } },
  { emoji: "📿", tags: ["art", "fashion"], ages: [1, 3], g: "g",
    name: { pt: "Kit para fazer pulseiras", ru: "Набор для браслетов", en: "Bracelet making kit" } },

  // ---------- Музыка ----------
  { emoji: "🔊", tags: ["music", "tech"], ages: [2, 4],
    name: { pt: "Coluna Bluetooth", ru: "Bluetooth-колонка", en: "Bluetooth speaker" } },
  { emoji: "🎤", tags: ["music"], ages: [1, 3],
    name: { pt: "Microfone de karaoke", ru: "Караоке-микрофон", en: "Karaoke microphone" } },
  { emoji: "🎸", tags: ["music"], ages: [2, 4],
    name: { pt: "Ukulele", ru: "Укулеле", en: "Ukulele" } },
  { emoji: "🥁", tags: ["music"], ages: [1, 2],
    name: { pt: "Mini kit de percussão", ru: "Мини-набор ударных", en: "Mini percussion kit" } },
  { emoji: "🎹", tags: ["music"], ages: [1, 2],
    name: { pt: "Teclado musical para crianças", ru: "Детский музыкальный синтезатор", en: "Kids musical keyboard" } },
  { emoji: "🎟️", tags: ["music"], ages: [3, 4],
    name: { pt: "Bilhete para um concerto", ru: "Билет на концерт", en: "Concert ticket" } },

  // ---------- Книги ----------
  { emoji: "📚", tags: ["books"], ages: [1, 4],
    name: { pt: "Livro de aventuras", ru: "Приключенческая книга", en: "Adventure book" } },
  { emoji: "📖", tags: ["books", "art"], ages: [2, 4],
    name: { pt: "Banda desenhada ou manga", ru: "Комикс или манга", en: "Comic or manga" } },
  { emoji: "🔦", tags: ["books"], ages: [1, 4],
    name: { pt: "Luz de leitura + marcadores", ru: "Фонарик для чтения и закладки", en: "Reading light + bookmarks" } },

  // ---------- Техника ----------
  { emoji: "💡", tags: ["tech"], ages: [2, 4],
    name: { pt: "Fita LED para o quarto", ru: "LED-лента для комнаты", en: "LED strip for the room" } },
  { emoji: "🔋", tags: ["tech"], ages: [3, 4],
    name: { pt: "Power bank", ru: "Пауэрбанк", en: "Power bank" } },
  { emoji: "🤖", tags: ["tech", "science"], ages: [1, 3],
    name: { pt: "Kit de robótica", ru: "Набор робототехники", en: "Robotics kit" } },
  { emoji: "⌚", tags: ["tech", "sport"], ages: [3, 4],
    name: { pt: "Relógio inteligente", ru: "Умные часы", en: "Smartwatch" } },

  // ---------- Мода ----------
  { emoji: "🎒", tags: ["fashion"], ages: [1, 4],
    name: { pt: "Mochila fixe", ru: "Крутой рюкзак", en: "Cool backpack" } },
  { emoji: "🧦", tags: ["fashion"], ages: [1, 4],
    name: { pt: "Meias divertidas", ru: "Прикольные носки", en: "Funny socks" } },
  { emoji: "🕶️", tags: ["fashion"], ages: [2, 4],
    name: { pt: "Óculos de sol", ru: "Солнцезащитные очки", en: "Sunglasses" } },

  // ---------- Животные ----------
  { emoji: "🐶", tags: ["animals"], ages: [1, 4],
    name: { pt: "Brinquedo para o animal de estimação", ru: "Игрушка для питомца", en: "Pet toy" } },
  { emoji: "🦁", tags: ["animals", "books"], ages: [1, 3],
    name: { pt: "Enciclopédia de animais", ru: "Энциклопедия животных", en: "Animal encyclopedia" } },
  { emoji: "🦖", tags: ["animals", "science"], ages: [1, 2],
    name: { pt: "Kit de escavação de dinossauros", ru: "Набор «Раскопай динозавра»", en: "Dinosaur dig kit" } },
  { emoji: "🐠", tags: ["animals", "science"], ages: [1, 4],
    name: { pt: "Visita ao Oceanário", ru: "Поход в океанариум", en: "Aquarium visit" } },

  // ---------- Сладкое ----------
  { emoji: "🍫", tags: ["sweets"], ages: [1, 4],
    name: { pt: "Caixa de chocolates", ru: "Коробка шоколада", en: "Box of chocolates" } },
  { emoji: "🍪", tags: ["sweets"], ages: [1, 4],
    name: { pt: "Kit para fazer bolachas", ru: "Набор для выпечки печенья", en: "Cookie baking kit" } },
  { emoji: "🍿", tags: ["sweets", "games"], ages: [1, 4],
    name: { pt: "Kit noite de cinema", ru: "Набор «Вечер кино»", en: "Movie night kit" } },

  // ---------- Наука ----------
  { emoji: "🔬", tags: ["science"], ages: [1, 3],
    name: { pt: "Microscópio", ru: "Микроскоп", en: "Microscope" } },
  { emoji: "🌋", tags: ["science"], ages: [1, 3],
    name: { pt: "Kit de experiências científicas", ru: "Набор научных опытов", en: "Science experiment kit" } },
  { emoji: "🔭", tags: ["science"], ages: [2, 4],
    name: { pt: "Telescópio", ru: "Телескоп", en: "Telescope" } },
  { emoji: "🌟", tags: ["science", "art"], ages: [1, 3],
    name: { pt: "Estrelas que brilham no escuro", ru: "Светящиеся звёзды на потолок", en: "Glow-in-the-dark stars" } }
];
