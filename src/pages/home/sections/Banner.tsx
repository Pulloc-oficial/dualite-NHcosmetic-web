const Banner = () => {
  const phrases = [
    "Puro bienestar",
    "Conecta con tu esencia",
    "Tu piel, tu templo",
    "Belleza con propósito",
    "Rituales que sanan",
  ];

  // Concatenamos el array para repetir las frases y evitar espacios
  const repeatedPhrases = [...phrases, ...phrases];

  return (
    <div className="relative overflow-hidden bg-[#fce8d6] h-24 w-full flex items-center">
      <div className="marquee whitespace-nowrap text-[80px] font-extrabold text-transparent stroke-text flex gap-16">
        {repeatedPhrases.map((text, idx) => (
          <span key={idx}>{text.toUpperCase()} ·</span>
        ))}
      </div>
    </div>
  );
};

export default Banner;

