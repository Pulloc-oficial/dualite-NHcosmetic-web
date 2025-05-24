import React from "react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4E5F46] pt-12 pb-6 px-4 text-[#D6D9BA] inter-titulos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          {/* Izquierda */}
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white libre-baskerville-regular">Conecta con tu belleza natural</h4>
            <h5 className="text-lg mt-2 mb-4 text-[#D6D9BA]">
              Encuéntranos en nuestras redes sociales
            </h5>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-black/15 text-[#6F7C68] hover:text-white hover:bg-[#E8C88A] shadow-md h-12 w-12 flex items-center justify-center rounded-full transition"
              >
                <img className="w-7 h-7" src="./public/icons/01 Static Glyph/01 Gradient Glyph/Instagram_Glyph_Gradient.svg" />
              </a>
              <a
                href="#"
                className="bg-black/15 text-[#6F7C68] hover:text-white hover:bg-[#E8C88A] shadow-md h-12 w-12 flex items-center justify-center rounded-full transition"
              >
                <img className="w-7 h-7" src="./public/icons/facebook-1-svgrepo-com.svg" />
              </a>
              <a
                href="#"
                className="bg-black/15 text-[#6F7C68] hover:text-white hover:bg-[#E8C88A] shadow-md h-12 w-12 flex items-center justify-center rounded-full transition"
              >
                <img className="w-7 h-7" src="./public/icons/tiktok-svgrepo-com.svg" />
              </a>
            </div>
          </div>

          {/* Derecha */}
          <div className="w-full lg:w-6/12 px-4 mt-10 lg:mt-0">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 mb-6">
                <span className="block uppercase text-sm font-semibold text-[#D6D9BA]">Enlaces</span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="hover:text-white text-sm">Nosotros</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">Eventos</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">Holística</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">Cómo comprar</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6/12 mb-6">
                <span className="block uppercase text-sm font-semibold text-[#D6D9BA]">Otros</span>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="#" className="hover:text-white text-sm">Términos y condiciones</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">Política de privacidad</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white text-sm">Contáctanos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-[#D6D9BA]/30" />

        {/* Pie de copyright */}
        <div className="text-center">
          <p className="text-sm text-[#D6D9BA]">
            © 2025 desarrollado por <a href="#" className="hover:text-white">pulloc</a>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;