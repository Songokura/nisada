/* ============ NISADA — script ============ */
"use strict";

/* 🔴 TODO: подставить номер клиента (формат 7XXXXXXXXXX, без «+», скобок и пробелов) */
const WHATSAPP_PHONE = "77068061222";

/* ============ i18n ============ */
const I18N = {
  ru: {
    "meta.title": "NISADA - строительство зданий в Алматы: металл, монолит, кирпич",
    "meta.desc": "ТОО «NISADA»: строительство ангаров, складов, цехов и коммерческих зданий в Алматы. Металлокаркас, монолитный железобетон, кладка из кирпича и блоков. Полный цикл по гослицензии ГСЛ № 03648, на рынке с 2008 года.",
    "brand.too": "ТОО",
    "nav.company": "Компания", "nav.materials": "Материалы", "nav.services": "Услуги", "nav.stages": "Этапы",
    "nav.license": "Лицензия", "nav.contacts": "Контакты", "nav.cta": "Оставить заявку",
    "nav.open": "Открыть меню",
    "nav.privacy": "Политика конфиденциальности",
    "ct.agree": "Отправляя заявку, вы соглашаетесь с",
    "ct.agreelink": "политикой конфиденциальности", "ct.agreetail": ".",
    "hero.over": "Строительная компания · Алматы · с 2008 года",
    "hero.h1a": "Ангары, склады, цеха",
    "hero.h1b": "и коммерческие здания",
    "hero.h1c": "из металла, бетона и кирпича",
    "hero.lead": "Строим не только на металлокаркасе: монолитный железобетон, кладка из кирпича и блоков, комбинированные решения под бюджет. Полный цикл по гослицензии ГСЛ № 03648 - от свай до сдачи объекта.",
    "hero.cta1": "Рассчитать проект", "hero.cta2": "Написать в WhatsApp",
    "hero.scroll": "Из чего строим",
    "mq.1": "АНГАРЫ", "mq.2": "СКЛАДЫ", "mq.3": "МОНОЛИТНЫЙ ЖЕЛЕЗОБЕТОН", "mq.4": "КИРПИЧНАЯ КЛАДКА",
    "mq.5": "КОММЕРЧЕСКИЕ ЗДАНИЯ", "mq.6": "ЦЕХА", "mq.7": "СЭНДВИЧ-ПАНЕЛИ", "mq.8": "БЫСТРОВОЗВОДИМЫЕ ЗДАНИЯ",
    "mq.9": "БЛОКИ И ПЕНОБЛОК", "mq.10": "ОФИСЫ", "mq.11": "СТО И АВТОМОЙКИ", "mq.12": "НАВЕСЫ",
    "about.over": "О компании",
    "about.h2": "Строим надёжное будущее — с 2008 года",
    "about.lead": "ТОО «NISADA» - алматинская строительная компания полного цикла. Строим быстровозводимые здания на металлокаркасе и объекты в монолите и кладке: ангары, склады, производственные цеха, СТО, торговые павильоны, офисные и коммерческие здания из бетона, кирпича и блоков.",
    "about.p2": "Работаем по генеральной государственной лицензии ГСЛ № 03648, выданной Управлением государственного архитектурно-строительного контроля города Алматы. Она допускает возведение несущих и ограждающих конструкций зданий II и III уровня ответственности — а также фундаменты, кровлю, инженерные сети, защиту конструкций и реконструкцию.",
    "about.p3": "Собственная производственная база позволяет держать в одних руках весь процесс: от заготовки металлоконструкций до монтажа и сдачи объекта.",
    "about.s1": "год государственной регистрации", "about.s2": "лет на строительном рынке",
    "about.s3b": "№ 03648", "about.s3": "генеральная гослицензия ГСЛ",
    "about.s4": "уровень ответственности объектов",
    "mat.over": "Материалы и конструктив",
    "mat.h2": "Строим не только из металла",
    "mat.lead": "Металлокаркас, монолитный железобетон, кирпич и блоки - конструктив подбираем под задачу и бюджет, а не под один привычный материал.",
    "m1.t": "Металлокаркас",
    "m1.d": "Сборный каркас из балок и ферм: быстрый монтаж, лёгкий фундамент, большие пролёты без колонн внутри.",
    "m2.t": "Монолитный железобетон",
    "m2.d": "Фундамент, колонны, ригели и перекрытия в опалубке. Прочный несгораемый каркас - часто дешевле металла.",
    "m3.t": "Кирпич и блоки",
    "m3.d": "Кладка из кирпича, керамзитобетонных блоков и пеноблока: несущие стены, перегородки, заполнение каркаса.",
    "m4.t": "Комбинированные решения",
    "m4.d": "Бетонный каркас с кладкой, металл с монолитными перекрытиями, фасад из панелей или штукатурки.",
    "mat.note": "Считаем два-три варианта конструктива на один и тот же объект и показываем разницу в смете - вы выбираете по бюджету, а не по одному материалу.",
    "svc.over": "Услуги", "svc.h2": "Что мы строим",
    "svc.lead": "Пять направлений, в которых NISADA закрывает весь объём работ - от нулевого цикла до готового здания.",
    "f1.t": "Ангары",
    "f1.d": "Арочные и прямостенные ангары на металлокаркасе — для техники, сельхозпродукции, производства и хранения. Утеплённые сэндвич-панелями или холодные — под задачу и бюджет.",
    "f1.l1": "Арочные и каркасные конструкции", "f1.l2": "Тёплое и холодное исполнение",
    "f1.l3": "Ворота и проёмы под вашу технику", "f1.cta": "Обсудить ангар",
    "f2.t": "Склады",
    "f2.d": "Тёплые и холодные склады под товарное хранение и логистику: металлокаркас, сэндвич-панели, полы, инженерные сети — единым подрядом.",
    "f2.l1": "Тёплые и холодные склады", "f2.l2": "Высотное хранение и зонирование",
    "f2.l3": "Свет, отопление, водоснабжение — по лицензии", "f2.cta": "Обсудить склад",
    "f3.t": "Сэндвич-панели",
    "f3.d": "Ограждающие конструкции из сэндвич-панелей: стены и кровля с утеплителем, аккуратные узлы, быстрый монтаж. Здание получает готовый фасад и тёплый контур сразу после каркаса.",
    "f3.l1": "Стеновые и кровельные панели", "f3.l2": "Тёплый контур и готовый фасад",
    "f3.l3": "Монтаж на металлокаркас любой конфигурации", "f3.cta": "Обсудить панели",
    "f4.t": "Быстровозводимые здания",
    "f4.d": "Производственные цеха, СТО и автомойки, торговые павильоны, навесы — здания на металлокаркасе II и III уровня ответственности, разрешённые нашей лицензией.",
    "f4.l1": "Производственные цеха", "f4.l2": "СТО и автомойки",
    "f4.l3": "Торговые павильоны и навесы", "f4.cta": "Обсудить проект",
    "f5.t": "Коммерческие здания и офисы",
    "f5.d": "Офисные, торговые и сервисные здания в монолите и кладке: железобетонный каркас, стены из кирпича или блоков, перекрытия, фасад. Решение для тех, кому металлокаркас выходит слишком дорого.",
    "f5.l1": "Монолитный каркас и перекрытия", "f5.l2": "Стены из кирпича, блоков, пеноблока",
    "f5.l3": "Фасад, отделка и инженерные сети", "f5.cta": "Обсудить здание",
    "works.over": "Лицензируемые работы", "works.h2": "Полный комплекс — по генеральной лицензии",
    "works.lead": "Всё, что нужно зданию помимо каркаса, выполняем сами — в рамках государственной лицензии ГСЛ № 03648.",
    "w1.t": "Фундаменты и сваи",
    "w1.d": "Земляные работы, устройство оснований, свайные работы, монолитные и сборные железобетонные конструкции.",
    "w2.t": "Кровельные работы",
    "w2.d": "Кровля зданий II–III уровня ответственности — от несущего профиля до узлов примыканий и водоотведения.",
    "w3.t": "Инженерные сети",
    "w3.d": "Холодное и горячее водоснабжение, канализация, электроснабжение и освещение, электро- и центральное отопление.",
    "w4.t": "Защита конструкций",
    "w4.d": "Антикоррозийная защита металла, гидро- и теплоизоляция, молниезащита и электрохимическая защита.",
    "w5.t": "Капремонт и реконструкция",
    "w5.d": "Реконструкция и капитальный ремонт с усилением несущих конструкций зданий жилищно-гражданского и производственного назначения.",
    "w6.t": "Дороги и площадки",
    "w6.d": "Основания и покрытия автодорог I–V категории и улиц, взлётно-посадочных полос и вертолётных площадок.",
    "st.over": "Как мы работаем", "st.h2": "Полный цикл в одних руках",
    "st.lead": "Один подрядчик отвечает за объект от котлована до передачи документов — без разрывов и перекладывания ответственности между этапами.",
    "st.1t": "Фундамент и основания", "st.1d": "Земляные работы, сваи, монолит — под расчётные нагрузки каркаса.",
    "st.2t": "Металлокаркас", "st.2d": "Изготовление и монтаж металлоконструкций, установка арматуры, контроль соединений.",
    "st.3t": "Сэндвич-панели и кровля", "st.3d": "Ограждающие конструкции, тёплый контур, кровельные работы.",
    "st.4t": "Инженерные сети", "st.4d": "Вода, канализация, электрика, отопление — наружные сети и внутренние системы.",
    "st.5t": "Сдача объекта", "st.5d": "Антикоррозийная и молниезащита, отделка, передача исполнительной документации.",
    "lic.over": "Документы", "lic.h2": "Генеральная государственная лицензия",
    "lic.lead": "Право вести строительно-монтажные работы подтверждено государством — лицензия действует с 2009 года.",
    "lic.kicker": "Государственная лицензия",
    "lic.r1l": "Дата выдачи", "lic.r1v": "1 июня 2009 года, г. Алматы",
    "lic.r2l": "Кем выдана", "lic.r2v": "Управление государственного архитектурно-строительного контроля города Алматы",
    "lic.r3l": "Вид деятельности", "lic.r3v": "Строительно-монтажные работы в сфере архитектурной, градостроительной и строительной деятельности",
    "lic.r4l": "Особые условия", "lic.r4v": "Генеральная",
    "lic.r5l": "Допуск", "lic.r5v": "Объекты II и III уровня ответственности",
    "lic.r6l": "Госрегистрация ТОО", "lic.r6v": "18 ноября 2008 года",
    "ct.over": "Контакты", "ct.h2": "Обсудим ваш объект",
    "ct.lead": "Расскажите, что планируете строить, — вернёмся с уточняющими вопросами и предложением по конструктиву.",
    "ct.name": "Ваше имя", "ct.nameph": "Как к вам обращаться",
    "ct.phone": "Телефон", "ct.type": "Тип объекта", "ct.msg": "Сообщение",
    "ct.msgph": "Площадь, назначение, участок — всё, что уже известно",
    "ct.o1": "Ангар", "ct.o2": "Склад", "ct.o3": "Производственный цех",
    "ct.o4": "СТО или автомойка", "ct.o5": "Торговый павильон",
    "ct.o7": "Коммерческое здание или офис", "ct.o8": "Монолит, кирпич, блоки", "ct.o6": "Другое",
    "ct.send": "Отправить заявку",
    "ct.ok1": "Спасибо! Заявка принята.", "ct.ok2": "Мы свяжемся с вами в ближайшее время.",
    "ct.a1l": "Офис и производственная база", "ct.a1v": "ул. Кулимана, 1, Алматы",
    "ct.tl": "Телефон", "ct.tv": "Звонок и WhatsApp — на одном номере:",
    "ct.telaria": "Позвонить +7 706 806 12 22",
    "ct.wl": "WhatsApp", "ct.wv": "Быстрее всего ответить в мессенджере:",
    "ct.wbtn": "Написать в WhatsApp",
    "err.name": "Укажите имя", "err.phone": "Укажите телефон в формате +7",
    "ft.r1": "ТОО «NISADA» · г. Алматы, ул. Кулимана, 1 · +7 706 806 12 22",
    "ft.r2": "Госрегистрация — 18.11.2008 · Генеральная гослицензия ГСЛ № 03648 от 01.06.2009",
    "ft.r3": "Фото объектов на сайте - из архива ТОО «NISADA».",
    "mv.badge": "Видео с объекта",
    "mv.over": "Монолит в работе",
    "mv.h3": "Заливка монолитного перекрытия",
    "mv.d": "Бетононасос, опалубка ригелей, арматурный каркас - так наш монолитный железобетон выглядит на объекте, а не на картинке.",
    "mv.btn": "Смотреть со звуком",
    "mv.playaria": "Смотреть ролик со звуком",
    "mv.dialog": "Видео с объекта",
    "mv.close": "Закрыть видео",
    "ft.c": "© 2026 ТОО «NISADA». Строим надёжное будущее.",
    "toast.wa": "Номер WhatsApp скоро появится — оставьте заявку в форме, и мы свяжемся с вами.",
    "wa.default": "Здравствуйте! Пишу с сайта NISADA. Хочу обсудить строительство."
  }
};

/* Казахский словарь лежит отдельным файлом и грузится только когда человек сам
   выбрал KZ (или открыл ?lang=kk). В исходной разметке и в script.js казахского
   текста нет: проверка Google Ads («Неподдерживаемый язык») видит только русский сайт.
   Версия файла берётся из ?v= этого скрипта - бампается вместе с остальными ассетами. */
const LANGS = ["ru", "kk"];
const ASSET_V = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || "";
function loadLang(lang, done){
  if (I18N[lang] || lang !== "kk") return done();
  const s = document.createElement("script");
  s.src = "assets/lang/kk.js" + (ASSET_V ? "?v=" + ASSET_V : "");
  s.onload = () => { if (window.NISADA_KK) I18N.kk = window.NISADA_KK; done(); };
  s.onerror = () => done();
  document.head.appendChild(s);
}
function setLang(lang){ loadLang(lang, () => applyLang(lang)); }

let LANG = "ru";
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || I18N.ru[key] || ""; }

function applyLang(lang){
  if (!I18N[lang]) lang = "ru";
  LANG = lang;
  document.documentElement.lang = (lang === "kk") ? "kk" : "ru";
  document.title = t("meta.title");
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", t("meta.desc"));
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.getAttribute("data-i18n"));
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = t(el.getAttribute("data-i18n-ph"));
    if (v) el.setAttribute("placeholder", v);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const v = t(el.getAttribute("data-i18n-aria"));
    if (v) el.setAttribute("aria-label", v);
  });
  document.querySelectorAll(".lang button").forEach(b => {
    const on = b.getAttribute("data-lang") === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  try { localStorage.setItem("nisada-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => {
  b.addEventListener("click", () => setLang(b.getAttribute("data-lang")));
});

(function initLang(){
  /* ?lang=ru|kk в адресе главнее сохранённого выбора: объявление на русском
     обязано открывать русскую версию, даже если раньше смотрели казахскую */
  let want = null;
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q) want = q.toLowerCase();
  } catch (e) {}
  if (!LANGS.includes(want)) {
    want = null;
    try { want = localStorage.getItem("nisada-lang"); } catch (e) {}
  }
  if (LANGS.includes(want)) setLang(want);
})();

/* ============ шапка: фон при скролле + прогресс ============ */
const hdr = document.getElementById("hdr");
const progressBar = document.getElementById("progressBar");
function onScroll(){
  const y = window.scrollY;
  hdr.classList.toggle("scrolled", y > 30);
  if (progressBar){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ============ мобильное меню ============ */
const burger = document.getElementById("burger");
const mnav = document.getElementById("mnav");
function closeMenu(){
  document.body.classList.remove("menu-open");
  burger.setAttribute("aria-expanded", "false");
  mnav.setAttribute("aria-hidden", "true");
}
burger.addEventListener("click", () => {
  const open = !document.body.classList.contains("menu-open");
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  mnav.setAttribute("aria-hidden", open ? "false" : "true");
});
mnav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
window.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

/* ============ marquee: дублируем ленту для бесшовного цикла ============ */
(function(){
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  track.innerHTML += track.innerHTML;
})();

/* ============ reveal-анимации ============ */
(function(){
  /* Для .reveal-line наблюдаем не сам span, а его обёртку .h1-line.
     Строка сдвинута на 110% вниз и обрезана overflow:hidden обёртки, поэтому
     IntersectionObserver видит нулевое пересечение, порог 0.12 не берётся никогда —
     и заголовок героя остаётся невидимым навсегда. */
  const owner = new WeakMap();
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      (owner.get(en.target) || en.target).classList.add("on");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal, .reveal-img, .hero-truss, .ct-deco").forEach(el => io.observe(el));
  document.querySelectorAll(".reveal-line").forEach(el => {
    const box = el.closest(".h1-line") || el.parentElement || el;
    owner.set(box, el);
    io.observe(box);
  });

  /* Первый экран виден всегда — раскрываем его принудительно, не полагаясь на наблюдателя.
     Пока не догрузились шрифты, раскладка ещё «плывёт», и нижние элементы героя
     (подсказка прокрутки) успевают попасть под порог как «за кадром». */
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero .reveal, .hero .reveal-line, .hero-truss").forEach(el => {
      el.classList.add("on");
      io.unobserve(el.closest(".h1-line") || el);
    });
  });
})();

/* ============ счётчик лет на рынке ============ */
(function(){
  const el = document.getElementById("cnt-years");
  if (!el) return;
  /* Считаем от даты госрегистрации ТОО (18.11.2008), чтобы цифра не устаревала. */
  const since = new Date(el.getAttribute("data-since") || "2008-11-18");
  const now = new Date();
  let target = now.getFullYear() - since.getFullYear();
  const before = now.getMonth() < since.getMonth() ||
                 (now.getMonth() === since.getMonth() && now.getDate() < since.getDate());
  if (before) target -= 1;
  el.textContent = target;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1400;
      function tick(now){
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  io.observe(el);
})();

/* ============ WhatsApp: делегированный клик ============ */
/* Если WHATSAPP_PHONE пуст — показываем тост; если заполнен — открываем wa.me.
   Opus повесит сюда gtag-конверсии. */
function buildWaUrl(text){
  return "https://wa.me/" + WHATSAPP_PHONE + "?text=" + encodeURIComponent(text || t("wa.default"));
}
const toast = document.getElementById("toast");
const toastTxt = document.getElementById("toastTxt");
let toastTimer = null;
function showToast(msg){
  toastTxt.textContent = msg;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => { toast.hidden = true; }, 350);
  }, 4200);
}
document.addEventListener("click", e => {
  const wa = e.target.closest("[data-wa]");
  if (!wa) return;
  e.preventDefault();
  if (WHATSAPP_PHONE){
    window.open(buildWaUrl(), "_blank", "noopener");
  } else {
    showToast(t("toast.wa"));
  }
});

/* ============ видео с объекта: немая петля по видимости + полный ролик в модалке ============ */
(function(){
  const player = document.getElementById("mvPlayer");
  const loop = player ? player.querySelector(".mv-loop") : null;
  const modal = document.getElementById("vmodal");
  const full = document.getElementById("vmodalVideo");
  if (!player || !loop || !modal || !full) return;

  /* src подставляем только когда карточка видна на ~55% - preload="none" без src ничего не качает.
     Класс is-live ставим по событию playing, а не сразу: иначе мигает чёрный кадр вместо постера. */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  loop.addEventListener("playing", () => player.classList.add("is-live"));
  function startLoop(){
    if (!loop.getAttribute("src")){
      loop.setAttribute("src", loop.getAttribute("data-src"));
      loop.load();
    }
    const pr = loop.play();
    if (pr && pr.catch) pr.catch(() => {});
  }
  function stopLoop(){
    loop.pause();
    player.classList.remove("is-live");
    if (loop.getAttribute("src")){
      loop.removeAttribute("src");
      loop.load();
    }
  }
  if (!reduce && "IntersectionObserver" in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && en.intersectionRatio >= 0.55) startLoop();
        else if (!en.isIntersecting) stopLoop();
      });
    }, { threshold: [0, 0.55] });
    io.observe(player);
  }

  /* модалка: открываем классом; hidden здесь не работает - display из .vmodal его перебьёт */
  let lastFocus = null;
  function openModal(){
    lastFocus = document.activeElement;
    stopLoop();
    if (!full.getAttribute("src")){
      full.setAttribute("src", full.getAttribute("data-src"));
      full.load();
    }
    modal.classList.add("open");
    document.body.classList.add("vmodal-open");
    full.currentTime = 0;
    const pr = full.play();
    if (pr && pr.catch) pr.catch(() => {});
    requestAnimationFrame(() => modal.querySelector(".vmodal-close").focus());
  }
  function closeModal(){
    if (!modal.classList.contains("open")) return;
    full.pause();
    modal.classList.remove("open");
    document.body.classList.remove("vmodal-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.querySelectorAll("[data-mv-open]").forEach(b => b.addEventListener("click", openModal));
  modal.querySelector(".vmodal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  full.addEventListener("ended", closeModal);
})();

/* ============ форма заявки ============ */
(function(){
  const form = document.getElementById("leadForm");
  if (!form) return;
  const fName = document.getElementById("fName");
  const fPhone = document.getElementById("fPhone");
  const fType = document.getElementById("fType");
  const fMsg = document.getElementById("fMsg");
  const ok = document.getElementById("formOk");

  function validate(){
    let good = true;
    const nameOk = fName.value.trim().length >= 2;
    fName.closest(".field").classList.toggle("bad", !nameOk);
    if (!nameOk) good = false;
    const digits = fPhone.value.replace(/\D/g, "");
    const phoneOk = digits.length >= 10 && digits.length <= 12;
    fPhone.closest(".field").classList.toggle("bad", !phoneOk);
    if (!phoneOk) good = false;
    return good;
  }
  [fName, fPhone].forEach(el => el.addEventListener("input", () => {
    el.closest(".field").classList.remove("bad");
  }));

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!validate()) return;
    const text = t("wa.default") +
      "\n" + t("ct.name") + ": " + fName.value.trim() +
      "\n" + t("ct.phone") + ": " + fPhone.value.trim() +
      "\n" + t("ct.type") + ": " + fType.value +
      (fMsg.value.trim() ? "\n" + t("ct.msg") + ": " + fMsg.value.trim() : "");
    adsConversion("A5f5CPfhjPMcELvK6tlE");   /* Отправка формы для потенциальных клиентов */
    if (WHATSAPP_PHONE){
      window.open(buildWaUrl(text), "_blank", "noopener");
    }
    ok.hidden = false;
    form.reset();
    ok.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
})();

/* ============ Конверсии Google Ads (AW-18442003771) ============
   Три цели из кабинета клиента:
     rVHuCJO5hPMcELvK6tlE - Интерактивные номера телефонов (клик по tel:)
     A5f5CPfhjPMcELvK6tlE - Отправка формы для потенциальных клиентов (см. submit формы)
     ePnJCJmoj_McELvK6tlE - Контакт (клик по кнопке WhatsApp)
   Слушатели делегированные: кнопок звонка и WhatsApp на странице по несколько
   (шапка, герой, контакты, мобильное меню), вешать onclick на каждую - лишний повод
   что-то забыть при следующей правке разметки. */
function adsConversion(label){
  if (typeof gtag !== "function") return;   /* блокировщик рекламы или тег не загрузился */
  gtag("event", "conversion", {
    "send_to": "AW-18442003771/" + label,
    "value": 1.0,
    "currency": "USD"
  });
}

document.addEventListener("click", function (e) {
  const tel = e.target.closest('a[href^="tel:"]');
  if (tel) {
    /* Без preventDefault: на телефоне переход к набору номера не должен ждать ответа
       Google, иначе часть звонков теряется. Событие уходит параллельно. */
    adsConversion("rVHuCJO5hPMcELvK6tlE");
    return;
  }
  if (e.target.closest("[data-wa]")) {
    adsConversion("ePnJCJmoj_McELvK6tlE");   /* Контакт */
  }
}, true);
