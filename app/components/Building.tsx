'use client';

export function Building() {
  const features = [
    {
      title: "Fasada od vrhunskih materijala",
      description: "Zgrada je izvedena sa modernom i elegantnom fasadom od kamena, aluminijuma, stakla i opeke.",
      accent: true,
    },
    {
      title: "Geotermalne toplotne pumpe",
      description: "Sistem grejanja zasnovan je na najsavremenijim geotermalnim toplotnim pumpama koje koriste energiju zemlje i vode, sa sondama ukopanim duboko u temelje, čime se obezbeđuju vrhunska udobnost i energetska efikasnost.",
      accent: false,
    },
    {
      title: "Napredni klimatski sistem",
      description: "Razvod grejanja i hlađenja obuhvata zidne, podne i fan-coil sisteme. Svaki stan poseduje sopstveni kalorimetar i ima individualni obračun potrošnje.",
      accent: false,
    },
    {
      title: "Prilagodljivi rasporedi stanova",
      description: "U ranoj fazi izgradnje moguće je prilagođavanje rasporeda stanova u skladu sa potrebama i željama kupaca.",
      accent: true,
    },
  ];

  return (
    <section className="py-20 xl:py-32 bg-white relative overflow-hidden" id="apartments">
      {/* Architectural grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #d4c5b0 1px, transparent 1px),
            linear-gradient(to bottom, #d4c5b0 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Large decorative number */}
      <div className="absolute right-0 top-0 text-cream text-[20rem] leading-none pointer-events-none select-none font-black">
        01
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-light">Zgrada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary font-medium tracking-tight">
            Moderna<br />Arhitektura
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {features.map((feature, index) => (
            <div key={index} className={`relative pl-8 border-l-2 ${feature.accent ? 'border-accent' : 'border-accent-light'}`}>
              <div className={`absolute -left-2 top-0 w-4 h-4 rotate-45 ${feature.accent ? 'bg-accent' : 'bg-accent-light'}`}></div>
              <h3 className="text-2xl text-primary mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-primary-light text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
