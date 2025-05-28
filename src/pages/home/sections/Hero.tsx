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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido encima (opcional) */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-2xl mt-40">
          <h1 className="md:text-6xl font-bold inter-title leading-none">
            <span className="text-[#F3F1E7] text-4xl md:text-5xl block">
              Cosmética que honra la tierra.</span>
            <span className="text-[#E5B38D] text-5xl md:text-6xl block pl-30">
              Y tu piel.</span>
          </h1>
          <button className="m-8 bg-[#E8C88A] text-[#4E5F46] px-3 py-3 rounded-full hover:bg-[#A98263] hover:text-[#EDE8DF] transition-all duration-300 shadow-md inter-title">
            Descubre nuestros productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
