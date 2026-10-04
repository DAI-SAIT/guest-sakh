import { useState } from 'react';

const allReviews = [
  { name: 'Вячеслав Д.', date: '10 августа 2026', text: 'Хочу поблагодарить компанию "Гостеприимный Сахалин" за отличную организацию тура на озеро Буссе. Очень порадовал уровень сервиса: комфортный трансфер, всё снаряжение предоставили, гиды очень внимательные и знающие. Сама поездка прошла легко, без спешки, с большим вниманием к деталям. Устрицы, морские ежи, гребешки — всё было очень вкусно и в неограниченном количестве. Видно, что ребята любят свое дело и остров. Однозначно рекомендую, если хотите качественный отдых без лишних хлопот.', source: 'Яндекс Карты', rating: 5 },
  { name: 'Дмитрий О.', date: '9 августа 2026', text: 'Шикарный сервис! Драйв! Очень вкусный обед и в целом круто! Информативно и познавательно! Спасибо, Владиславу, Гузэль, Александр, Ярославу и всей команде!', source: '2GIS', rating: 5 },
  { name: 'Анна Ш.', date: '6 августа 2026', text: 'Это лучшие ребята, езжу с ними уже не первый год ✨все на высшем уровне! Рекомендую 👆🏻🌊⛰️', source: '2GIS', rating: 5 },
  { name: 'Екатерина Г.', date: '30 сентября 2026', text: 'Спасибо большое за прекрасную экскурсию на озеро Буссе. Всё отлично организовано. Отдельно хочу отметить экскурсовода Ксению, ее бесконечные интересные рассказы про остров и про всё всё всё. Ребята молодцы!', source: '2GIS', rating: 5 },
  { name: 'Виктория Е.', date: '13 сентября 2026', text: 'Поистине Гостеприимный Сахалин! Покупала тур Яркое лето на Сахалине 6 дней без особых ожиданий, очень сильно боялась экскурсию по морю к м. Анива, а по прилёту получили просто зашкаливающие положительные эмоции, впечатления и желание вернуться за «добавкой»! В окружении великолепных ГИДОВ Ксении и Виталия, хочется узнать и увидеть как можно больше. Люди действительно любят свою работу, очень уважают и ценят историю острова.', source: '2GIS', rating: 5 },
  { name: 'Городской ж.', date: '11 сентября 2026', text: 'С командой "Гостеприимного Сахалина" мы ездили на 3 экскурсии: мысы Птичий и Великан, мыс Анива и озеро Буссе, Голубые озера и мыс Евстафия. Первые две экскурсии нас сопровождала обаятельная и суперпрофессиональная гид Ксения! Увлекательнейшая информация об истории Сахалина, ее коренных народов, морских обитателях акватории Тихого океана — все это от Ксении! Слушать — не переслушать!', source: '2GIS', rating: 5 },
  { name: 'Natalie S', date: '5 сентября 2026', text: 'Сегодня съездили на мыс Птичий (Великан) с "Гостеприимным Сахалином" и это моя 3-я экскурсии с ними (и не последняя). Благодарю за четко организованную поездку, интересные рассказы гида Ксении, вкусный обед и потрясающие виды на эту природную достопримечательность!', source: '2GIS', rating: 5 },
  { name: 'Татьяна К.', date: '5 сентября 2026', text: 'Гостеприимный Сахалин - 100%, как город с его людьми, так и турфирма с этим названием. Организация всех экскурсий — четкие, слаженные, безопасные, очень интересные и познавательные. Благодаря супер гиду — Ксении (профессионал своего дела 100%), Владислав и его команда на "Буссе"! — вы сделали мой отпуск! Море эмоций, море впечатлений и море морепродуктов!', source: '2GIS', rating: 5 },
  { name: 'Наталья С.', date: '3 сентября 2026', text: 'Снится Сахалин. Уже прошло несколько дней после возвращения, но мысли постоянно там, на прекрасном Сахалине! Спасибо огромное всей команде «Гостеприимный Сахалин» и лично генеральному директору Максиму Николаевичу за идеально проведенные экскурсии, за внимательность к каждому из нас. Ощущение, что мы были в гостях у родственников. Спасибо за всё и мы обязательно вернёмся!', source: 'Яндекс Карты', rating: 5 },
  { name: 'Елена М.', date: '2 сентября 2026', text: 'Ездили с подругой на гастро-экскурсию в лагуну Буссе. Очень понравилось. Ребята из турагентства классные. Ксения интересно и подробно рассказывала про историю острова, коренного населения, об устрицах и других морских гадах. Обед был вкусный, программа насыщенная.', source: '2GIS', rating: 5 },
  { name: 'Наталия Л.', date: '20 августа 2026', text: 'Прекрасно организованные экскурсии. Внимательные и заботливые сотрудники. Продуманные маршруты. Вкусные и разнообразные обеды. Спасибо за все.', source: 'Яндекс Карты', rating: 5 },
  { name: 'Диляра Ф.', date: '17 августа 2026', text: 'Вчера с семьёй были в гастрономическом туре на озеро Буссе. Прекрасная организация мероприятия, отличная команда профессионалов своего дела, которые любят Сахалин, говорят о бережном использовании биологических ресурсов. Уникальная природа, прозрачность воды, многообразие обитателей озера поражает.', source: '2GIS', rating: 5 },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState<'all' | 'yandex' | '2gis'>('all');

  const filtered = filter === 'all'
    ? allReviews
    : allReviews.filter(r => filter === 'yandex' ? r.source === 'Яндекс Карты' : r.source === '2GIS');

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Мнения гостей</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Отзывы</span>
          </h1>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-12 border-b border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {/* Overall */}
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c8a45c">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-display text-4xl font-bold gradient-text">5.0</span>
              <span className="block text-sm text-[#f5f0e8]/50 mt-1">Общая оценка</span>
            </div>

            <div className="h-16 w-[1px] bg-[#c8a45c]/20 hidden md:block" />

            {/* Yandex */}
            <div className="text-center">
              <span className="font-display text-3xl font-bold text-[#f5f0e8]">4.9</span>
              <span className="block text-sm text-[#f5f0e8]/50 mt-1">Яндекс Карты</span>
            </div>

            <div className="h-16 w-[1px] bg-[#c8a45c]/20 hidden md:block" />

            {/* 2GIS */}
            <div className="text-center">
              <span className="font-display text-3xl font-bold text-[#f5f0e8]">5.0</span>
              <span className="block text-sm text-[#f5f0e8]/50 mt-1">2GIS</span>
            </div>

            <div className="h-16 w-[1px] bg-[#c8a45c]/20 hidden md:block" />

            {/* Total */}
            <div className="text-center">
              <span className="font-display text-3xl font-bold gradient-text">244</span>
              <span className="block text-sm text-[#f5f0e8]/50 mt-1">Всего оценок</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 text-sm font-medium transition-all ${filter === 'all' ? 'bg-[#c8a45c] text-[#0d1b14]' : 'border border-[#c8a45c]/20 text-[#f5f0e8]/70 hover:border-[#c8a45c]/60'}`}
            >
              Все отзывы
            </button>
            <button
              onClick={() => setFilter('yandex')}
              className={`px-5 py-2.5 text-sm font-medium transition-all ${filter === 'yandex' ? 'bg-[#c8a45c] text-[#0d1b14]' : 'border border-[#c8a45c]/20 text-[#f5f0e8]/70 hover:border-[#c8a45c]/60'}`}
            >
              Яндекс Карты
            </button>
            <button
              onClick={() => setFilter('2gis')}
              className={`px-5 py-2.5 text-sm font-medium transition-all ${filter === '2gis' ? 'bg-[#c8a45c] text-[#0d1b14]' : 'border border-[#c8a45c]/20 text-[#f5f0e8]/70 hover:border-[#c8a45c]/60'}`}
            >
              2GIS
            </button>
          </div>
        </div>
      </section>

      {/* Reviews list */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8a45c] to-[#a8843c] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0d1b14] font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#f5f0e8] block">{review.name}</span>
                    <span className="text-xs text-[#f5f0e8]/40">{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c8a45c">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#c8a45c]/60">Отзыв {review.source}</span>
                  <span className="text-xs text-[#f5f0e8]/30">👍 Полезно</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#c8a45c]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-[#f5f0e8]/60 mb-8">Присоединяйтесь к нашим гостям и откройте для себя удивительный Сахалин</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://yandex.ru/maps/org/gostepriimny_sakhalin/212415164033/reviews/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Оставить отзыв на Яндекс
            </a>
            <a href="https://2gis.ru/yuzhnosakhalinsk/firm/70000001076933263/tab/reviews" target="_blank" rel="noopener noreferrer" className="btn-outline inline-block">
              Оставить отзыв в 2GIS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
