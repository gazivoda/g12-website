'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src="/img/logo.png"
                  alt="G12 logo"
                  fill
                  style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="text-lg font-bold">G12 DOO Beograd</div>
                <div className="text-xs text-accent-light uppercase tracking-widest">Investitor</div>
              </div>
            </div>
            <p className="text-sm text-accent-light leading-relaxed">
              Moderan životni prostor u srcu Vračara. Kombinacija elegancije, kvaliteta i lokacije.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 text-accent-light">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+381 63 477715" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                <span>+381 63 477 715</span>
              </a>
              <a href="mailto:g12doobeograd@outlook.com" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent" />
                <span>g12doobeograd@outlook.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span> Golubačka 12<br />Beograd, Srbija</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 text-accent-light">Linkovi</h3>
            <nav className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-accent transition-colors">Početna</Link>
              <Link href="/apartments" className="block hover:text-accent transition-colors">Stanovi</Link>
              <Link href="/contact" className="block hover:text-accent transition-colors">Kontakt</Link>
            </nav>
          </div>

          {/* Agency Info */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-accent-light mb-4">Agencija</h3>
            <Link
              href="https://remington-christies.com/sr"
              target="_blank"
              className="block hover:text-accent transition-colors"
            >
              Remington Christie&apos;s
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-light">
            <p>© 2026 G12 Crveni Krst. Sva prava zadržana.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
              <a href="#" className="hover:text-white transition-colors">Uslovi korišćenja</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    // <footer className="bg-primary text-white py-16" id="contact">
    //   <div className="max-w-6xl mx-auto px-6">
    //     <div className="grid md:grid-cols-3 gap-12 items-start">
    //       {/* Logo Section */}
    //       <div>
    //         <div className="relative h-16 w-16 mb-3">
    //           <Image
    //             src="/img/logo.png"
    //             alt="G12 logo"
    //             fill
    //             style={{ filter: "brightness(0) saturate(100%) invert(100%)" }}
    //             className="object-contain"
    //             priority
    //           />
    //         </div>
    //         <p className="text-sm text-accent-light">
    //           Izgradnja i prodaja stanova
    //         </p>
    //       </div>
    //
    //       {/* Investor Info */}
    //       <div>
    //         <h3 className="text-sm uppercase tracking-wider text-accent-light mb-4">Investitor</h3>
    //         <p className="text-lg">
    //           G12 d.o.o. Beograd
    //         </p>
    //       </div>
    //
    //       {/* Agency Info */}
    //       <div>
    //         <h3 className="text-sm uppercase tracking-wider text-accent-light mb-4">Agencija</h3>
    //         <p className="text-lg">
    //           Remington Christie&apos;s
    //         </p>
    //       </div>
    //     </div>
    //
    //     <div className="mt-12 pt-8 border-t text-center border-white/20">
    //       <p className="text-sm text-accent-light">
    //         © {new Date().getFullYear()} G12. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
}
