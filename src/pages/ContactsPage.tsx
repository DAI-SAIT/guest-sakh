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
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b14] via-[#0d1b14]/50 to-[#0d1b14]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-[#c8a45c]" />
            <span className="text-[#c8a45c] text-xs tracking-[0.3em] uppercase font-display">Связь</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Контакты</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8">
                Свяжитесь с нами или забронируйте тур
              </h2>

              <div className="space-y-8">
                {/* Phones */}
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase font-display mb-4">Телефоны</h3>
                  <div className="space-y-3">
                    <a href="tel:+79004885555" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span className="text-lg text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">+7 (900) 488-55-55</span>
                    </a>
                    <a href="tel:+7424221555" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span className="text-lg text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">+7 (4242) 21-55-55</span>
                    </a>
                    <a href="tel:+79004268855" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <span className="text-lg text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">+7 (900) 426-88-55</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase font-display mb-4">Электронная почта</h3>
                  <div className="space-y-3">
                    <a href="mailto:admin@guest-sakhalin.ru" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span className="text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">admin@guest-sakhalin.ru</span>
                    </a>
                    <a href="mailto:director@guest-sakhalin.ru" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center border border-[#c8a45c]/20 group-hover:border-[#c8a45c] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span className="text-[#f5f0e8] group-hover:text-[#c8a45c] transition-colors">director@guest-sakhalin.ru</span>
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase font-display mb-4">Адрес</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#c8a45c]/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1.5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#f5f0e8]">Южно-Сахалинск, улица Карла Маркса, 51, офис 103А</p>
                      <p className="text-sm text-[#f5f0e8]/50 mt-1">Часы работы: 08:00–22:00, Ежедневно</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-[#c8a45c] text-xs tracking-[0.2em] uppercase font-display mb-4">Мы в соцсетях</h3>
                  <div className="flex gap-3">
                    {[
                      { label: 'VK', href: 'https://vk.com/guest_sakh' },
                      { label: 'WhatsApp', href: 'https://wa.me/message/XMXALPB7NNZXO1' },
                      { label: 'Telegram', href: 'https://t.me/viktoriyasakh65' },
                      { label: 'Instagram', href: 'https://instagram.com/guest_sakh' },
                      { label: 'YouTube', href: 'https://youtube.com/@guest-sakhalin' },
                    ].map((social, idx) => (
                      <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#c8a45c]/20 text-sm text-[#f5f0e8]/70 hover:bg-[#c8a45c] hover:text-[#0d1b14] hover:border-[#c8a45c] transition-all">
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-xl font-bold mb-2">Оставить заявку</h2>
                <p className="text-sm text-[#f5f0e8]/50 mb-8">Заполните форму и мы свяжемся с вами в ближайшее время</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <p className="font-display text-lg text-[#c8a45c]">Заявка отправлена!</p>
                    <p className="text-sm text-[#f5f0e8]/50 mt-2">Мы свяжемся с вами в ближайшее время</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Ваше имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors"
                        placeholder="Введите имя"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#f5f0e8]/50 uppercase tracking-wider block mb-2">Сообщение</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-transparent border-b border-[#c8a45c]/20 focus:border-[#c8a45c] py-3 text-[#f5f0e8] outline-none transition-colors resize-none"
                        placeholder="Какой тур вас интересует?"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-center">
                      Отправить заявку
                    </button>
                    <p className="text-xs text-[#f5f0e8]/30 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 border-t border-[#c8a45c]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[400px] glass rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8a45c" strokeWidth="1" className="mx-auto mb-4">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-display text-lg text-[#f5f0e8]/60">г. Южно-Сахалинск</p>
              <p className="text-sm text-[#f5f0e8]/40 mt-2">ул. Карла Маркса, 51, офис 103А</p>
            </div>
            {/* Decorative map grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(rgba(200,164,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,92,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
