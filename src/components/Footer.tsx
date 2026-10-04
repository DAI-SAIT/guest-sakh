import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1510] border-t border-[#c8a45c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c8a45c] to-[#a8843c] flex items-center justify-center">
                <span className="font-display text-[#0d1b14] font-bold text-lg">ГС</span>
              </div>
              <div>
                <span className="font-display text-sm tracking-wider text-[#f5f0e8] block">ГОСТЕПРИИМНЫЙ</span>
                <span className="text-[10px] tracking-[0.3em] text-[#c8a45c] uppercase">Сахалин</span>
              </div>
            </div>
            <p className="text-sm text-[#f5f0e8]/60 leading-relaxed mb-6">
              Туроператор «Гостеприимный Сахалин» — ваш проводник в мир уникальной природы Сахалина и Курильских островов.
            </p>
            <div className="flex gap-3">
              <a href="https://vk.com/guest_sakh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#c8a45c]/30 flex items-center justify-center hover:bg-[#c8a45c] hover:text-[#0d1b14] transition-all text-[#c8a45c]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.436-.194c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.598-.189 1.365 1.26 2.178 1.818.616.42 1.084.328 1.084.328l2.178-.03s1.14-.07.6-.964c-.044-.073-.314-.661-1.618-1.869-1.365-1.263-1.182-1.059.462-3.245.998-1.328 1.397-2.14 1.272-2.487-.12-.332-.86-.244-.86-.244l-2.45.015s-.182-.025-.317.056c-.131.079-.216.263-.216.263s-.387 1.03-.903 1.906c-1.089 1.85-1.524 1.948-1.702 1.832-.414-.267-.31-1.075-.31-1.648 0-1.79.272-2.537-.529-2.73-.266-.064-.461-.106-1.14-.113-.87-.009-1.606.003-2.023.207-.277.136-.491.439-.361.456.161.021.525.099.718.36.248.338.24 1.097.24 1.097s.143 2.108-.333 2.369c-.327.18-.774-.187-1.736-1.864-.493-.859-.866-1.81-.866-1.81s-.072-.176-.2-.271c-.155-.115-.372-.151-.372-.151l-2.327.015s-.35.01-.478.162c-.114.135-.009.414-.009.414s1.818 4.258 3.876 6.403c1.886 1.966 4.028 1.838 4.028 1.838h.97z"/></svg>
              </a>
              <a href="https://t.me/viktoriyasakh65" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#c8a45c]/30 flex items-center justify-center hover:bg-[#c8a45c] hover:text-[#0d1b14] transition-all text-[#c8a45c]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="https://wa.me/message/XMXALPB7NNZXO1" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#c8a45c]/30 flex items-center justify-center hover:bg-[#c8a45c] hover:text-[#0d1b14] transition-all text-[#c8a45c]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="https://instagram.com/guest_sakh" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#c8a45c]/30 flex items-center justify-center hover:bg-[#c8a45c] hover:text-[#0d1b14] transition-all text-[#c8a45c]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-[#c8a45c] mb-6 uppercase">Навигация</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Главная' },
                { path: '/excursions', label: 'Экскурсии' },
                { path: '/tours', label: 'Туры' },
                { path: '/about', label: 'О нас' },
                { path: '/reviews', label: 'Отзывы' },
                { path: '/contacts', label: 'Контакты' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-[#c8a45c] mb-6 uppercase">Категории</h4>
            <ul className="space-y-3">
              <li><Link to="/excursions" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Летние экскурсии</Link></li>
              <li><Link to="/excursions" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Морские экскурсии</Link></li>
              <li><Link to="/excursions" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Автомобильные экскурсии</Link></li>
              <li><Link to="/excursions" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Рыбалка</Link></li>
              <li><Link to="/tours" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Туры на Курилы</Link></li>
              <li><Link to="/excursions" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors">Прокат снегоходов</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-[#c8a45c] mb-6 uppercase">Контакты</h4>
            <div className="space-y-4">
              <div>
                <a href="tel:+79004885555" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">
                  +7 (900) 488-55-55
                </a>
                <a href="tel:+79004268855" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">
                  +7 (900) 426-88-55
                </a>
                <a href="tel:+7424221555" className="text-sm text-[#f5f0e8]/80 hover:text-[#c8a45c] transition-colors block">
                  +7 (4242) 21-55-55
                </a>
              </div>
              <div>
                <a href="mailto:admin@guest-sakhalin.ru" className="text-sm text-[#f5f0e8]/60 hover:text-[#c8a45c] transition-colors block">
                  admin@guest-sakhalin.ru
                </a>
              </div>
              <p className="text-sm text-[#f5f0e8]/60">
                г. Южно-Сахалинск,<br />
                ул. Карла Маркса, 51, офис 103А
              </p>
              <p className="text-sm text-[#f5f0e8]/60">
                Часы работы: 08:00–22:00<br />Ежедневно
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#c8a45c]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f5f0e8]/40">
            © 2024 Гостеприимный Сахалин. Все права защищены.
          </p>
          <p className="text-xs text-[#f5f0e8]/40">
            ИНН 6500004533 | РТО В031-00161-77/01537559
          </p>
        </div>
      </div>
    </footer>
  );
}
