const NavBar = () => {
    return (
      <div className="container">
        <header className="w-100 d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom shadow">
                  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src="./img/BTSlogo.png" className="bi me-2" width="120" height="64"></img>
                    <span className="fs-4">Kai Kai Music INC</span>
                  </a>
                  <button id="boton-carrito"><span id="contadorCarrito">0</span></button>
        </header>
    </div>
    );
  };
  
  export default NavBar;
  