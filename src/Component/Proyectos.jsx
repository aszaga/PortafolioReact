import React from 'react';
import podc from './../imagenes/podc.jpg';
import Equipo from './../imagenes/Equipo.png';
import BlackCode from './../imagenes/BlackCode.png';
import logo from './../imagenes/logo.jpg';
import Form from './../imagenes/Form.PNG';
import documentacion from './../imagenes/documentacion.png';
import {Col,Row} from 'react-bootstrap'


export default class Proyectos extends React.Component {
    
    render(){
       
      return (
        <div id="proyecto">
          <div>
            <h2 className="text-center">PROYECTOS</h2>
           </div>
            <section id="projects" className='text-center'>
              <Row>
                <Col>
                  <article className="project-tile" id="Podcast">
                      <div>
                          <h5>Podcast</h5>
                          <img src={podc} alt="..."/>
                          <div>
                            <a href= "https://aszaga.github.io/podcast/ ."  target="blanck" >Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="Trabajo_en_equipo">
                      <div>
                          <h5>Trabajo en Equipo</h5>
                          <img src={Equipo} alt="..."/>
                          <div>
                            <a href="https://aszaga.github.io/Equipo/"  target="blanck">Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="Trabajo_Colaborativo">
                      <div>
                          <h5>Trabajo Colaborativo</h5>
                          <img src={BlackCode} alt="..."/>
                          <div>
                            <a href="https://aszaga.github.io/TheBlackCode/."  target="blanck">Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                </Row>
                <Row>
                <Col>
                  <article className="project-tile" id="Pagina_Documentacion">
                      <div>
                          <h5>Pagina Documentación</h5>
                          <img src={logo} alt="..."/>
                          <div>
                            <a href="https://aszaga.github.io/PaginaDocumentacion/ "  target="blanck">Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="Formulario">
                      <div>
                          <h5>Formulario</h5>
                          <img src={Form} alt="..."/>
                          <div>
                            <a href="https://aszaga.github.io/Formulario/"  target="blanck" >Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
                <Col>
                  <article className="project-tile" id="Documents">
                      <div>
                          <h5>Documents</h5>
                          <img src={documentacion} alt="..."/>
                          <div>
                            <a href=" https://aszaga.github.io/Documentacion/"  target="blanck">Ingresar</a>
                          </div>
                        </div>
                  </article>
                </Col>
              </Row>
            </section>
        </div>
        )
    }
}