import { useState } from "react";

const PHONE = "+68120137520";
const PHONE_DISPLAY = "+68 120 137 520";

type Page = "home" | "impressum" | "datenschutz" | "richtlinien";

function CallButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={"tel:" + PHONE} className={className}>
      {children}
    </a>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = (p: Page) => {
    setPage(p);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  if (page === "impressum") return <LegalPage title="Impressum" onBack={() => nav("home")}><ImpressumContent /></LegalPage>;
  if (page === "datenschutz") return <LegalPage title="Datenschutzerklärung" onBack={() => nav("home")}><DatenschutzContent /></LegalPage>;
  if (page === "richtlinien") return <LegalPage title="Allgemeine Geschäftsbedingungen" onBack={() => nav("home")}><RichtlinienContent /></LegalPage>;

  return (
    <div className="min-h-full bg-[#0d1117] text-[#f0ece3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#2a3347]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 rounded-sm bg-[#c9a84c] flex items-center justify-center">
              <KeyIcon className="w-5 h-5 text-[#0d1117]" />
            </div>
            <span className="font-['Fraunces'] text-xl font-600 text-[#f0ece3] group-hover:text-[#c9a84c] transition-colors">Key Hero</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8a8f9a]">
            {[["#leistungen","Leistungen"],["#bewertungen","Bewertungen"],["#kontakt","Kontakt"]].map(([href,label]) => (
              <a key={href} href={href} className="hover:text-[#c9a84c] transition-colors">{label}</a>
            ))}
          </div>

          <CallButton className="hidden md:flex items-center gap-2 bg-[#c9a84c] text-[#0d1117] font-semibold text-sm px-4 py-2 rounded hover:bg-[#b8943e] transition-colors">
            <PhoneIcon className="w-4 h-4" />
            +68 120 137 520
          </CallButton>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#f0ece3] p-2">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161c26] border-t border-[#2a3347] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {[["#leistungen","Leistungen"],["#bewertungen","Bewertungen"],["#kontakt","Kontakt"]].map(([href,label]) => (
              <a key={href} href={href} className="text-[#8a8f9a] hover:text-[#c9a84c] transition-colors" onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
            <CallButton className="flex items-center gap-2 bg-[#c9a84c] text-[#0d1117] font-semibold px-4 py-2 rounded w-fit">
              <PhoneIcon className="w-4 h-4" />
              +68 120 137 520
            </CallButton>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=1600&h=900&fit=crop&auto=format"
            alt="Schlüssel im Schloss"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold mb-6 border border-[#c9a84c]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              24 Stunden Notdienst — Graz &amp; Umgebung
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#f0ece3] leading-tight mb-6">
              Ihr Schlüssel<br />
              <span className="text-[#c9a84c] italic">zu mehr</span><br />
              Sicherheit.
            </h1>
            <p className="text-[#8a8f9a] text-lg mb-8 max-w-md leading-relaxed">
              Key Hero — professioneller Schlüsseldienst in Graz. Schnell, zuverlässig und transparent. Türöffnung, Schlossaustausch, Einbruchschutz und mehr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallButton className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0d1117] font-bold px-6 py-3 rounded hover:bg-[#b8943e] transition-colors text-lg">
                <PhoneIcon className="w-5 h-5" />
                Jetzt anrufen
              </CallButton>
              <a href="#leistungen" className="flex items-center justify-center gap-2 border border-[#2a3347] text-[#f0ece3] px-6 py-3 rounded hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-lg">
                Unsere Leistungen
              </a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { icon: <ClockIcon className="w-6 h-6" />, title: "Notdienst 24/7", sub: "Jederzeit für Sie da" },
              { icon: <ShieldIcon className="w-6 h-6" />, title: "Zertifiziert", sub: "Geprüfte Qualität" },
              { icon: <EuroIcon className="w-6 h-6" />, title: "Fixpreise", sub: "Keine versteckten Kosten" },
              { icon: <StarIcon className="w-6 h-6" />, title: "5 Sterne", sub: "200+ Bewertungen" },
            ].map(({ icon, title, sub }) => (
              <div key={title} className="bg-[#161c26] border border-[#2a3347] rounded-lg p-5 hover:border-[#c9a84c]/40 transition-colors">
                <div className="text-[#c9a84c] mb-3">{icon}</div>
                <div className="font-semibold text-[#f0ece3]">{title}</div>
                <div className="text-[#8a8f9a] text-sm mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#161c26] border-y border-[#2a3347] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm text-[#8a8f9a]">
          {["✓ Türöffnung ohne Beschädigung","✓ 15 Min. Reaktionszeit","✓ Fixpreise vor Ort","✓ Alle Marken & Schlosstypen","✓ Meisterbetrieb"].map(t => (
            <span key={t} className="text-[#c9a84c] font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="leistungen" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Was wir tun</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece3]">Unsere Leistungen</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.label} className="bg-[#161c26] border border-[#2a3347] rounded-lg overflow-hidden flex flex-col hover:border-[#c9a84c]/40 transition-colors group">
              <div className="aspect-[16/9] overflow-hidden bg-[#0d1117]">
                <img
                  src={s.img}
                  alt={s.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-[#c9a84c] text-xs font-semibold uppercase tracking-wider mb-1">{s.subtitle}</div>
                <h3 className="text-xl font-bold text-[#f0ece3] mb-3">{s.label}</h3>
                <p className="text-[#8a8f9a] text-sm leading-relaxed flex-1">{s.description}</p>
                <CallButton className="mt-5 flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0d1117] font-bold px-4 py-2.5 rounded hover:bg-[#b8943e] transition-colors text-sm">
                  <PhoneIcon className="w-4 h-4" />
                  +68 120 137 520
                </CallButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[#161c26] border-y border-[#2a3347] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Warum Key Hero</p>
            <h2 className="text-4xl font-bold text-[#f0ece3]">Sicherheit mit System</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon, title, body }) => (
              <div key={title} className="bg-[#0d1117] border border-[#2a3347] rounded-lg p-6 hover:border-[#c9a84c]/40 transition-colors group">
                <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform">{icon}</div>
                <h3 className="text-lg font-semibold text-[#f0ece3] mb-2">{title}</h3>
                <p className="text-[#8a8f9a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="bewertungen" className="bg-[#161c26] border-y border-[#2a3347] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Kundenstimmen</p>
            <h2 className="text-4xl font-bold text-[#f0ece3]">Was unsere Kunden sagen</h2>
            <div className="flex justify-center items-center gap-1 mt-4">
              {[1,2,3,4,5].map(i => <StarFilledIcon key={i} className="w-5 h-5 text-[#c9a84c]" />)}
              <span className="text-[#8a8f9a] text-sm ml-2">4,9 / 5 — 218 Bewertungen</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, date, rating, text, city }) => (
              <div key={name} className="bg-[#0d1117] border border-[#2a3347] rounded-lg p-6 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: rating }).map((_, i) => <StarFilledIcon key={i} className="w-4 h-4 text-[#c9a84c]" />)}
                </div>
                <p className="text-[#f0ece3] text-sm leading-relaxed mb-5">"{text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#f0ece3] text-sm">{name}</div>
                    <div className="text-[#8a8f9a] text-xs">{city}</div>
                  </div>
                  <div className="text-[#8a8f9a] text-xs">{date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <div className="bg-[#161c26] border border-[#c9a84c]/30 rounded-xl p-10 md:p-16">
          <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-6">
            <PhoneIcon className="w-8 h-8 text-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0ece3] mb-4">Ausgesperrt?<br /><span className="text-[#c9a84c] italic">Wir sind in 15 Min. da.</span></h2>
          <p className="text-[#8a8f9a] text-lg max-w-lg mx-auto mb-8">Rund um die Uhr, 365 Tage im Jahr — Key Hero ist Ihr verlässlicher Notfallpartner in Graz und Umgebung.</p>
          <CallButton className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0d1117] font-bold text-xl px-8 py-4 rounded hover:bg-[#b8943e] transition-colors">
            <PhoneIcon className="w-6 h-6" />
            +68 120 137 520
          </CallButton>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-[#161c26] border-t border-[#2a3347] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">Kontakt</p>
            <h2 className="text-4xl font-bold text-[#f0ece3] mb-6">So erreichen Sie uns</h2>
            <div className="space-y-5">
              {[
                { icon: <PhoneIcon className="w-5 h-5" />, label: "Telefon", val: "+68 120 137 520" },
                { icon: <MailIcon className="w-5 h-5" />, label: "E-Mail", val: "hausservice.graz@gmail.com" },
                { icon: <ClockIcon className="w-5 h-5" />, label: "Erreichbarkeit", val: "Mo–So 00–24 Uhr (Notdienst)" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 text-[#c9a84c]">{icon}</div>
                  <div>
                    <div className="text-[#8a8f9a] text-xs uppercase tracking-wider">{label}</div>
                    <div className="text-[#f0ece3] font-medium">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-[#0d1117] border border-[#2a3347] aspect-[4/3]">
            <img
              src="https://images.unsplash.com/flagged/photo-1564767609213-c75ee685263a?w=800&h=600&fit=crop&auto=format"
              alt="Schlüsseldienst Graz"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1117] border-t border-[#2a3347] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-[#c9a84c] flex items-center justify-center">
              <KeyIcon className="w-4 h-4 text-[#0d1117]" />
            </div>
            <span className="font-['Fraunces'] font-semibold text-[#f0ece3]">Key Hero</span>
          </div>
          <p className="text-[#8a8f9a] text-sm">© 2024 Key Hero. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 text-sm text-[#8a8f9a]">
            <button onClick={() => nav("impressum")} className="hover:text-[#c9a84c] transition-colors">Impressum</button>
            <button onClick={() => nav("datenschutz")} className="hover:text-[#c9a84c] transition-colors">Datenschutz</button>
            <button onClick={() => nav("richtlinien")} className="hover:text-[#c9a84c] transition-colors">AGB</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LegalPage({ title, onBack, children }: { title: string; onBack: () => void; children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[#0d1117] text-[#f0ece3]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <button onClick={onBack} className="flex items-center gap-2 text-[#c9a84c] hover:text-[#b8943e] transition-colors mb-8 text-sm font-medium">
          <ArrowLeftIcon className="w-4 h-4" />
          Zurück zur Startseite
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-sm bg-[#c9a84c] flex items-center justify-center">
            <KeyIcon className="w-5 h-5 text-[#0d1117]" />
          </div>
          <span className="font-['Fraunces'] text-lg font-semibold text-[#f0ece3]">Key Hero</span>
        </div>
        <h1 className="text-4xl font-bold text-[#f0ece3] mt-6 mb-10">{title}</h1>
        <div className="prose-custom">{children}</div>
      </div>
    </div>
  );
}

// --- Data ---

const services = [
  {
    label: "Türöffnung",
    subtitle: "Schnell & ohne Schaden",
    description: "Tür zugefallen oder Schlüssel verloren? Wir öffnen Wohnungs- und Haustüren in wenigen Minuten – in über 90 % der Fälle ganz ohne Bohren.",
    img: "https://images.unsplash.com/photo-1733244766159-f58f4184fd38?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Aufsperrdienst",
    subtitle: "24/7 im Einsatz",
    description: "Unser Aufsperrdienst ist Tag und Nacht erreichbar. Anruf genügt – wir sind in 20–30 Minuten bei Ihnen und sperren fachgerecht auf.",
    img: "https://images.unsplash.com/photo-1609770231080-e321deccc34c?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Schlüsselnotdienst",
    subtitle: "Rund um die Uhr",
    description: "Notfall um 3 Uhr früh? Unser Schlüsselnotdienst fährt sofort los – auch am Wochenende und an Feiertagen.",
    img: "https://images.unsplash.com/photo-1677951570313-b0750351c461?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Schlosswechsel",
    subtitle: "Nach Verlust & Einbruch",
    description: "Schlüssel verloren oder Einbruchspuren am Schloss? Wir wechseln Ihr Türschloss schnell und sauber – für ein sicheres Gefühl zu Hause.",
    img: "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Schlossaustausch",
    subtitle: "Zylindertausch vom Profi",
    description: "Defekter oder schwergängiger Schließzylinder? Wir tauschen Zylinder und Beschläge gegen geprüfte Markenqualität – passgenau montiert.",
    img: "https://images.unsplash.com/photo-1685886069739-c1b96bba7953?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Tresoröffnung",
    subtitle: "Diskret & professionell",
    description: "Code vergessen oder Tresorschlüssel verloren? Wir öffnen Möbeltresore und Wandtresore mit Spezialtechnik – diskret und möglichst zerstörungsfrei.",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Schlüsselservice",
    subtitle: "Beratung & Betreuung",
    description: "Vom klemmenden Schloss bis zur Frage nach mehr Sicherheit: Unser Schlüsselservice berät Sie ehrlich und findet die passende Lösung.",
    img: "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Einbruchschutz",
    subtitle: "Sicherheitstechnik",
    description: "Sicherheitsschlösser, Zusatzriegel und Schutzbeschläge: Wir rüsten Ihre Tür nach – damit ungebetene Gäste draußen bleiben.",
    img: "https://images.unsplash.com/photo-1555529902-5261145633bf?w=800&h=600&fit=crop&auto=format",
  },
  {
    label: "Schließanlagen",
    subtitle: "Für Haus & Betrieb",
    description: "Einheitliche Schließanlagen für Mehrfamilienhäuser, Büros und Betriebe – geplant, montiert und gewartet aus einer Hand.",
    img: "https://images.unsplash.com/photo-1586661615438-349a276d098b?w=800&h=600&fit=crop&auto=format",
  },
];

const whyUs = [
  {
    icon: <ClockIcon className="w-7 h-7" />,
    title: "15 Min. Reaktionszeit",
    body: "Unser Team ist in Graz und Umgebung immer in der Nähe — durchschnittlich 15 Minuten bis zu Ihnen.",
  },
  {
    icon: <EuroIcon className="w-7 h-7" />,
    title: "Fixpreise, keine Überraschungen",
    body: "Der Preis wird vor Beginn der Arbeit klar kommuniziert. Keine Nachforderungen, keine Trickserei.",
  },
  {
    icon: <ShieldIcon className="w-7 h-7" />,
    title: "Geprüfter Meisterbetrieb",
    body: "Key Hero ist ein zertifizierter Meisterbetrieb mit jahrelanger Erfahrung und geschultem Fachpersonal.",
  },
  {
    icon: <StarIcon className="w-7 h-7" />,
    title: "Top bewertet",
    body: "Über 218 Kundenbewertungen mit 4,9 Sternen — weil Kundenzufriedenheit bei uns an erster Stelle steht.",
  },
  {
    icon: <WrenchIcon className="w-7 h-7" />,
    title: "Alle Schlosstypen",
    body: "Wir beherrschen alle gängigen Schloss- und Türsysteme, von der einfachen Wohnungstür bis zur Sicherheitstür.",
  },
  {
    icon: <MapPinIcon className="w-7 h-7" />,
    title: "Graz & Umgebung",
    body: "Wir sind in ganz Graz sowie im Umkreis von 30 km tätig — alle Bezirke, jede Uhrzeit.",
  },
];

const pricing = [
  {
    title: "Türöffnung Standard",
    price: "79",
    sub: "Einfache Türöffnung ohne Beschädigung",
    highlight: false,
    features: ["Normale Schlösser", "Tagdienst 07–22 Uhr", "Anfahrt Graz inklusive", "Fixpreis vor Ort"],
  },
  {
    title: "Türöffnung Notdienst",
    price: "129",
    sub: "24/7 Notöffnung inkl. Nacht- und Wochenende",
    highlight: true,
    features: ["Alle Schlosstypen", "24/7 inkl. Feiertage", "Anfahrt Graz inklusive", "15 Min. Reaktionszeit", "Fixpreis vor Ort"],
  },
  {
    title: "Schlossaustausch",
    price: "149",
    sub: "Neues Schloss inklusive Einbau",
    highlight: false,
    features: ["Markenqualität", "Montage inklusive", "2 Schlüssel inklusive", "Herstellergarantie"],
  },
];

const testimonials = [
  {
    name: "Sandra K.",
    city: "Graz, 8010",
    date: "März 2024",
    rating: 5,
    text: "Innerhalb von 12 Minuten war der Techniker da und hatte die Tür in 3 Minuten geöffnet. Absolut professionell und faire Preise. Sehr empfehlenswert!",
  },
  {
    name: "Thomas W.",
    city: "Graz, 8020",
    date: "Februar 2024",
    rating: 5,
    text: "Sonntagnacht ausgesperrt — Key Hero war die Rettung. Freundlich, schnell und der Preis war exakt wie am Telefon besprochen. Keine versteckten Kosten.",
  },
  {
    name: "Maria L.",
    city: "Graz, 8042",
    date: "Jänner 2024",
    rating: 5,
    text: "Schlossaustausch nach Einbruchversuch. Die Beratung war sehr kompetent, das neue Schloss wurde sofort montiert. Fühle mich jetzt viel sicherer.",
  },
  {
    name: "Georg H.",
    city: "Graz, 8052",
    date: "Dezember 2023",
    rating: 5,
    text: "Schlüssel abgebrochen im Schloss. Key Hero hat das schnell und problemlos gelöst. Sehr netter Mitarbeiter, gute Arbeit!",
  },
  {
    name: "Petra M.",
    city: "Graz, 8010",
    date: "November 2023",
    rating: 5,
    text: "Zweites Mal in kurzer Zeit den Dienst von Key Hero in Anspruch genommen — immer wieder top. Pünktlich, professionell, ehrliche Preise.",
  },
  {
    name: "Robert S.",
    city: "Graz, 8036",
    date: "Oktober 2023",
    rating: 4,
    text: "Sehr guter Service, schnelle Reaktionszeit. Würde Key Hero jederzeit weiterempfehlen. Preis-Leistungs-Verhältnis stimmt.",
  },
];

// --- Legal Content ---

function ImpressumContent() {
  return (
    <div className="space-y-6 text-[#8a8f9a] leading-relaxed">
      <Section title="Angaben gemäß § 5 ECG">
        <p><strong className="text-[#f0ece3]">Key Hero GmbH</strong></p>
        <p>Österreich</p>
      </Section>
      <Section title="Kontakt">
        <p>Telefon: +68 120 137 520<br />E-Mail: hausservice.graz@gmail.com</p>
      </Section>
      <Section title="Unternehmensgegenstand">
        <p>Schlüsseldienst, Schlosserei, Sicherheitstechnik</p>
      </Section>
      <Section title="Behörde gem. ECG">
        <p>Magistrat der Stadt Graz</p>
      </Section>
      <Section title="Mitglied bei">
        <p>Wirtschaftskammer Graz, Fachgruppe Metalltechnische Gewerbe</p>
      </Section>

      <Section title="Haftungshinweis">
        <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      </Section>
    </div>
  );
}

function DatenschutzContent() {
  return (
    <div className="space-y-6 text-[#8a8f9a] leading-relaxed">
      <Section title="1. Datenschutz auf einen Blick">
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
      </Section>
      <Section title="2. Verantwortlicher">
        <p>Key Hero GmbH<br />E-Mail: hausservice.graz@gmail.com<br />Tel: +68 120 137 520</p>
      </Section>
      <Section title="3. Datenerfassung auf dieser Website">
        <p><strong className="text-[#f0ece3]">Cookies:</strong> Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.</p>
        <p className="mt-3"><strong className="text-[#f0ece3]">Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt (Browser-Typ, -Version, Betriebssystem, Referrer-URL, Hostname, Uhrzeit der Serveranfrage, IP-Adresse).</p>
      </Section>
      <Section title="4. Kontaktformular">
        <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      </Section>
      <Section title="5. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit Ihrer gespeicherten personenbezogenen Daten. Wenden Sie sich dazu an: hausservice.graz@gmail.com</p>
      </Section>
      <Section title="6. Beschwerderecht">
        <p>Sie haben das Recht, sich bei der Datenschutzbehörde (www.dsb.gv.at) zu beschweren.</p>
      </Section>
    </div>
  );
}

function RichtlinienContent() {
  return (
    <div className="space-y-6 text-[#8a8f9a] leading-relaxed">
      <Section title="§ 1 Geltungsbereich">
        <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Aufträge, die zwischen Key Hero GmbH (nachfolgend „Auftragnehmer") und Privatkunden oder Unternehmern (nachfolgend „Auftraggeber") geschlossen werden.</p>
      </Section>
      <Section title="§ 2 Vertragsabschluss">
        <p>Ein Vertrag kommt zustande, wenn der Auftraggeber den Kostenvoranschlag des Auftragnehmers vor Ort schriftlich oder mündlich bestätigt. Die Leistungserbringung beginnt erst nach Auftragserteilung.</p>
      </Section>
      <Section title="§ 3 Preise und Zahlung">
        <p>Alle angegebenen Preise sind Endpreise in Euro inkl. MwSt. Der endgültige Preis wird vor Beginn der Arbeiten mitgeteilt und bedarf der Zustimmung des Auftraggebers. Zahlung ist bei Auftragsabschluss fällig, wahlweise bar oder per Karte.</p>
      </Section>
      <Section title="§ 4 Leistungserbringung">
        <p>Der Auftragnehmer erbringt die vereinbarten Leistungen fachgerecht nach dem Stand der Technik. Reaktionszeiten sind Richtwerte und keine rechtsverbindlichen Zusagen.</p>
      </Section>
      <Section title="§ 5 Gewährleistung">
        <p>Für Mängel an erbrachten Leistungen gilt die gesetzliche Gewährleistungsfrist von 2 Jahren. Für eingebaute Produkte gilt zusätzlich die Herstellergarantie.</p>
      </Section>
      <Section title="§ 6 Haftungsbeschränkung">
        <p>Die Haftung des Auftragnehmers ist auf grobe Fahrlässigkeit und Vorsatz beschränkt. Eine Haftung für leichte Fahrlässigkeit ist — soweit gesetzlich zulässig — ausgeschlossen.</p>
      </Section>
      <Section title="§ 7 Datenschutz">
        <p>Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und der DSGVO.</p>
      </Section>
      <Section title="§ 8 Gerichtsstand">
        <p>Als Gerichtsstand wird Graz vereinbart. Es gilt österreichisches Recht.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#f0ece3] mb-2">{title}</h3>
      {children}
    </div>
  );
}

// --- Icons ---

function KeyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="7.5" cy="15.5" r="5.5" /><path d="M21 2l-9.6 9.6M15.5 7.5l2 2" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  );
}
function EuroIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M4 10h12M4 14h12M19 6a7 7 0 100 12" />
    </svg>
  );
}
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function StarFilledIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
