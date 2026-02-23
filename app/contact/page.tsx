'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="min-h-screen bg-cream relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-accent-light/20"></div>

          {/* Hero Section with Image */}
          <div className="relative h-[60vh] min-h-125 overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/img/building-night.jpg"
                alt="G12 Zgrada"
                fill
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/60 to-cream"></div>
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/90">Stupite u Kontakt</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-6">
                  Kontakt
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                  Ovde smo da odgovorimo na sva vaša pitanja i pomognemo vam da pronađete savršen dom.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-white shadow-lg p-6 sm:p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl text-primery tracking-tight mb-4">
                    Pošaljite Nam Poruku
                  </h2>
                  <p className="text-base text-primary-light mb-8">
                    Popunite formu ispod i javićemo vam se u najkraćem mogućem roku.
                  </p>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-accent/10 border-l-4 border-accent">
                      <p className="text-sm text-accent">
                        Hvala vam na poruci! Kontaktiraćemo vas uskoro.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.3em] text-primary-light mb-3">
                        Ime i Prezime *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-accent-light/30 focus:border-accent focus:outline-none transition-colors text-primery bg-white"
                        placeholder="Vaše ime i prezime"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-[0.3em] text-primary-light mb-3">
                        Email Adresa *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 border-2 border-accent-light/30 focus:border-accent focus:outline-none transition-colors text-primery bg-white"
                        placeholder="vasa.email@primer.com"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-[0.3em] text-primary-light mb-3">
                        Poruka *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 border-2 border-accent-light/30 focus:border-accent focus:outline-none transition-colors text-primery bg-white resize-none"
                        placeholder="Napišite vašu poruku ovde..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-4 px-8 hover:bg-primary transition-colors uppercase text-sm tracking-wider font-medium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Šalje se...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Pošalji Poruku</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information - 2 columns */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Details Card */}
                <div className="bg-primary text-white p-6 sm:p-8 shadow-lg">
                  <h3 className="text-2xl tracking-tight mb-6">Kontakt Informacije</h3>

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-accent flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/70 mb-1">Telefon</div>
                        <a href="tel:+38163477715" className="text-base hover:text-accent transition-colors">
                          +381 63 477 715
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-accent flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/70 mb-1">Email</div>
                        <a href="mailto:office@remingtonchristies.rs" className="text-base hover:text-accent transition-colors break-all">
                          office@remingtonchristies.rs
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-accent flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/70 mb-1">Adresa</div>
                        <address className="text-base not-italic leading-relaxed">
                          Golubačka 12 Beograd, Srbija
                        </address>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                {/* <div className="bg-white p-8 shadow-lg">
                  <h3 className="text-xl text-primery tracking-tight mb-6">Radno Vreme</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#4a9d8e] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-primery font-medium mb-1">Ponedeljak - Petak</div>
                        <div className="text-sm text-[#8b7d6f]">09:00 - 17:00</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#4a9d8e] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-primery font-medium mb-1">Subota</div>
                        <div className="text-sm text-[#8b7d6f]">10:00 - 14:00</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-[#d4c5b0] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-primery font-medium mb-1">Nedelja</div>
                        <div className="text-sm text-[#8b7d6f]">Zatvoreno</div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Map Placeholder Card */}
                <div className="bg-white shadow-lg overflow-hidden">
                  <div className="aspect-4/3 bg-cream relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1438230776043!2d20.488641799999996!3d44.79825749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70788b4295fd%3A0xc6e2cbdb19797be3!2sGoluba%C4%8Dka%2012%2C%20Beograd%2011050!5e0!3m2!1sen!2srs!4v1770056794532!5m2!1sen!2srs"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="G12 Lokacija"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
