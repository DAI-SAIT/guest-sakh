import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const excursions = [
  { id: 1, title: 'Мыс Евстафия и Голубые озера', price: '12 000', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop' },
  { id: 2, title: 'Гастрономическая экскурсия на Озеро Буссе', price: '9 000', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop' },
  { id: 3, title: 'Мыс Великан – памятник природы', price: '9 000', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop' },
  { id: 4, title: 'Морская экскурсия на маяк Анива', price: '8 000', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
];

const tours = [
  { id: 1, title: 'Тур на Сахалин и Итуруп – путешествие по двум островам', price: '160 000', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop' },
  { id: 2, title: 'Тур на Кунашир – незабываемое путешествие', price: '105 000', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop' },
  { id: 3, title: 'Итуруп: раскрываем тайны Курильских островов', price: '90 000', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop' },
  { id: 4, title: '7 дней в самом сердце Сахалина', price: '55 000', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop' },
];

const reviews = [
  { name: 'Вячеслав Д.', date: '10 августа 2026', text: 'Хочу поблагодарить компанию "Гостеприимный Сахалин" за отличную организацию тура на озеро Буссе. Очень порадовал уровень сервиса: комфортный трансфер, всё снаряжение предоставили, гиды очень внимательные и знающие.', source: 'Яндекс Карты' },
  { name: 'Дмитрий О.', date: '9 августа 2026', text: 'Шикарный сервис! Драйв! Очень вкусный обед и в целом круто! Информативно и познавательно! Спасибо, Владиславу, Гузэль, Александр, Ярославу и всей команде!', source: '2GIS' },
  { name: 'Анна Ш.', date: '6 августа 2026', text: 'Это лучшие ребята, езжу с ними уже не первый год ✨все на высшем уровне! Рекомендую 👆🏻🌊⛰️', source: '2GIS' },
  { name: 'Виктория Е.', date: '13 сентября 2026', text: 'Поистине Гостеприимный Сахалин! Покупала тур Яркое лето на Сахалине 6 дней. Получили зашкаливающие положительные эмоции, впечатления и желание вернуться!', source: '2GIS' },
  { name: 'Наталья С.', date: '3 сентября 2026', text: 'Спасибо огромное всей команде «Гостеприимный Сахалин» и лично генеральному директору Максиму Николаевичу за идеально проведенные экскурсии. Ощущение, что мы были в гостях у родственников.', source: 'Яндекс Карты' },
  { name: 'Елена М.', date: '2 сентября 2026', text: 'Ездили на гастро-экскурсию в лагуну Буссе. Очень понравилось. Ксения интересно и подробно рассказывала про историю острова. Обед был вкусный, программа насыщенная.', source: '2GIS' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isInView };
}

export default function HomePage() {
  const heroRef = useInView();
  const awardRef = useInView();
  const excursionsRef = useInView();
  const toursRef = useInView();
  const whyRef = useInView();
  const advantagesRef = useInView();
  const reviewsRef = useInView();

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
            alt="Сахалин — край вулканов и океана"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b14]/90 via-[#0d1b14]/60 to-[#0d1b14]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div ref={heroRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-1000 ${heroRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#c8a45c]" />
              <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Туроператор Сахалинской области</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-[#f5f0e8]">Паспорт путешественника</span>
              <br />
              <span className="text-[#f5f0e8]">ждёт новой</span>{' '}
              <span className="gradient-text">печати.</span>
            </h1>

            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-black gradient-text">Сахалин</span>
            </div>

            <p className="text-lg sm:text-xl text-[#f5f0e8]/70 font-light mb-2 max-w-xl">
              Здесь начинается день
            </p>
            <p className="text-base text-[#f5f0e8]/50 mb-10 max-w-lg">
              Заброшенные маяки, дикие тропы, места силы. Покажем то, о чём вы только слышали.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/tours" className="btn-primary inline-block">
                Оформить заявку
              </Link>
              <Link to="/excursions" className="btn-outline inline-block">
                Смотреть экскурсии
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-[10px] tracking-[0.3em] text-[#c8a45c]/60 uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#c8a45c]/60 to-transparent" />
        </div>
      </section>

      {/* ===== AWARD SECTION ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b14] via-[#1a3a2a]/20 to-[#0d1b14]" />
        <div ref={awardRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${awardRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Trophy icon */}
            <div className="w-24 h-24 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8a45c]/20 to-transparent rounded-full animate-pulse-glow" />
              <div className="relative w-full h-full flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase font-display block mb-3">Достижение</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#f5f0e8] mb-3">
                Лучший туроператор Сахалинской области 2023 года
              </h2>
              <p className="text-[#f5f0e8]/60 text-sm max-w-lg">
                По версии Министерства экономики Сахалинской области. Мы гордимся доверием наших гостей и продолжаем развивать туризм на высшем уровне.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXCURSIONS SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1b14]" />
        <div ref={excursionsRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${excursionsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="section-divider" />
                <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Откройте для себя</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Самые колоритные<br />
                <span className="gradient-text">экскурсии</span>
              </h2>
            </div>
            <Link to="/excursions" className="btn-outline inline-block text-sm">
              Все экскурсии →
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {excursions.map((item, idx) => (
              <div key={item.id} className="group card-hover" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="relative overflow-hidden aspect-square mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[#c8a45c] font-display text-lg font-bold">{item.price} ₽</span>
                  </div>
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-[#c8a45c] transition-all duration-500 group-hover:w-full" />
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-[#c8a45c] transition-all duration-500 group-hover:h-full" />
                  </div>
                </div>
                <h3 className="font-display text-sm font-medium text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOURS SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b14] via-[#1a3a2a]/10 to-[#0d1b14]" />
        <div ref={toursRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${toursRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="section-divider" />
                <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Погружение</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Самые потрясающие<br />
                <span className="gradient-text">туры</span>
              </h2>
            </div>
            <Link to="/tours" className="btn-outline inline-block text-sm">
              Все туры →
            </Link>
          </div>

          {/* Cards grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((item, idx) => (
              <div key={item.id} className="group card-hover" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="relative overflow-hidden aspect-[16/10] mb-5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-[#c8a45c] text-[#0d1b14] px-3 py-1 text-xs font-display font-bold mb-3">
                      {item.price} ₽
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#f5f0e8] leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1b14]" />
        <div ref={whyRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${whyRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
                  alt="Команда Гостеприимный Сахалин"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14]/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 md:right-8 glass rounded-xl p-6 max-w-[200px]">
                <span className="font-display text-3xl font-bold gradient-text block">244+</span>
                <span className="text-xs text-[#f5f0e8]/60">довольных отзывов от наших гостей</span>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="section-divider" />
                <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Наши ценности</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
                Почему выбирают<br /><span className="gradient-text">нас?</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: '⚡', text: 'Оперативность подбора туров и экскурсий' },
                  { icon: '💳', text: 'Удобные способы оплаты, гибкая система скидок' },
                  { icon: '🏔', text: 'Проверенные гиды, экскурсоводы знают историю, традиции и особенности маршрутов Сахалинской области' },
                  { icon: '🌍', text: 'Организация Вашего отдыха круглый год. Большой выбор туров и экскурсий.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c]/60 transition-colors">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <p className="text-[#f5f0e8]/80 text-sm leading-relaxed pt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b14] via-[#1a3a2a]/10 to-[#0d1b14]" />
        <div ref={advantagesRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${advantagesRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#c8a45c]/50" />
              <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Преимущества</span>
              <div className="w-12 h-[1px] bg-[#c8a45c]/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Наши <span className="gradient-text">преимущества</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Доступные цены', desc: 'Честная стоимость без скрытых платежей' },
              { icon: '🏆', title: 'Опыт и профессионализм', desc: 'Лучший туроператор области 2023 года' },
              { icon: '🛡', title: 'Надёжность и гарантии', desc: 'Официальный туроператор с лицензией' },
              { icon: '🚀', title: 'Оперативность', desc: 'Быстрое решение ваших вопросов' },
              { icon: '⭐', title: 'Качественный сервис', desc: 'Внимание к каждой детали вашего отдыха' },
              { icon: '🤝', title: 'Индивидуальный подход', desc: 'К каждому гостю — персональное внимание' },
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-xl p-8 card-hover text-center group">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[#f5f0e8] mb-2">{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1b14]" />
        <div ref={reviewsRef.ref} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${reviewsRef.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="section-divider" />
                <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Что говорят гости</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
                Отзывы о <span className="gradient-text">нас</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="font-display text-4xl font-bold gradient-text">5.0</span>
                <span className="block text-xs text-[#f5f0e8]/50">из 5</span>
              </div>
              <div className="h-12 w-[1px] bg-[#c8a45c]/20" />
              <div className="text-center">
                <span className="font-display text-2xl font-bold text-[#f5f0e8]">244</span>
                <span className="block text-xs text-[#f5f0e8]/50">оценок</span>
              </div>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8a45c] to-[#a8843c] flex items-center justify-center">
                    <span className="text-[#0d1b14] font-bold text-sm">{review.name[0]}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#f5f0e8] block">{review.name}</span>
                    <span className="text-xs text-[#f5f0e8]/40">{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c8a45c">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed mb-4">{review.text}</p>
                <span className="text-xs text-[#c8a45c]/60">Отзыв {review.source}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews" className="btn-outline inline-block">
              Все отзывы →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0d1b14]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готовы к <span className="gradient-text">приключению?</span>
          </h2>
          <p className="text-lg text-[#f5f0e8]/60 mb-10 max-w-2xl mx-auto">
            Забронируйте тур или экскурсию прямо сейчас и откройте для себя удивительный мир Сахалина и Курильских островов.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/tours" className="btn-primary inline-block">
              Забронировать тур
            </Link>
            <a href="tel:+79004885555" className="btn-outline inline-block">
              +7 (900) 488-55-55
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
