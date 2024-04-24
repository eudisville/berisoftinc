import React from 'react'
import NavBar from '../components/NavBar'
import './style.css'
import Footer from '../components/Footer'


function Home() {

  return (
    <div>
      <NavBar />

      <header>
        <div className="header-main">
          <h1>Inspire and Transform the World</h1>
          <p>Welcome to our website. Happy visiting to you !</p>
          <button>Scroll</button>
        </div>
      </header>

      <main>
        <div className="about" >
          <div className="about-text">
            <h1>About Us</h1>
            <p>At Berisoft, we are shapping the future
            with innovative software. Our mission is to create a world where
            technology meets creativity to inspire and transform.
            </p>
          </div>
          <div className="about-image"><img src="B2.jpg" alt="" /></div>
        </div>

        <div className="products">
          <div className="product">
            <h1>Our Products</h1>
            <p>Explore our range of software thoughtfully designed
            to meet your business needs, whether you're looking for
            increased efficiency, optimal user experience, or 
            disruptive innovation.</p>
          </div>
        </div>
        <div className="blog">
          <div className="blog-item">
              <h1>Blog</h1>
              <p>Nous partageons régulièrement notre expertise et 
              nos idées pour vous tenir informé et inspiré. Que 
              vous soyez un professionnel de la tech, un entrepreneur
              ambitieux ou simplement un passionné de l'innovation,
              notre blog est votre source d'inspiration.</p>
            </div>
        </div>
        <Footer />

      </main>
    </div>
  )
}

export default Home;