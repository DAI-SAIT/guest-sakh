export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>О компании</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{fontFamily: 'Unbounded, sans-serif'}}>
            О <span className="bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent">нас</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl text-[#f5f0e8] mb-8 leading-relaxed italic" style={{fontFamily: 'Playfair Display, serif'}}>
                Уважаемые коллеги, дорогие друзья и гости Сахалинской области!
              </h2>
              <div className="space-y-6 text-[#f5f0e8]/70 leading-relaxed">
                <p>Туроператор «Гостеприимный Сахалин» приветствует Вас и рад видеть на страницах нашего сайта.</p>
                <p>Сахалин – это уникальное место, побывав здесь однажды и получив незабываемые, захватывающие впечатления, Вы обязательно вернетесь. А помочь осуществить путешествие Вашей мечты по Сахалину и Курильским островам поможет наша команда.</p>
                <p>Мы стремимся держать репутацию и сервис на высоком уровне, поэтому к каждому клиенту у нас индивидуальный подход.</p>
                <p>Наши менеджеры подберут тур или экскурсию, исходя из ваших пожеланий и возможностей, а гиды сделают Ваш отдых комфортным, безопасным, интересным и ярким.</p>
              </div>
              <div className="mt-10 pt-8 border-t border-[#c8a45c]/10">
                <p className="italic text-[#c8a45c] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>С Уважением,</p>
                <p className="italic text-[#f5f0e8]/80" style={{fontFamily: 'Playfair Display, serif'}}>Генеральный директор компании «Гостеприимный Сахалин»</p>
                <p className="text-lg font-semibold text-[#f5f0e8] mt-2" style={{fontFamily: 'Unbounded, sans-serif'}}>Неписалиев Максим Николаевич</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop" alt="Команда" className="w-full h-full object-cover" />
              </div>
              <div className="bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/10 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-[#c8a45c] mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>Наша миссия</h3>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed">Команда Гостеприимного Сахалина — профессионалы своего дела, мы заботимся о каждой детали Вашего отдыха. Все туры и экскурсии тщательно спланированы.</p>
                <p className="text-sm text-[#f5f0e8]/70 leading-relaxed mt-4">Мы дорожим каждым гостем, поэтому высокое качество сервиса – приоритет для нас.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/15 rounded-xl p-8 md:p-12">
            <h2 className="text-xl font-semibold text-[#c8a45c] mb-8" style={{fontFamily: 'Unbounded, sans-serif'}}>Юридическая информация</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#f5f0e8]/70">
              <div className="space-y-4">
                <p><span className="text-[#f5f0e8]/40">Полное наименование:</span> ООО «Гостеприимный Сахалин»</p>
                <p><span className="text-[#f5f0e8]/40">ИНН:</span> 6500004533</p>
                <p><span className="text-[#f5f0e8]/40">ОГРН:</span> 1226500003410</p>
                <p><span className="text-[#f5f0e8]/40">КПП:</span> 650001001</p>
              </div>
              <div className="space-y-4">
                <p><span className="text-[#f5f0e8]/40">Реестровый номер:</span> РТО В031-00161-77/01537559</p>
                <p><span className="text-[#f5f0e8]/40">Единый Федеральный реестр туроператоров</span></p>
                <p><span className="text-[#f5f0e8]/40">Страхование:</span> Договор №00863-420001-24 от 03.10.2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2023', label: 'Год основания награды' },
              { value: '244+', label: 'Довольных отзывов' },
              { value: '29', label: 'Маршрутов' },
              { value: '5.0', label: 'Средняя оценка' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/10 rounded-xl p-6">
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent block mb-2" style={{fontFamily: 'Unbounded, sans-serif'}}>{stat.value}</span>
                <span className="text-xs text-[#f5f0e8]/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
