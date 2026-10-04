import { useNav } from '../context/NavContext';

const tours = [
  { id: 1, title: '7 дней в самом сердце Сахалина', price: '55 000', duration: '7 дней', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop', desc: 'Насыщенная программа по главным достопримечательностям Сахалина.' },
  { id: 2, title: 'Итуруп: раскрываем тайны Курильских островов', price: '90 000', duration: '5 дней', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=500&fit=crop', desc: 'Путешествие на второй по величине остров Курильской гряды.' },
  { id: 3, title: 'Большой тур по Сахалину. 10 дней 9 ночей', price: '90 000', duration: '10 дней', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop', desc: 'Максимально полное погружение в природу и культуру Сахалина.' },
  { id: 4, title: 'Пятидневный тур по Сахалину', price: '88 900', duration: '5 дней', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=500&fit=crop', desc: 'Федеральный национальный маршрут Дальнего Востока.' },
  { id: 5, title: 'Тур на Кунашир – незабываемое путешествие', price: '105 000', duration: '6 дней', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=500&fit=crop', desc: 'Самый южный остров России. Вулканы и водопады.' },
  { id: 6, title: 'Тур на Сахалин и Итуруп – путешествие по двум островам', price: '160 000', duration: '10 дней', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop', desc: 'Два острова — целая вселенная впечатлений.' },
];

export default function ToursPage() {
  const { navigate } = useNav();
  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Путешествия</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>
            Туры по <span className="bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent">Сахалину</span> и Курилам
          </h1>
          <p className="text-lg text-[#f5f0e8]/60 max-w-xl">Многодневные путешествия с полным сопровождением</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {tours.map((tour) => (
              <div key={tour.id} className="group transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c8a45c]/10">
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img src={tour.img} alt={tour.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-[#1a3a2a]/50 backdrop-blur-xl px-3 py-1.5">
                    <span className="text-xs text-[#c8a45c]" style={{fontFamily: 'Unbounded, sans-serif'}}>{tour.duration}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block bg-[#c8a45c] text-[#0d1b14] px-3 py-1 text-sm font-bold mb-3" style={{fontFamily: 'Unbounded, sans-serif'}}>от {tour.price} ₽</span>
                    <h3 className="text-xl font-semibold text-[#f5f0e8] leading-snug" style={{fontFamily: 'Unbounded, sans-serif'}}>{tour.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#f5f0e8]/60 leading-relaxed mb-4">{tour.desc}</p>
                <div className="flex items-center gap-4">
                  <button onClick={() => navigate('contacts')} className="bg-gradient-to-r from-[#c8a45c] to-[#a8843c] text-[#0d1b14] font-semibold px-6 py-2.5 text-sm tracking-wide hover:shadow-lg hover:shadow-[#c8a45c]/20 transition-all hover:-translate-y-0.5">Забронировать</button>
                  <span className="text-sm text-[#c8a45c] hover:underline cursor-pointer">Подробнее →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/15 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{fontFamily: 'Unbounded, sans-serif'}}>Что включено в <span className="bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent">тур?</span></h2>
                <ul className="space-y-4">
                  {['Проживание в комфортных условиях', 'Трансферы по маршруту', 'Услуги профессионального гида', 'Питание', 'Входные билеты', 'Снаряжение и экипировка', 'Страховка'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center border border-[#c8a45c]/40">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span className="text-sm text-[#f5f0e8]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/15 rounded-2xl p-8">
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent block mb-2" style={{fontFamily: 'Unbounded, sans-serif'}}>6</span>
                  <span className="text-sm text-[#f5f0e8]/60 block mb-6">уникальных туров</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent block mb-2" style={{fontFamily: 'Unbounded, sans-serif'}}>244+</span>
                  <span className="text-sm text-[#f5f0e8]/60 block mb-6">довольных гостей</span>
                  <button onClick={() => navigate('contacts')} className="mt-4 bg-gradient-to-r from-[#c8a45c] to-[#a8843c] text-[#0d1b14] font-semibold px-8 py-3 tracking-wide hover:shadow-lg hover:shadow-[#c8a45c]/20 transition-all">Связаться с нами</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
