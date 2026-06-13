import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Catalogue from "./components/Catalogue";
import ProductShowcase from "./components/ProductShowcase";
import HowToOrder from "./components/HowToOrder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import useProducts from "./hooks/useProducts";
import useScrollReveal from "./hooks/useScrollReveal";
import translations from "./data/translations";

export default function App() {
  const [language, setLanguage] = useState("fr");
  const { products, source } = useProducts();
  useScrollReveal();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <div className={`app app-${language}`}>
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Advantages t={t} />
        <Catalogue products={products} source={source} t={t} language={language} />
        <ProductShowcase t={t} />
        <HowToOrder t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
    </div>
  );
}
