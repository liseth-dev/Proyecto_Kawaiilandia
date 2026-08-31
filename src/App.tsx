const HERO_IMG =
  "https://sangilplaza.co/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-09-at-15.09.36-2-1024x768.jpeg";
const PLUSH_IMG =
  "https://images.unsplash.com/photo-1744608257868-b3a034a85d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const MUGS_IMG =
  "https://magifotoonline.com/wp-content/uploads/2020/06/mugs-personalizados-magifoto.jpg";
const TERMOS_IMG =
  "https://images.unsplash.com/photo-1602143407151-7111542de6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const CUADROS_IMG =
  "https://images.unsplash.com/photo-1578301978018-3005759f48f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800";
const GLOBOS_IMG =
  "https://regalosconamorcolombia.com/wp-content/uploads/2024/08/REGALOSCONAMORCOLOMBIA-10.jpeg";
const ANCHETAS_IMG =
  "https://detallesypunto.com/wp-content/uploads/2024/07/107_Abrazo-eterno.jpg";
const PRODUCT1_IMG =
  "https://http2.mlstatic.com/D_NQ_NP_607842-MLM110723773436_052026-O.webp";
const PRODUCT2_IMG =
  "https://i.redd.it/scratch-built-snoopy-doghouse-nightlight-v0-o6nptab1ws9h1.jpg?width=3024&format=pjpg&auto=webp&s=70783df3f37a5fcf4abb890e22e2c34ae5797d62";

const BRAND = "#E85D9A";
const BRAND_DARK = "#3A1F4D";
const TEXT_MUTED = "#6B5A73";
const BG = "#FDF6FA";
const BORDER = "#F0DCE9";

const categories = [
  { title: "Peluches", img: PLUSH_IMG },
  { title: "Mugs", img: MUGS_IMG },
  { title: "Termos", img: TERMOS_IMG },
  { title: "Cuadros en aluminio", img: CUADROS_IMG },
  { title: "Globos burbuja", img: GLOBOS_IMG },
  { title: "Ancheteas y detalles", img: ANCHETAS_IMG },
];

const products = [
  { name: "Vacas corredoras", price: "$40.000", img: PRODUCT1_IMG },
  { name: "Domo de Snoopy", price: "$80.000", img: PRODUCT2_IMG },
];

const steps = [
  "Elige tu regalo en el catálogo",
  "Escríbenos por WhatsApp",
  "Coordina la entrega o recógelo en tienda",
];

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "var(--font-body)", background: BG, color: BRAND_DARK }}
    >
      {/* NAV */}
      <nav
        className="sticky top-0 z-50 w-full px-6 py-3 flex items-center justify-between"
        style={{ background: BG, borderBottom: `1px solid ${BORDER}` }}
      >
        <a href="#hero" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-bold"
            style={{ background: BRAND, fontFamily: "var(--font-display)" }}
          >
            K
          </div>
          <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Kawaiilandia
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold" style={{ color: TEXT_MUTED }}>
          <a href="#hero">Inicio</a>
          <a href="#categorias">Catálogo</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative px-6 py-20 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45,10,60,0.55), rgba(45,10,60,0.55)), url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          KAWAIILANDIA
        </h1>
        <p className="text-white/90 mb-6">Regalos personalizados para toda ocasión</p>
        <a
          href="#categorias"
          className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm"
          style={{ background: BRAND_DARK }}
        >
          Ver catálogo
        </a>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
          Categorías
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${BORDER}`, background: "white" }}
            >
              <img src={cat.img} alt={cat.title} className="w-full h-36 object-cover" />
              <div className="p-3 text-center">
                <span className="font-semibold text-sm">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
          Productos destacados
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-xl overflow-hidden"
              style={{ border: `1px solid ${BORDER}`, background: "white" }}
            >
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <p className="font-semibold text-sm">{p.name}</p>
                <p className="text-sm" style={{ color: TEXT_MUTED }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-16 px-6" style={{ background: "white", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Sobre nosotros
          </h2>
          <p style={{ color: TEXT_MUTED }}>
            Kawaiilandia ofrece regalos personalizados para toda ocasión: peluches, mugs, termos,
            cuadros en aluminio, globos burbuja y ancheteas. Encuéntranos en el Centro Comercial
            San Gil Plaza.
          </p>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-display)" }}>
          Cómo comprar
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div
              key={s}
              className="rounded-xl p-4 text-center"
              style={{ border: `1px solid ${BORDER}`, background: "white" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3"
                style={{ background: BRAND }}
              >
                {i + 1}
              </div>
              <p className="text-sm" style={{ color: TEXT_MUTED }}>{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-16 px-6" style={{ background: BRAND_DARK }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Visítanos
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-white/85 text-sm">
            <div>
              <p className="font-semibold text-white mb-1">Dirección</p>
              <p>C.C. San Gil Plaza, San Gil, Santander</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Teléfono</p>
              <p>315 783 65 45</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Horario</p>
              <p>Lun–Vie: 9:00am–4:00pm</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/573157836545"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{ background: "#25D366" }}
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/kawaiilandia__"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{ background: BRAND }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-6 text-center text-xs" style={{ background: BRAND_DARK, color: "rgba(255,255,255,0.6)" }}>
        © 2026 Kawaiilandia · San Gil, Santander
      </footer>
    </div>
  );
}
