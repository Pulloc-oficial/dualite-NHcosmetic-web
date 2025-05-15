// src/components/Hero.tsx
const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      {/* Imagen de fondo */}
      <img
        src="/images/hero.jpg" // Asegúrate de colocar esta imagen en /public
        alt="Dualite - Cosmética Natural"
        className="w-full h-full object-cover"
      />

      {/* Capa de oscurecimiento (opcional) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido encima (opcional) */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Bienvenida a Dualite
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            Cosmética natural y holística para tu bienestar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
