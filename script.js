'use strict'

document.documentElement.classList.add('js')

const PHONE = '77024646441'
const INSTAGRAM = 'https://www.instagram.com/zulfiya.buyer/'

const translations = {
  ru: {
    'a11y.skip': 'Перейти к содержимому',
    'meta.descriptor': 'Байер и проводник по мировым рынкам',
    'nav.directions': 'Направления', 'nav.about': 'Обо мне', 'nav.process': 'Как заказать', 'nav.contacts': 'Контакты', 'nav.write': 'Написать',
    'hero.badge': 'Закупки · проверка · доставка', 'hero.titleBefore': 'Подбираю товары', 'hero.titleAccent': 'без границ',
    'hero.text': 'Китай, Турция, Армения и ювелирные изделия — для личных покупок и бизнеса, с сопровождением до получения.',
    'hero.primary': 'Подобрать товар', 'hero.secondary': 'Смотреть направления', 'hero.statFollowers': 'подписчиков',
    'hero.statYears': 'года в закупках', 'hero.statFormats': 'опт и розница', 'hero.noteTitle': 'От идеи до доставки',
    'hero.noteText': 'Подберу товар, проверю детали и помогу провести заказ до получения.',
    'hero.proofOne': 'Для себя и бизнеса', 'hero.proofTwo': 'Проверка перед выкупом', 'hero.proofThree': 'На связи до получения',
    'ticker.china': 'Китай', 'ticker.turkey': 'Турция', 'ticker.armenia': 'Армения', 'ticker.jewelry': 'Украшения', 'ticker.wholesale': 'Опт', 'ticker.retail': 'Розница',
    'directions.kicker': 'Что можно заказать', 'directions.title': 'Четыре направления — один надёжный контакт',
    'directions.intro': 'Выберите нужное направление и получите доступ к актуальным товарам, новинкам и условиям заказа.', 'directions.action': 'Получить подборку', 'directions.popular': 'Популярное направление',
    'directions.china.title': 'Товары из Китая', 'directions.china.text': 'Широкий выбор товаров для дома, бизнеса, красоты и повседневной жизни.', 'directions.china.group': 'WhatsApp-группа Китай',
    'directions.turkey.title': 'Товары из Турции', 'directions.turkey.text': 'Одежда, текстиль и товары для тех, кто ценит качество и актуальный стиль.', 'directions.turkey.group': 'WhatsApp-группа Турция',
    'directions.armenia.title': 'Товары из Армении', 'directions.armenia.text': 'Особенные находки из Еревана для личных покупок и вашего ассортимента.', 'directions.armenia.group': 'WhatsApp-группа Армения',
    'directions.jewelry.title': 'Золото и бриллианты', 'directions.jewelry.text': 'Украшения с натуральными камнями и вниманием к каждой детали.', 'directions.jewelry.group': 'WhatsApp-группа украшения',
    'benefits.kicker': 'Почему со мной удобно', 'benefits.title': 'Покупка без лишней неопределённости',
    'benefits.market.title': 'Доступ к рынкам', 'benefits.market.text': 'Актуальные предложения из разных стран в одном месте.',
    'benefits.choice.title': 'Осознанный выбор', 'benefits.choice.text': 'Помогаю сравнить варианты и подобрать товар под задачу и бюджет.',
    'benefits.trust.title': 'Проверенные контакты', 'benefits.trust.text': 'Работаю с надёжными поставщиками и уточняю детали до оплаты.',
    'benefits.support.title': 'Поддержка на связи', 'benefits.support.text': 'Сопровождаю заказ и отвечаю на вопросы на каждом этапе.',
    'about.kicker': 'Обо мне', 'about.title': 'Ваш человек по ту сторону витрины',
    'about.text': 'Я Зульфия — байер, который превращает поиск товаров за рубежом в понятный и спокойный процесс. Знаю рынки, слежу за трендами и ценю долгосрочное доверие.',
    'about.factOne': '12K+', 'about.factOneLabel': 'человек в сообществе', 'about.factTwo': '4', 'about.factTwoLabel': 'направления закупок',
    'about.factThree': 'B2B / B2C', 'about.factThreeLabel': 'работаю с бизнесом и частными клиентами',
    'process.kicker': 'Простой процесс', 'process.title': 'От запроса до получения — четыре шага',
    'process.steps.request.title': 'Расскажите, что нужно', 'process.steps.request.text': 'Отправьте фото, ссылку, описание или просто идею.',
    'process.steps.selection.title': 'Получите варианты', 'process.steps.selection.text': 'Подберу предложения и уточню важные характеристики.',
    'process.steps.confirm.title': 'Подтвердите заказ', 'process.steps.confirm.text': 'Согласуем стоимость, сроки и детали перед покупкой.',
    'process.steps.delivery.title': 'Получите товар', 'process.steps.delivery.text': 'Остаюсь на связи и сопровождаю заказ до завершения.',
    'social.label': 'Больше жизни и новинок', 'social.title': 'Загляните в Instagram',
    'social.text': 'Обзоры товаров, поездки, новые поступления и честные заметки байера — всё там.', 'social.action': 'Перейти в Instagram',
    'contacts.kicker': 'Начнём с сообщения', 'contacts.title': 'Расскажите, что вы ищете',
    'contacts.text': 'Напишите в WhatsApp — обсудим задачу, бюджет и подходящее направление.', 'contacts.whatsapp': 'Написать в WhatsApp',
    'contacts.instagram': 'Открыть Instagram', 'contacts.phoneLabel': 'Телефон',
    'footer.note': 'Товары из Китая, Турции и Армении', 'footer.rights': 'Все права защищены'
  },
  kk: {
    'a11y.skip': 'Мазмұнға өту',
    'meta.descriptor': 'Байер және әлемдік нарықтардағы жолсерік',
    'nav.directions': 'Бағыттар', 'nav.about': 'Мен туралы', 'nav.process': 'Тапсырыс беру', 'nav.contacts': 'Байланыс', 'nav.write': 'Жазу',
    'hero.badge': 'Сатып алу · тексеру · жеткізу', 'hero.titleBefore': 'Тауарды таңдап,', 'hero.titleAccent': 'жеткіземін',
    'hero.text': 'Қытай, Түркия, Армения және зергерлік бұйымдар — жеке сатып алуға да, бизнеске де, алғанға дейінгі сүйемелдеумен.',
    'hero.primary': 'Тауар таңдау', 'hero.secondary': 'Бағыттарды қарау', 'hero.statFollowers': 'оқырман',
    'hero.statYears': 'жыл тәжірибе', 'hero.statFormats': 'көтерме және бөлшек', 'hero.noteTitle': 'Ойдан жеткізуге дейін',
    'hero.noteText': 'Тауарды таңдап, мәліметтерді тексеріп, тапсырысты алғанға дейін сүйемелдеймін.',
    'hero.proofOne': 'Өзіңізге және бизнеске', 'hero.proofTwo': 'Сатып алар алдында тексеру', 'hero.proofThree': 'Алғанға дейін байланыстамын',
    'ticker.china': 'Қытай', 'ticker.turkey': 'Түркия', 'ticker.armenia': 'Армения', 'ticker.jewelry': 'Әшекейлер', 'ticker.wholesale': 'Көтерме', 'ticker.retail': 'Бөлшек',
    'directions.kicker': 'Не тапсырыс беруге болады', 'directions.title': 'Төрт бағыт — бір сенімді байланыс',
    'directions.intro': 'Қажетті бағытты таңдап, өзекті тауарлар, жаңалықтар мен тапсырыс шарттарына қол жеткізіңіз.', 'directions.action': 'Таңдауды алу', 'directions.popular': 'Танымал бағыт',
    'directions.china.title': 'Қытай тауарлары', 'directions.china.text': 'Үйге, бизнеске, сұлулық пен күнделікті өмірге арналған кең таңдау.', 'directions.china.group': 'Қытай WhatsApp тобы',
    'directions.turkey.title': 'Түркия тауарлары', 'directions.turkey.text': 'Сапа мен заманауи стильді бағалайтындарға арналған киім және тоқыма.', 'directions.turkey.group': 'Түркия WhatsApp тобы',
    'directions.armenia.title': 'Армения тауарлары', 'directions.armenia.text': 'Жеке сатып алуға және ассортиментке арналған Ереванның ерекше тауарлары.', 'directions.armenia.group': 'Армения WhatsApp тобы',
    'directions.jewelry.title': 'Алтын және гауһар', 'directions.jewelry.text': 'Табиғи тастары бар, әр бөлшегіне мән берілген әшекейлер.', 'directions.jewelry.group': 'Әшекейлер WhatsApp тобы',
    'benefits.kicker': 'Неге менімен ыңғайлы', 'benefits.title': 'Артық алаңдаусыз сатып алу',
    'benefits.market.title': 'Нарықтарға қолжетімділік', 'benefits.market.text': 'Әртүрлі елдердің өзекті ұсыныстары бір жерде.',
    'benefits.choice.title': 'Саналы таңдау', 'benefits.choice.text': 'Мақсат пен бюджетке сай тауар табуға көмектесемін.',
    'benefits.trust.title': 'Тексерілген байланыстар', 'benefits.trust.text': 'Сенімді жеткізушілермен жұмыс істеп, төлемге дейін мәліметтерді анықтаймын.',
    'benefits.support.title': 'Әрдайым байланыстамын', 'benefits.support.text': 'Тапсырысты сүйемелдеп, әр кезеңде сұрақтарға жауап беремін.',
    'about.kicker': 'Мен туралы', 'about.title': 'Сөренің ар жағындағы сенімді адамыңыз',
    'about.text': 'Мен Зульфиямын — шетелден тауар іздеуді түсінікті әрі тыныш үдеріске айналдыратын байермін. Нарықты білемін және ұзақ мерзімді сенімді бағалаймын.',
    'about.factOne': '12K+', 'about.factOneLabel': 'қауымдастық мүшесі', 'about.factTwo': '4', 'about.factTwoLabel': 'сатып алу бағыты',
    'about.factThree': 'B2B / B2C', 'about.factThreeLabel': 'бизнес және жеке клиенттермен жұмыс',
    'process.kicker': 'Қарапайым үдеріс', 'process.title': 'Өтінімнен алуға дейін — төрт қадам',
    'process.steps.request.title': 'Не керегін айтыңыз', 'process.steps.request.text': 'Фото, сілтеме, сипаттама немесе идея жіберіңіз.',
    'process.steps.selection.title': 'Нұсқаларды алыңыз', 'process.steps.selection.text': 'Ұсыныстарды таңдап, маңызды сипаттамаларын анықтаймын.',
    'process.steps.confirm.title': 'Тапсырысты растаңыз', 'process.steps.confirm.text': 'Баға, мерзім және барлық мәліметті келісеміз.',
    'process.steps.delivery.title': 'Тауарды алыңыз', 'process.steps.delivery.text': 'Тапсырысты соңына дейін сүйемелдеймін.',
    'social.label': 'Көбірек жаңалық пен өмір', 'social.title': 'Instagram-ға кіріңіз',
    'social.text': 'Тауар шолулары, сапарлар, жаңа түсімдер және байердің шынайы жазбалары — бәрі сонда.', 'social.action': 'Instagram-ға өту',
    'contacts.kicker': 'Хабарламадан бастайық', 'contacts.title': 'Не іздеп жүргеніңізді айтыңыз',
    'contacts.text': 'WhatsApp-қа жазыңыз — міндетті, бюджетті және лайықты бағытты бірге талқылаймыз.', 'contacts.whatsapp': 'WhatsApp-қа жазу',
    'contacts.instagram': 'Instagram ашу', 'contacts.phoneLabel': 'Телефон',
    'footer.note': 'Қытай, Түркия және Армения тауарлары', 'footer.rights': 'Барлық құқықтар қорғалған'
  }
}

const messages = {
  ru: {
    general: 'Здравствуйте! Хочу получить консультацию по заказу товара.',
    groups: 'Здравствуйте! Хочу получить ссылки на актуальные WhatsApp-группы.',
    china: 'Здравствуйте! Хочу получить ссылку на группу с товарами из Китая.',
    turkey: 'Здравствуйте! Хочу получить ссылку на группу с товарами из Турции.',
    armenia: 'Здравствуйте! Хочу получить ссылку на группу с товарами из Армении.',
    jewelry: 'Здравствуйте! Хочу получить ссылку на группу с золотом и натуральными бриллиантами.'
  },
  kk: {
    general: 'Сәлеметсіз бе! Тауарға тапсырыс беру туралы кеңес алғым келеді.',
    groups: 'Сәлеметсіз бе! Өзекті WhatsApp топтарына сілтеме алғым келеді.',
    china: 'Сәлеметсіз бе! Қытай тауарлары тобына сілтеме алғым келеді.',
    turkey: 'Сәлеметсіз бе! Түркия тауарлары тобына сілтеме алғым келеді.',
    armenia: 'Сәлеметсіз бе! Армения тауарлары тобына сілтеме алғым келеді.',
    jewelry: 'Сәлеметсіз бе! Алтын және гауһар тобына сілтеме алғым келеді.'
  }
}

const header = document.querySelector('[data-header]')
const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('#mobile-menu')
let locale = localStorage.getItem('zulfiya-locale') === 'kk' ? 'kk' : 'ru'

function updateWhatsAppLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const key = link.dataset.whatsapp || 'general'
    link.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(messages[locale][key])}`
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  })
}

function setLocale(nextLocale) {
  locale = translations[nextLocale] ? nextLocale : 'ru'
  document.documentElement.lang = locale === 'kk' ? 'kk' : 'ru'
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = translations[locale][element.dataset.i18n]
    if (text) element.textContent = text
  })
  document.querySelectorAll('[data-locale]').forEach((button) => {
    const active = button.dataset.locale === locale
    button.classList.toggle('is-active', active)
    button.setAttribute('aria-pressed', String(active))
  })
  localStorage.setItem('zulfiya-locale', locale)
  updateWhatsAppLinks()
}

function closeMenu() {
  header.classList.remove('menu-is-open')
  document.body.classList.remove('menu-open')
  menuButton.setAttribute('aria-expanded', 'false')
  mobileMenu.setAttribute('aria-hidden', 'true')
}

menuButton.addEventListener('click', () => {
  const open = !header.classList.contains('menu-is-open')
  header.classList.toggle('menu-is-open', open)
  document.body.classList.toggle('menu-open', open)
  menuButton.setAttribute('aria-expanded', String(open))
  mobileMenu.setAttribute('aria-hidden', String(!open))
})

document.querySelectorAll('.mobile-nav a').forEach((link) => link.addEventListener('click', closeMenu))
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu() })
document.querySelectorAll('[data-locale]').forEach((button) => button.addEventListener('click', () => setLocale(button.dataset.locale)))
document.querySelectorAll('a[href*="instagram.com"]').forEach((link) => { link.href = INSTAGRAM })
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear() })

window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 8), { passive: true })

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: .12 })
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
}

setLocale(locale)
