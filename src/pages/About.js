import React from 'react'
import NavBar from '../components/NavBar'
import './style.css'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <NavBar />
        <div className="about-section">
          <div className="description">
            <h1>About Us</h1>
            <p>Chez Berisoft, nous façonnons l'avenir avec des logiciels innovants. 
            Notre mission est de créer un monde où la technologie rencontre la 
            créativité pour inspirer et transformer.
            Nous nous spécialisons dans le développement sur mesure de solutions
            logicielles qui dépassent les attentes. Que vous soyez une start-up
            ambitieuse ou une entreprise établie, notre équipe passionnée combine
            expertise technique et vision artistique pour donner vie à des idées uniques</p>
          </div>
        </div>

        <div className="vision-section">
          <div className="vision-description">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ex, aspernatur omnis rerum,
            nam, molestiae aperiam molestias sunt deleniti
            delectus ut perferendis nesciunt illum ullam. 
            Exercitationem non amet praesentium dolorem sapiente!</p>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default About
