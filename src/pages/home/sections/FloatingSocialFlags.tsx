
const FloatingSocialFlags = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 hover:bg-white/30 hover:w-20 text-white rounded-r-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <img className="w-6 h-6" src="./public/icons/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 hover:bg-white/30 hover:w-20 text-white rounded-r-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <img className="w-6 h-6" src="./public/icons/facebook-1-svgrepo-com.svg" />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 hover:bg-white/30 hover:w-20 text-white rounded-r-full w-12 h-12 flex items-center justify-center shadow-lg transition"
      >
        <img className="w-6 h-6" src="./public/icons/tiktok-svgrepo-com.svg" />
      </a>
    </div>
  );
};

export default FloatingSocialFlags;
