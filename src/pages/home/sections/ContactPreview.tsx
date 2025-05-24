// src/components/ContactSection.tsx
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiX } from "react-icons/si";

const ContactSection = () => {
  return (
    <div className="inter-titulos text-[#004B5A] relative flex items-top justify-center min-h-[calc(100vh-72px)] 
    bg-[#4E5F46] dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Info Column */}
            <div className="p-6 mr-2  dark:bg-gray-800 ">
              <h1 className="text-4xl sm:text-6xl text-[#E8C88A] libre-baskerville-bold font-extrabold tracking-tight ">
                Contactanos
              </h1>
              <p className="pt-6 text-lg sm:text-xl font-ligt text-gray-200 dark:text-gray-400 mt-2">
                Llena el formulario e inicia una conversacion
              </p>
            </div>

            {/* Form Column */}
            <form className="p-6 flex flex-col justify-center w-full">
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="tel" className="sr-only">Phone</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Mensaje"
                  className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none resize-none flex-grow min-h-[150px]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#E8C88A] text-black-800 hover:bg-[#4E5F46] hover:text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-300 w-full md:w-32"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;