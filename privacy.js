/* ============ NISADA - страница «Политика конфиденциальности» ============
   Своя маленькая логика языка вместо общего script.js: на этой странице нет
   ни формы, ни плит, ни мобильного меню, и тянуть сюда весь словарь главной не за чем.
   Ключ localStorage тот же, что на главной (nisada-lang), плюс ?lang= в URL -
   иначе человек, пришедший по казахскому объявлению, попадёт на русскую версию. */
"use strict";

(function () {
  var TR = {
    ru: {
      title: "Политика конфиденциальности - ТОО «NISADA»",
      desc: "Политика конфиденциальности ТОО «NISADA»: какие персональные данные мы собираем через форму заявки, зачем они нужны, кому передаются и как отозвать согласие.",
      back: "На главную",
      fnav1: "Главная", fnav2: "Услуги", fnav3: "Лицензия", fnav4: "Контакты",
      freq1: "ТОО «NISADA» · г. Алматы, ул. Кулимана, 1",
      freq2: "Госрегистрация - 18.11.2008 · Генеральная гослицензия ГСЛ № 03648 от 01.06.2009",
      fbot: "© 2026 ТОО «NISADA». Строим надёжное будущее.",
      langaria: "Язык сайта"
    },
    kk: {
      title: "Құпиялылық саясаты - «NISADA» ЖШС",
      desc: "«NISADA» ЖШС құпиялылық саясаты: өтінім нысаны арқылы қандай дербес деректерді жинаймыз, олар не үшін керек, кімге беріледі және келісімді қалай кері қайтаруға болады.",
      back: "Басты бетке",
      fnav1: "Басты бет", fnav2: "Қызметтер", fnav3: "Лицензия", fnav4: "Байланыс",
      freq1: "«NISADA» ЖШС · Алматы қ., Кулиман көшесі, 1",
      freq2: "Мемлекеттік тіркеу - 18.11.2008 · Бас мемлекеттік лицензия ГСЛ № 03648, 01.06.2009",
      fbot: "© 2026 «NISADA» ЖШС. Сенімді болашақ саламыз.",
      langaria: "Сайт тілі"
    }
  };

  var blocks = document.querySelectorAll("[data-tr-block]");
  var buttons = document.querySelectorAll(".lang [data-lang]");

  function apply(lang) {
    if (!TR[lang]) lang = "ru";
    var d = TR[lang];

    document.documentElement.lang = lang;
    document.title = d.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", d.desc);

    /* Скрываем неактивную версию атрибутом hidden. В styles.css есть общее
       правило [hidden]{display:none!important} - без него display из .doc-sec
       перебил бы атрибут и на странице оказались бы обе версии сразу. */
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].hidden = blocks[i].getAttribute("data-tr-block") !== lang;
    }

    var nodes = document.querySelectorAll("[data-tr]");
    for (var j = 0; j < nodes.length; j++) {
      var key = nodes[j].getAttribute("data-tr");
      if (d[key]) nodes[j].textContent = d[key];
    }

    for (var k = 0; k < buttons.length; k++) {
      var on = buttons[k].getAttribute("data-lang") === lang;
      buttons[k].classList.toggle("is-active", on);
      buttons[k].setAttribute("aria-pressed", on ? "true" : "false");
    }

    var group = document.querySelector(".lang");
    if (group) group.setAttribute("aria-label", d.langaria);
  }

  function pick() {
    var fromUrl = null;
    try {
      fromUrl = new URLSearchParams(location.search).get("lang");
    } catch (e) {}
    if (fromUrl && TR[fromUrl]) return fromUrl;

    var saved = null;
    try { saved = localStorage.getItem("nisada-lang"); } catch (e) {}
    if (saved && TR[saved]) return saved;

    return (navigator.language || "").toLowerCase().indexOf("kk") === 0 ? "kk" : "ru";
  }

  for (var b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      try { localStorage.setItem("nisada-lang", lang); } catch (e) {}
      apply(lang);
    });
  }

  apply(pick());
})();

/* Конверсия «Интерактивные номера телефонов» - на правовой странице есть свои ссылки tel:
   (шапка и разделы 1, 10, 12). Глобальный тег и gtag_report_conversion объявлены в head. */
document.addEventListener("click", function (e) {
  if (e.target.closest('a[href^="tel:"]') && typeof gtag === "function") {
    gtag("event", "conversion", {
      "send_to": "AW-18442003771/rVHuCJO5hPMcELvK6tlE",
      "value": 1.0,
      "currency": "USD"
    });
  }
}, true);
