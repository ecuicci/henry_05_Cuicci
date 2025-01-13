export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* Contenido de texto */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold text-gray-900">
              Comienza o acelera tu carrera en tecnología
            </h1>
            
            <p className="text-xl text-gray-600">
              Estudia Desarrollo Full Stack, Data Science o Data Analytics
            </p>

            {/* Lista de características */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Online, en vivo y flexible</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Basado en proyectos</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Basado en cohortes</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span>Garantía de Empleo</span>
              </div>
            </div>

            {/* Botón de acción */}
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-md text-lg font-bold hover:bg-yellow-500 transition-colors">
              Aplicar
            </button>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src="/estudiantes-henry.png" 
              alt="Estudiantes Henry" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
