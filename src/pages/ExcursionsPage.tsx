import { useState } from 'react';
import { useNav } from '../context/NavContext';

const categories = [
  { id: 'all', label: 'Все', count: 23 },
  { id: 'summer', label: 'Летние', count: 15 },
  { id: 'auto', label: 'Автомобильные', count: 8 },
  { id: 'sea', label: 'Морские', count: 5 },
  { id: 'fishing', label: 'Рыбалка', count: 3 },
  { id: 'winter', label: 'Зимние', count: 2 },
];

const excursions = [
  { id: 1, title: 'Морская экскурсия на маяк Анива', price: '8 000', cat: 'sea', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', desc: 'Морская прогулка к легендарному маяку' },
  { id: 2, title: 'Мыс Великан – памятник природы', price: '9 000', cat: 'auto', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', desc: 'Легендарный мыс Птичий с видами Тихого океана' },
  { id: 3, title: 'Гастрономическая экскурсия на Озеро Буссе', price: '9 000', cat: 'summer', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop', desc: 'Сбор устриц и гастрономический обед' },
  { id: 4, title: 'Ворота Тории – Клоковский водопад – Бухта Тихая', price: '9 000', cat: 'auto', img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop', desc: 'Три сахалинских чуда за один день' },
  { id: 5, title: 'Мыс Слепиковского. Чёртов мост', price: '9 000', cat: 'auto', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop', desc: 'Уникальные скальные formations' },
  { id: 6, title: 'Мыс Евстафия и Голубые озера', price: '12 000', cat: 'auto', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', desc: 'Величественные скалы и горные озёра' },
  { id: 7, title: 'Маяк Анива + Озеро Буссе', price: '15 000', cat: 'sea', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop', desc: 'Комбинированная экскурсия' },
  { id: 8, title: 'Мыс Крильон с ночёвкой в палатках', price: '22 000', cat: 'summer', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop', desc: 'Двухдневное приключение на краю земли' },
  { id: 9, title: 'Мыс Виндис. Гора Коврижка', price: '12 000', cat: 'auto', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop', desc: 'Панорамные виды на Охотское море' },
  { id: 10, title: 'Рыбалка на горных реках Сахалина', price: '8 500', cat: 'fishing', img: 'https://images.unsplash.com/photo-1500463959177-e0869687df26?w=600&h=400&fit=crop', desc: 'Лосось, кунджа, голец' },
  { id: 11, title: 'Зимняя экскурсия на снегоходах', price: '7 000', cat: 'winter', img: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&h=400&fit=crop', desc: 'Скоростные маршруты по снегу' },
  { id: 12, title: 'Тихая бухта – пляжи Охотского моря', price: '9 500', cat: 'summer', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop', desc: 'Уединённые пляжи и скалистые берега' },
];

export default function ExcursionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filtered = activeCategory === 'all' ? excursions : excursions.filter(e => e.cat === activeCategory);

  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Каталог</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>
            Экскурсии по <span className="bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent">Сахалину</span>
          </h1>
          <p className="text-lg text-[#f5f0e8]/60 max-w-xl">Откройте для себя уникальные маршруты</p>
        </div>
      </section>

      <section className="relative py-8 border-b border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === cat.id ? 'bg-[#c8a45c] text-[#0d1b14]' : 'border border-[#c8a45c]/20 text-[#f5f0e8]/70 hover:border-[#c8a45c]/60 hover:text-[#c8a45c]'}`}>
                {cat.label} <span className="opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#c8a45c]/10">
                <div className="relative overflow-hidden aspect-[4/3] mb-5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-transparent to-transparent opacity-70" />
                  <div className="absolute top-4 right-4 bg-[#c8a45c] text-[#0d1b14] px-3 py-1 text-xs font-bold" style={{fontFamily: 'Unbounded, sans-serif'}}>{item.price} ₽</div>
                </div>
                <h3 className="text-lg font-semibold text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors mb-2" style={{fontFamily: 'Unbounded, sans-serif'}}>{item.title}</h3>
                <p className="text-sm text-[#f5f0e8]/50 mb-4">{item.desc}</p>
                <span className="text-sm text-[#c8a45c] border-b border-[#c8a45c]/30 pb-1">Подробнее →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
