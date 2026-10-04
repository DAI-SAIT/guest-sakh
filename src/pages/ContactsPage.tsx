import { useState } from 'react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main>
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase" style={{fontFamily: 'Unbounded, sans-serif'}}>Связь</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{fontFamily: 'Unbounded, sans-serif'}}>
            <span className="bg-gradient-to-r from-[#c8a45c] to-[#e8d49c] bg-clip-text text-transparent">Контакты</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{fontFamily: 'Unbounded, sans-serif'}}>Свяжитесь с нами</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>Телефоны</h3>
                  <div className="space-y-3">
                    {['+7 (900) 488-55-55', '+7 (4242) 21-55-55', '+7 (900) 426-88-55'].map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                          <span className="text-[#c8a45c]">📞</span>
                        </div>
                        <span className="text-lg text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">{phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>Электронная почта</h3>
                  <div className="space-y-3">
                    {['admin@guest-sakhalin.ru', 'director@guest-sakhalin.ru'].map((email, i) => (
                      <a key={i} href={`mailto:${email}`} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                          <span className="text-[#c8a45c]">✉️</span>
                        </div>
                        <span className="text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">{email}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>Адрес</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c8a45c]/20">
                      <span className="text-[#c8a45c]">📍</span>
                    </div>
                    <div>
                      <p className="text-[#f5f0e8]">Южно-Сахалинск, улица Карла Маркса, 51, офис 103А</p>
                      <p className="text-sm text-[#f5f0e8]/50 mt-1">Часы работы: 08:00–22:00, Ежедневно</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase mb-4" style={{fontFamily: 'Unbounded, sans-serif'}}>Мы в соцсетях</h3>
                  <div className="flex flex-wrap gap-3">
                    {['VK', 'WhatsApp', 'Telegram', 'Instagram', 'YouTube'].map((social, idx) => (
                      <span key={idx} className="px-4 py-2 border border-[#c8a45c]/20 text-sm text-[#f5f0e8]/70 hover:bg-[#c8a45c] hover:text-[#0d1b14] hover:border-[#c8a45c] transition-all cursor-pointer">
                        {social}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#1a3a2a]/30 backdrop-blur-xl border border-[#c8a45c]/15 rounded-2xl p-8 md:p-10">
                <h2 className="text-xl font-bold mb-2" style={{fontFamily: 'Unbounded, sans-serif'}}>Оставить заявку</h2>
                <p className="text-sm text-[#f5f0e8]/50 mb-8">Заполните форму и мы свяжемся с вами</p>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="text-lg text-[#c8a45c]" style={{fontFamily: 'Unbounded, sans-serif'}}>Заявка отправлена!</p>
                    <p className="text-sm text-[#f5f0e8]/50 mt-2">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Ваше имя</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors" placeholder="Введите имя" />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Телефон</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Email</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Сообщение</label>
                      <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors resize-none" placeholder="Какой тур вас интересует?" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-[#c8a45c] to-[#a8843c] text-[#0d1b14] font-semibold py-3.5 tracking-wide hover:shadow-lg hover:shadow-[#c8a45c]/20 transition-all">Отправить заявку</button>
                    <p className="text-xs text-[#f5f0e8]/30 text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] bg-[#1a3a2a]/20 border border-[#c8a45c]/10 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl block mb-4">📍</span>
              <p className="text-lg text-[#f5f0e8]/60" style={{fontFamily: 'Unbounded, sans-serif'}}>г. Южно-Сахалинск</p>
              <p className="text-sm text-[#f5f0e8]/40 mt-2">ул. Карла Маркса, 51, офис 103А</p>
            </div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(200,164,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,92,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
          </div>
        </div>
      </section>
    </main>
  );
}
