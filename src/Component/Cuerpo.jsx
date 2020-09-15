import React from 'react';
import NavBar from './navreact';
import Imag from './Imag'
import Proyectos from './Proyectos';
import './../App.css'
import Footer from './Footer';

export default class Cuerpo extends React.Component {
    
    render(){
       
        return (
            <section>
                <div>
                    <div className="py-1 mb-5" >
                        <NavBar/>
                    </div>
                    <div >
                        <Imag/>
                    </div>
                    <div>
                        <Proyectos/>
                    </div>
                    
                    <div className="p-3">
                        <Footer/>
                    </div>
                </div>
            </section> 
        )
    }
}