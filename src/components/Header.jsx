import React from 'react';

function Header() {
  return (
    <header className="bg-blue-950 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 space-y-4 md:space-y-0">
        
        {/* Logo and Title/Subtitle */}
        <div className="flex items-center space-x-4 md:w-2/3">
          <img
            src="./public/logo.png"
            alt="MANIT Logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif">
              Training and Placement Cell
            </h1>
            <h6 className="font-light mt-2   leading-snug font-sarif">
            MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY BHOPAL [M.P.], INDIA
            </h6>
          </div>
        </div>

     
      </div>
    </header>
  );
}

export default Header;
