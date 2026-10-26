(function () {
  // ---------- Тексты на трёх языках ----------
  var T = {
    pt: {
      title: "Ajudante de Presentes",
      subtitle: "Responde a 3 perguntas sobre a criança e recebe ideias de presente. Sem estragar a surpresa!",
      start: "Começar",
      step1: "Pergunta 1 de 3", step2: "Pergunta 2 de 3", step3: "Pergunta 3 de 3",
      qAge: "Que idade tem a criança?",
      qLikes: "Do que é que ela gosta?",
      likesHint: "Escolhe quantas quiseres",
      next: "Seguinte",
      qGender: "É menina ou menino?",
      boy: "Menino", girl: "Menina",
      resultTitle: "Ideias de presente 🎉",
      resultSub: "Escolhe a que mais combina com a criança.",
      nextIdeas: "Avançar →",
      prevIdeas: "← Anterior",
      again: "Começar de novo",
      years: "anos", plus: "anos ou mais"
    },
    ru: {
      title: "Помощник выбора подарка",
      subtitle: "Ответь на 3 вопроса о ребёнке и получи идеи подарка. Сюрприз не испортится!",
      start: "Начать",
      step1: "Вопрос 1 из 3", step2: "Вопрос 2 из 3", step3: "Вопрос 3 из 3",
      qAge: "Сколько лет ребёнку?",
      qLikes: "Что он любит?",
      likesHint: "Можно выбрать сколько хочешь",
      next: "Дальше",
      qGender: "Это девочка или мальчик?",
      boy: "Мальчик", girl: "Девочка",
      resultTitle: "Идеи подарка 🎉",
      resultSub: "Выбери ту, что больше всего подойдёт ребёнку.",
      nextIdeas: "Вперёд →",
      prevIdeas: "← Назад",
      again: "Начать заново",
      years: "лет", plus: "лет и больше"
    },
    en: {
      title: "Gift Helper",
      subtitle: "Answer 3 questions about the child and get gift ideas. The surprise stays a surprise!",
      start: "Start",
      step1: "Question 1 of 3", step2: "Question 2 of 3", step3: "Question 3 of 3",
      qAge: "How old is the child?",
      qLikes: "What do they like?",
      likesHint: "Pick as many as you like",
      next: "Next",
      qGender: "Is it a girl or a boy?",
      boy: "Boy", girl: "Girl",
      resultTitle: "Gift ideas 🎉",
      resultSub: "Pick the one that fits the child best.",
      nextIdeas: "Next →",
      prevIdeas: "← Previous",
      again: "Start again",
      years: "years", plus: "years or more"
    }
  };

  var INTERESTS = [
    { key: "antistress", emoji: "🫧", pt: "Antistress", ru: "Антистресс", en: "Anti-stress" },
    { key: "lego", emoji: "🧱", pt: "LEGO", ru: "LEGO", en: "LEGO" },
    { key: "cars", emoji: "🏎️", pt: "Hot Wheels e carros", ru: "Hot Wheels и машинки", en: "Hot Wheels & cars" },
    { key: "dolls", emoji: "👸", pt: "Bonecas (Barbie, L.O.L.)", ru: "Куклы (Barbie, L.O.L.)", en: "Dolls (Barbie, L.O.L.)" },
    { key: "plush", emoji: "🧸", pt: "Peluches", ru: "Мягкие игрушки", en: "Plush toys" },
    { key: "pokemon", emoji: "⚡", pt: "Pokémon", ru: "Pokémon", en: "Pokémon" },
    { key: "minecraft", emoji: "⛏️", pt: "Minecraft", ru: "Minecraft", en: "Minecraft" },
    { key: "nerf", emoji: "🎯", pt: "Nerf", ru: "Nerf", en: "Nerf" },
    { key: "slime", emoji: "🟢", pt: "Slime", ru: "Слаймы", en: "Slime" },
    { key: "rc", emoji: "🚁", pt: "Telecomandados e drones", ru: "На пульте и дроны", en: "Remote control & drones" },
    { key: "puzzles", emoji: "🧩", pt: "Puzzles e Rubik", ru: "Пазлы и кубик Рубика", en: "Puzzles & Rubik's" },
    { key: "sport", emoji: "⚽", pt: "Desporto", ru: "Спорт", en: "Sports" },
    { key: "games", emoji: "🎮", pt: "Jogos", ru: "Игры", en: "Games" },
    { key: "art", emoji: "🎨", pt: "Desenhar", ru: "Рисование", en: "Drawing" },
    { key: "music", emoji: "🎵", pt: "Música", ru: "Музыка", en: "Music" },
    { key: "books", emoji: "📚", pt: "Livros", ru: "Книги", en: "Books" },
    { key: "tech", emoji: "💻", pt: "Tecnologia", ru: "Техника", en: "Tech" },
    { key: "fashion", emoji: "👟", pt: "Moda", ru: "Мода", en: "Fashion" },
    { key: "animals", emoji: "🐾", pt: "Animais", ru: "Животные", en: "Animals" },
    { key: "sweets", emoji: "🍫", pt: "Doces", ru: "Сладкое", en: "Sweets" },
    { key: "science", emoji: "🔬", pt: "Ciência", ru: "Наука", en: "Science" }
  ];

  var AGES = [
    { id: 1, label: "6–9" }, { id: 2, label: "10–13" },
    { id: 3, label: "14–17" }, { id: 4, label: "18+" }
  ];
  var GENDERS = [
    { id: "g", emoji: "👧", key: "girl" },
    { id: "b", emoji: "👦", key: "boy" }
  ];
  var PER_PAGE = 5;
  var SCREENS = ["start", "age", "likes", "gender", "result"];

  var $ = function (id) { return document.getElementById(id); };
  var lang = "pt";
  var current = "start";
  var answers = { age: 0, likes: [], gender: "" };
  var ranked = [];   // все подходящие подарки, от лучшего к худшему
  var page = 0;

  // язык запоминается в браузере
  try {
    var saved = localStorage.getItem("gift-lang");
    if (saved && T[saved]) lang = saved;
    else if ((navigator.language || "").indexOf("ru") === 0) lang = "ru";
    else if ((navigator.language || "").indexOf("en") === 0) lang = "en";
  } catch (e) {}

  function t(key) { return T[lang][key]; }

  // ---------- Экраны ----------
  function show(id) {
    current = id;
    SCREENS.forEach(function (s) { $(s).classList.toggle("hidden", s !== id); });
    $("backBtn").classList.toggle("hidden", id === "start");
    window.scrollTo(0, 0);
  }

  function back() {
    var prev = { age: "start", likes: "age", gender: "likes", result: "gender" }[current];
    if (prev) show(prev);
  }

  // ---------- Перевод страницы ----------
  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    document.querySelectorAll("#langs button").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-lang") === lang);
    });
    renderAge();
    renderLikes();
    renderGender();
    if (current === "result") renderIdeas();
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("gift-lang", l); } catch (e) {}
    applyLang();
  }

  // ---------- Вопросы ----------
  function renderAge() {
    var box = $("ageOptions");
    box.innerHTML = "";
    AGES.forEach(function (a) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.innerHTML = "<span></span><small></small>";
      b.querySelector("span").textContent = a.label;
      b.querySelector("small").textContent = a.id === 4 ? t("plus") : t("years");
      b.addEventListener("click", function () { answers.age = a.id; show("likes"); });
      box.appendChild(b);
    });
  }

  function renderLikes() {
    var box = $("likeOptions");
    box.innerHTML = "";
    INTERESTS.forEach(function (it) {
      var b = document.createElement("button");
      b.type = "button";
      var on = answers.likes.indexOf(it.key) >= 0;
      b.className = "chip" + (on ? " on" : "");
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.textContent = it.emoji + " " + it[lang];
      b.addEventListener("click", function () { toggleLike(it.key); });
      box.appendChild(b);
    });
    $("likesNext").disabled = answers.likes.length === 0;
  }

  function toggleLike(key) {
    var i = answers.likes.indexOf(key);
    if (i >= 0) answers.likes.splice(i, 1);
    else answers.likes.push(key);
    renderLikes();
  }

  function renderGender() {
    var box = $("genderOptions");
    box.innerHTML = "";
    GENDERS.forEach(function (gd) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.textContent = gd.emoji + " " + t(gd.key);
      b.addEventListener("click", function () { answers.gender = gd.id; pickGifts(); show("result"); });
      box.appendChild(b);
    });
  }

  // ---------- Подбор подарков ----------
  function pickGifts() {
    var fits = GIFTS.filter(function (g) {
      return answers.age >= g.ages[0] && answers.age <= g.ages[1];
    });
    fits.forEach(function (g) {
      var match = g.tags.filter(function (tag) { return answers.likes.indexOf(tag) >= 0; }).length;
      // главное — интересы ребёнка; пол только чуть меняет порядок; немного случайности
      var genderBonus = !g.g ? 0 : (g.g === answers.gender ? 4 : -4);
      g._score = match * 10 + genderBonus + Math.random() * 2;
      g._match = match;
    });
    fits.sort(function (a, b) { return b._score - a._score; });
    // сначала подарки, совпавшие хотя бы с одним интересом, потом остальные
    ranked = fits.filter(function (g) { return g._match > 0; })
      .concat(fits.filter(function (g) { return g._match === 0; }));
    page = 0;
    renderIdeas();
  }

  function renderIdeas() {
    var box = $("ideas");
    box.innerHTML = "";
    var list = ranked.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
    list.forEach(function (g, i) {
      var card = document.createElement("div");
      card.className = "idea";
      card.style.animationDelay = (i * 0.07) + "s";
      card.innerHTML = '<div class="em"></div><div><b></b><span></span></div>';
      card.querySelector(".em").textContent = g.emoji;
      card.querySelector("b").textContent = g.name[lang];
      var tags = g.tags.map(function (tag) {
        var it = INTERESTS.filter(function (x) { return x.key === tag; })[0];
        return it ? it.emoji + " " + it[lang] : "";
      });
      card.querySelector("span").textContent = tags.join(" · ");
      box.appendChild(card);
    });
    $("moreBtn").disabled = (page + 1) * PER_PAGE >= ranked.length;
    $("prevBtn").disabled = page === 0;
  }

  // ---------- Кнопки ----------
  $("startBtn").addEventListener("click", function () {
    answers = { age: 0, likes: [], gender: "" };
    renderLikes();
    show("age");
  });
  $("likesNext").addEventListener("click", function () { show("gender"); });
  $("moreBtn").addEventListener("click", function () { page++; renderIdeas(); window.scrollTo(0, 0); });
  $("prevBtn").addEventListener("click", function () { if (page > 0) { page--; renderIdeas(); window.scrollTo(0, 0); } });
  $("againBtn").addEventListener("click", function () { show("start"); });
  $("backBtn").addEventListener("click", back);
  document.querySelectorAll("#langs button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  applyLang();
  show("start");
})();
