import React from "react";
import "./footer.css";


function Footer() {
  return (
    <>
      <div className='btns-footer'>
        <form method="get" action="/Contacto" className="btn">
          <button className="btn">Contacto</button>
        </form>
       <span className="span-footer">
        Todos los derechos reservados - Developers Books - Buenos Aires -
        Argentina - 2022
      </span>
      </div>

      
    </>
  );
}

export default Footer;
