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
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-xl libre-baskerville-regular leading-tight">
            Cuidado consciente, belleza esencial
          </h1>
          <button className="mt-4 bg-[#BB976F] text-[#1A1A1A] px-6 py-3 rounded-2xl hover:bg-[#889858] hover:text-white transition-all duration-300 shadow-md inter-navegacion">
            Ver Catálogo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
