import { useNav } from '../context/NavContext';

export default function Footer() {
  const { navigate } = useNav();

  return (
    <footer className="relative bg-[#0a1510] border-t border-[#c8a45c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c8a45c] to-[#a8843c] flex items-center justify-center">
                <span className="font-bold text-[#0d1b14] text-lg" style={{fontFamily: 'Unbounded, sans-serif'}}>ГС</span>
              </div>
              <div>
                <span className="text-sm tracking-wider text-[#f5f0e8] block" style={{fontFamily: 'Unbounded, sans-serif'}}>ГОСТЕПРИИМНЫЙ</span>
                <span className="text-[10px] tracking-[0.3em] text-[#c8a45c] uppercase">Сахалин</span>
              </div>
            </div>
            <p className="text-sm text-[#f5f0e8]/60 leading-relaxed mb-6">
              Туроператор «Гостеприимный Сахалин» — ваш проводник в мир уникальной природы Сахалина и Курильских островов.
            </p>
            <div className="flex gap-3">
              {['VK', 'TG', 'WA', 'IG'].map((s, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-[#c8a45c]/30 flex items-center justify-center hover:bg-[#c8a45c] hover:text-[#0d1b14] transition-all text-[#c8a45c] text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-wider text-[#c8a45c] mb-6 uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Навигация</h4>
            <ul className="space-y-3">
              {[
                { page: 'home' as const, label: 'Главная' },
                { page: 'excursions' as const, label: 'Экскурсии' },
                { page: 'tours' as const, label: 'Туры' },
                { page: 'about' as const, label: 'О нас' },
                { page: 'reviews' as const, label: 'Отзывы' },
                { page: 'contacts' as const, label: 'Контакты' },
              ].map(link => (
                <li key={link.page}>
                  <button onClick={() => navigate(link.page)} className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm tracking-wider text-[#c8a45c] mb-6 uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Категории</h4>
            <ul className="space-y-3">
              {['Летние экскурсии', 'Морские экскурсии', 'Автомобильные', 'Рыбалка', 'Туры на Курилы', 'Прокат снегоходов'].map((item, i) => (
                <li key={i}>
                  <button onClick={() => navigate('excursions')} className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm tracking-wider text-[#c8a45c] mb-6 uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Контакты</h4>
            <div className="space-y-4">
              <div>
                <a href="tel:+79004885555" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">+7 (900) 488-55-55</a>
                <a href="tel:+79004268855" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">+7 (900) 426-88-55</a>
                <a href="tel:+74242215555" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">+7 (4242) 21-55-55</a>
              </div>
              <a href="mailto:admin@guest-sakhalin.ru" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors block">admin@guest-sakhalin.ru</a>
              <p className="text-sm text-[#f5f0e8]/60">г. Южно-Сахалинск,<br/>ул. Карла Маркса, 51, офис 103А</p>
              <p className="text-sm text-[#f5f0e8]/60">Часы работы: 08:00–22:00<br/>Ежедневно</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#c8a45c]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f5f0e8]/40">© 2024 Гостеприимный Сахалин. Все права защищены.</p>
          <p className="text-xs text-[#f5f0e8]/40">ИНН 6500004533 | РТО В031-00161-77/01537559</p>
        </div>
      </div>
    </footer>
  );
}
