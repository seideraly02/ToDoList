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
    'directions.kicker': 'Что можно заказать', 'directions.title': 'Выберите направление — поиск и выкуп я беру на себя',
    'directions.intro': 'Покажу актуальные предложения, уточню детали у поставщика и помогу оформить заказ.', 'directions.action': 'Получить подборку', 'directions.popular': 'Популярное направление', 'directions.swipe': 'Листайте направления →',
    'directions.china.title': 'Товары из Китая', 'directions.china.text': 'Широкий выбор товаров для дома, бизнеса, красоты и повседневной жизни.', 'directions.china.group': 'WhatsApp-группа Китай',
    'directions.turkey.title': 'Товары из Турции', 'directions.turkey.text': 'Одежда, текстиль и товары для тех, кто ценит качество и актуальный стиль.', 'directions.turkey.group': 'WhatsApp-группа Турция',
    'directions.armenia.title': 'Товары из Армении', 'directions.armenia.text': 'Особенные находки из Еревана для личных покупок и вашего ассортимента.', 'directions.armenia.group': 'WhatsApp-группа Армения',
    'directions.jewelry.title': 'Золото и бриллианты', 'directions.jewelry.text': 'Украшения с натуральными камнями и вниманием к каждой детали.', 'directions.jewelry.group': 'WhatsApp-группа украшения',
    'benefits.kicker': 'Почему со мной удобно', 'benefits.title': 'Спокойный заказ на каждом этапе', 'benefits.swipe': 'Листайте преимущества →',
    'benefits.market.title': 'Доступ к рынкам', 'benefits.market.text': 'Актуальные предложения из разных стран в одном месте.',
    'benefits.choice.title': 'Осознанный выбор', 'benefits.choice.text': 'Помогаю сравнить варианты и подобрать товар под задачу и бюджет.',
    'benefits.trust.title': 'Проверенные контакты', 'benefits.trust.text': 'Работаю с надёжными поставщиками и уточняю детали до оплаты.',
    'benefits.support.title': 'Поддержка на связи', 'benefits.support.text': 'Сопровождаю заказ и отвечаю на вопросы на каждом этапе.',
    'about.kicker': 'Обо мне', 'about.title': 'Личный байер, который остаётся на связи',
    'about.text': 'Я Зульфия — байер, который превращает поиск товаров за рубежом в понятный и спокойный процесс. Знаю рынки, слежу за трендами и ценю долгосрочное доверие.',
    'about.factOne': '12K+', 'about.factOneLabel': 'человек в сообществе', 'about.factTwo': '4', 'about.factTwoLabel': 'направления закупок',
    'about.factThree': 'B2B / B2C', 'about.factThreeLabel': 'работаю с бизнесом и частными клиентами',
    'process.kicker': 'Простой процесс', 'process.title': 'От фотографии товара до получения заказа',
    'process.steps.request.title': 'Расскажите, что нужно', 'process.steps.request.text': 'Отправьте фото, ссылку, описание или просто идею.',
    'process.steps.selection.title': 'Получите варианты', 'process.steps.selection.text': 'Подберу предложения и уточню важные характеристики.',
    'process.steps.confirm.title': 'Подтвердите заказ', 'process.steps.confirm.text': 'Согласуем стоимость, сроки и детали перед покупкой.',
    'process.steps.delivery.title': 'Получите товар', 'process.steps.delivery.text': 'Остаюсь на связи и сопровождаю заказ до завершения.',
    'social.label': 'Больше жизни и новинок', 'social.title': 'Новые подборки — каждый день',
    'social.text': 'Обзоры товаров, поездки, новые поступления и честные заметки байера — всё там.', 'social.action': 'Перейти в Instagram',
    'contacts.kicker': 'Начнём с сообщения', 'contacts.title': 'Пришлите фото или ссылку — начнём поиск',
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
    'directions.kicker': 'Не тапсырыс беруге болады', 'directions.title': 'Бағытты таңдаңыз — іздеу мен сатып алуды өзім атқарамын',
    'directions.intro': 'Өзекті ұсыныстарды көрсетіп, жеткізушіден мәліметтерді анықтап, тапсырысты рәсімдеуге көмектесемін.', 'directions.action': 'Таңдауды алу', 'directions.popular': 'Танымал бағыт', 'directions.swipe': 'Бағыттарды сырғытыңыз →',
    'directions.china.title': 'Қытай тауарлары', 'directions.china.text': 'Үйге, бизнеске, сұлулық пен күнделікті өмірге арналған кең таңдау.', 'directions.china.group': 'Қытай WhatsApp тобы',
    'directions.turkey.title': 'Түркия тауарлары', 'directions.turkey.text': 'Сапа мен заманауи стильді бағалайтындарға арналған киім және тоқыма.', 'directions.turkey.group': 'Түркия WhatsApp тобы',
    'directions.armenia.title': 'Армения тауарлары', 'directions.armenia.text': 'Жеке сатып алуға және ассортиментке арналған Ереванның ерекше тауарлары.', 'directions.armenia.group': 'Армения WhatsApp тобы',
    'directions.jewelry.title': 'Алтын және гауһар', 'directions.jewelry.text': 'Табиғи тастары бар, әр бөлшегіне мән берілген әшекейлер.', 'directions.jewelry.group': 'Әшекейлер WhatsApp тобы',
    'benefits.kicker': 'Неге менімен ыңғайлы', 'benefits.title': 'Әр кезеңде тыныш әрі түсінікті тапсырыс', 'benefits.swipe': 'Артықшылықтарды сырғытыңыз →',
    'benefits.market.title': 'Нарықтарға қолжетімділік', 'benefits.market.text': 'Әртүрлі елдердің өзекті ұсыныстары бір жерде.',
    'benefits.choice.title': 'Саналы таңдау', 'benefits.choice.text': 'Мақсат пен бюджетке сай тауар табуға көмектесемін.',
    'benefits.trust.title': 'Тексерілген байланыстар', 'benefits.trust.text': 'Сенімді жеткізушілермен жұмыс істеп, төлемге дейін мәліметтерді анықтаймын.',
    'benefits.support.title': 'Әрдайым байланыстамын', 'benefits.support.text': 'Тапсырысты сүйемелдеп, әр кезеңде сұрақтарға жауап беремін.',
    'about.kicker': 'Мен туралы', 'about.title': 'Әрдайым байланыста болатын жеке байеріңіз',
    'about.text': 'Мен Зульфиямын — шетелден тауар іздеуді түсінікті әрі тыныш үдеріске айналдыратын байермін. Нарықты білемін және ұзақ мерзімді сенімді бағалаймын.',
    'about.factOne': '12K+', 'about.factOneLabel': 'қауымдастық мүшесі', 'about.factTwo': '4', 'about.factTwoLabel': 'сатып алу бағыты',
    'about.factThree': 'B2B / B2C', 'about.factThreeLabel': 'бизнес және жеке клиенттермен жұмыс',
    'process.kicker': 'Қарапайым үдеріс', 'process.title': 'Тауар фотосынан тапсырысты алғанға дейін',
    'process.steps.request.title': 'Не керегін айтыңыз', 'process.steps.request.text': 'Фото, сілтеме, сипаттама немесе идея жіберіңіз.',
    'process.steps.selection.title': 'Нұсқаларды алыңыз', 'process.steps.selection.text': 'Ұсыныстарды таңдап, маңызды сипаттамаларын анықтаймын.',
    'process.steps.confirm.title': 'Тапсырысты растаңыз', 'process.steps.confirm.text': 'Баға, мерзім және барлық мәліметті келісеміз.',
    'process.steps.delivery.title': 'Тауарды алыңыз', 'process.steps.delivery.text': 'Тапсырысты соңына дейін сүйемелдеймін.',
    'social.label': 'Көбірек жаңалық пен өмір', 'social.title': 'Күн сайын жаңа таңдаулар',
    'social.text': 'Тауар шолулары, сапарлар, жаңа түсімдер және байердің шынайы жазбалары — бәрі сонда.', 'social.action': 'Instagram-ға өту',
    'contacts.kicker': 'Хабарламадан бастайық', 'contacts.title': 'Фото немесе сілтеме жіберіңіз — іздеуді бастайық',
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
const hero = document.querySelector('.hero')
const heroArt = document.querySelector('.hero-art')
const progressBar = document.querySelector('.scroll-progress span')
const floatingWhatsApp = document.querySelector('.floating-whatsapp')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const supportsPrecisePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
const lowEndDevice =
  (navigator.deviceMemory !== undefined && navigator.deviceMemory <= 2) ||
  (navigator.deviceMemory === undefined && navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4)
const richMotion = !reducedMotion && !lowEndDevice
let locale = localStorage.getItem('zulfiya-locale') === 'kk' ? 'kk' : 'ru'

if (lowEndDevice) document.documentElement.classList.add('motion-lite')

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
  updateCarouselLabels()
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

let scrollFrame = 0

function updateScrollEffects() {
  const scrollTop = window.scrollY
  const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
  header.classList.toggle('is-scrolled', scrollTop > 8)
  progressBar.style.transform = `scaleX(${Math.min(scrollTop / scrollRange, 1)})`
  if (floatingWhatsApp && hero) {
    floatingWhatsApp.classList.toggle('is-shown', scrollTop > hero.offsetTop + hero.offsetHeight * 0.62)
  }

  if (richMotion && heroArt) {
    const offset = Math.min(scrollTop * 0.035, 24)
    heroArt.style.setProperty('--hero-scroll', `${offset}px`)
    heroArt.style.setProperty('--delivery-scroll', `${offset * -0.42}px`)
  }

  scrollFrame = 0
}

window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects)
}, { passive: true })

updateScrollEffects()

if (richMotion && supportsPrecisePointer && hero && heroArt) {
  let pointerFrame = 0
  let pointerEvent

  hero.addEventListener('pointermove', (event) => {
    pointerEvent = event
    if (pointerFrame) return

    pointerFrame = window.requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect()
      const x = (pointerEvent.clientX - rect.left) / rect.width - 0.5
      const y = (pointerEvent.clientY - rect.top) / rect.height - 0.5
      heroArt.style.setProperty('--market-x', `${x * 11}px`)
      heroArt.style.setProperty('--market-y', `${y * 8}px`)
      heroArt.style.setProperty('--delivery-x', `${x * -8}px`)
      heroArt.style.setProperty('--delivery-y', `${y * -6}px`)
      pointerFrame = 0
    })
  })

  hero.addEventListener('pointerleave', () => {
    heroArt.style.setProperty('--market-x', '0px')
    heroArt.style.setProperty('--market-y', '0px')
    heroArt.style.setProperty('--delivery-x', '0px')
    heroArt.style.setProperty('--delivery-y', '0px')
  })

  document.querySelectorAll('.direction-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      card.style.setProperty('--card-rx', `${(0.5 - y) * 3.5}deg`)
      card.style.setProperty('--card-ry', `${(x - 0.5) * 4.5}deg`)
      card.style.setProperty('--glare-x', `${x * 100}%`)
      card.style.setProperty('--glare-y', `${y * 100}%`)
    })

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--card-rx', '0deg')
      card.style.setProperty('--card-ry', '0deg')
      card.style.setProperty('--glare-x', '50%')
      card.style.setProperty('--glare-y', '50%')
    })
  })
}

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

function animateCounter(element) {
  if (element.dataset.counted === 'true') return
  element.dataset.counted = 'true'

  const target = Number(element.dataset.count)
  const suffix = element.dataset.suffix || ''

  if (!richMotion) {
    element.textContent = `${target}${suffix}`
    return
  }

  const duration = 900
  const startedAt = performance.now()

  function tick(now) {
    const progress = Math.min((now - startedAt) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    element.textContent = `${Math.round(target * eased)}${suffix}`
    if (progress < 1) window.requestAnimationFrame(tick)
  }

  window.requestAnimationFrame(tick)
}

const counters = document.querySelectorAll('[data-count]')
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      animateCounter(entry.target)
      counterObserver.unobserve(entry.target)
    })
  }, { threshold: 0.7 })

  counters.forEach((counter) => counterObserver.observe(counter))
} else {
  counters.forEach(animateCounter)
}

const carouselStates = new Map()
const mobileCarouselQuery = window.matchMedia('(max-width: 600px)')

function updateCarouselLabels() {
  carouselStates.forEach((state) => {
    const paused = state.userPaused
    state.button.classList.toggle('is-paused', paused)
    state.button.setAttribute('aria-pressed', String(paused))
    state.button.setAttribute(
      'aria-label',
      locale === 'kk'
        ? (paused ? 'Автоматты айналдыруды бастау' : 'Автоматты айналдыруды тоқтату')
        : (paused ? 'Запустить автопрокрутку' : 'Приостановить автопрокрутку'),
    )
  })
}

function createCarouselClone(element) {
  const clone = element.cloneNode(true)
  clone.classList.add('carousel-clone')
  clone.classList.remove('reveal', 'reveal-delay', 'reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'is-visible')
  clone.setAttribute('aria-hidden', 'true')
  clone.removeAttribute('id')
  clone.querySelectorAll('[id]').forEach((item) => item.removeAttribute('id'))
  clone.querySelectorAll('a, button, [tabindex]').forEach((item) => item.setAttribute('tabindex', '-1'))
  return clone
}

function initInfiniteCarousel(scroller) {
  if (carouselStates.has(scroller) || scroller.children.length < 2) return

  const originals = Array.from(scroller.children)
  const before = originals.map(createCarouselClone)
  const after = originals.map(createCarouselClone)
  scroller.prepend(...before)
  scroller.append(...after)
  scroller.classList.add('is-infinite')

  const button = document.querySelector(`[data-carousel-toggle="${scroller.id}"]`)
  const state = {
    button,
    originals,
    clones: [...before, ...after],
    autoplayTimer: 0,
    normalizeTimer: 0,
    interacting: false,
    userPaused: reducedMotion,
    cycleStart: 0,
    cycleWidth: 0,
  }

  function normalize() {
    if (!state.cycleWidth) return
    if (scroller.scrollLeft >= state.cycleStart + state.cycleWidth) scroller.scrollLeft -= state.cycleWidth
    if (scroller.scrollLeft < state.cycleStart) scroller.scrollLeft += state.cycleWidth
  }

  function queueAutoplay(delay = 2600) {
    window.clearTimeout(state.autoplayTimer)
    state.autoplayTimer = window.setTimeout(() => {
      if (!state.userPaused && !state.interacting && !document.hidden) {
        normalize()
        const cards = Array.from(scroller.children)
        const currentIndex = cards.reduce((closest, card, index) => (
          Math.abs(card.offsetLeft - scroller.scrollLeft) < Math.abs(cards[closest].offsetLeft - scroller.scrollLeft)
            ? index
            : closest
        ), 0)
        const nextCard = cards[currentIndex + 1] || originals[0]
        scroller.scrollTo({ left: nextCard.offsetLeft, behavior: 'smooth' })
      }
      queueAutoplay()
    }, delay)
  }

  state.onScroll = () => {
    window.clearTimeout(state.normalizeTimer)
    state.normalizeTimer = window.setTimeout(normalize, 180)
  }
  state.onPointerDown = () => {
    state.interacting = true
    window.clearTimeout(state.autoplayTimer)
  }
  state.onPointerUp = () => {
    state.interacting = false
    queueAutoplay(1800)
  }
  state.onFocusIn = () => queueAutoplay(3000)
  state.onToggle = () => {
    state.userPaused = !state.userPaused
    if (state.userPaused) window.clearTimeout(state.autoplayTimer)
    else queueAutoplay(300)
    updateCarouselLabels()
  }

  scroller.addEventListener('scroll', state.onScroll, { passive: true })
  scroller.addEventListener('pointerdown', state.onPointerDown, { passive: true })
  window.addEventListener('pointerup', state.onPointerUp, { passive: true })
  scroller.addEventListener('focusin', state.onFocusIn)
  button.addEventListener('click', state.onToggle)
  carouselStates.set(scroller, state)

  state.cycleStart = originals[0].offsetLeft
  state.cycleWidth = after[0].offsetLeft - state.cycleStart
  scroller.scrollLeft = state.cycleStart
  queueAutoplay(900)
  updateCarouselLabels()
}

function destroyInfiniteCarousel(scroller) {
  const state = carouselStates.get(scroller)
  if (!state) return
  window.clearTimeout(state.autoplayTimer)
  window.clearTimeout(state.normalizeTimer)
  scroller.removeEventListener('scroll', state.onScroll)
  scroller.removeEventListener('pointerdown', state.onPointerDown)
  window.removeEventListener('pointerup', state.onPointerUp)
  scroller.removeEventListener('focusin', state.onFocusIn)
  state.button.removeEventListener('click', state.onToggle)
  state.clones.forEach((clone) => clone.remove())
  scroller.classList.remove('is-infinite')
  scroller.scrollLeft = 0
  carouselStates.delete(scroller)
}

function syncInfiniteCarousels() {
  document.querySelectorAll('#directions-carousel, #benefits-carousel').forEach((scroller) => {
    if (mobileCarouselQuery.matches) initInfiniteCarousel(scroller)
    else destroyInfiniteCarousel(scroller)
  })
}

if (mobileCarouselQuery.addEventListener) mobileCarouselQuery.addEventListener('change', syncInfiniteCarousels)
else mobileCarouselQuery.addListener(syncInfiniteCarousels)

syncInfiniteCarousels()

setLocale(locale)
window.requestAnimationFrame(() => document.body.classList.add('is-loaded'))
