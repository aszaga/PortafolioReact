import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen from './../imagenes/codigo.jpg';

function Imag() {
    return (
        <section className="container">
        <div  id="Image">
            <div id="imagen">
                <img src={imagen} id="Imag"/>
            </div>
            
        </div>
        </section>
    
    )
}

export default Imag
