// src/components/Hero.tsx
const Hero = () => {
  return (
    <section className="w-full h-[572px] relative">
      {/* Imagen de fondo */}
      <img
        src="/images/hero.jpg" // Asegúrate de colocar esta imagen en /public
        alt="Dualite - Cosmética Natural"
        className="w-full h-full object-cover blur-[3px]"
      />

      {/* Capa de oscurecimiento (opcional) */}
      <div className="absolute inset-0 bg-white/5"></div>

      {/* Contenido encima (opcional) */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-2xl mt-40">
          <h1 className="font-bold inter-title leading-none">
            <span className="text-black/80  text-4xl md:text-5xl block">
              Cosmética que honra la tierra.</span>
            <span className="text-[#4E5F46] text-shadow-lg text-5xl md:text-7xl block pl-50">
              Y tu piel.</span>
          </h1>
          <button className="m-8 bg-[#4E5F46] text-white px-3 py-3 rounded-full hover:bg-[#E8C88A] hover:text-[#4E5F46] transition-all duration-300 shadow-md inter-title">
            Descubre nuestros productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
