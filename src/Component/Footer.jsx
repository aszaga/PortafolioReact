import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className="footer container-fluid">
            <footer >
                    <div>
                        <div className="datos">
                        <hr></hr>
                            <h3>Astrid Z</h3>
                            <h3>|</h3>
                            <h3>astridzaga@gmail.com</h3>
                         
                        </div>
                       
                        <section>
                            <div className="text-center">
                                <span className="m-4" >© 2020 Medellín-Colombia
                                    <a href="https://www.linkedin.com/in/astrid/" target="blanck"><i className="fab fa-linkedin fa-lg m-2"></i></a>
                                    <a href="https://github.com/aszaga" target="blanck"><i className="fab fa-github fa-lg" aria-hidden="true"></i></a>
                                </span>
                            </div>
                        </section>
                    </div>
            </footer>
        </div>
    )
}

export default Footer
