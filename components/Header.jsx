// export default function Header() {
  import React from 'react';
  import Estudiantes from './Estudiantes';
  import IconComponent from './Icon';
  import Text from './Text';
  import Empresas from './Empresas';
  import BotonIngresar from './BotonIngresar';
  import BotonAplicar from './BotonAplicar';
const styles = {
  Header: {
    top: '0px',
    left: '0px',
    width: '1440px',
    height: '68px',
    backgroundColor: '#2f2f2f',
    //necesito agregar que todos los elementos del header deben estar en la misma linea
    display: 'flex',

  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      <IconComponent />
      <Text />
      <Estudiantes />
      <Empresas />
      <BotonIngresar />
      <BotonAplicar/>

    </div>
  );
};

export default Header;
  // return (
  //   <header className="fixed w-full bg-white shadow-md z-50">
  //     <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
  //       {/* Logo */}
  //       <div className="flex-shrink-0">
  //         <img src="/henry-logo.png" alt="Henry Logo" className="h-8" />
  //       </div>

  //       {/* Enlaces centrales */}
  //       <div className="hidden md:flex space-x-8">
  //         <a href="#" className="text-gray-600 hover:text-black">Para estudiantes</a>
  //         <a href="#" className="text-gray-600 hover:text-black">Para empresas</a>
  //       </div>

  //       {/* Botones de acción */}
  //       <div className="flex items-center space-x-4">
  //         <button className="text-gray-600 hover:text-black">
  //           Ingresar
  //         </button>
  //         <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500">
  //           Aplicar
  //         </button>
  //       </div>
  //     </nav>
  //   </header>
  // );

