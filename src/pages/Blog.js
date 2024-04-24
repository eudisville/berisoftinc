import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './style.css'

function Blog() {
  return (
    <div>
      <NavBar />
        <div className="blog-section">
            <div className="blog-items">
                <h1>Blog</h1>
                
                <div className="blog-articles">

                    <div className="article">
                      <div className="post"></div>
                      <h3>Content</h3>
                      <p>Date</p>
                    </div>

                    <div className="article">
                      <div className="post"></div>
                      <h3>Content</h3>
                      <p>Date</p>
                    </div>
                    
                    <div className="article">
                      <div className="post"></div>
                      <h3>Content</h3>
                      <p>Date</p>
                    </div>

                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Blog