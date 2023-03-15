import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Alta Capital Group</title>
        <meta property="og:title" content="Alta Capital Group" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e1827cd9-5947-4248-8d64-1c7048008b1d/65390366-e6ef-4fd8-9820-5147a7892466?org_if_sml=1"
        />
      </Helmet>
      <header className="home-container1">
        <img
          alt="image"
          src="/playground_assets/01-acg-rectangle_200_72ppi-200h.png"
          className="home-image"
        />
        <div className="home-container2">
          <span className="home-text">Borrow</span>
          <span className="home-text1">Brokers</span>
          <span className="home-text2">About Us</span>
          <span className="home-text3">Resources</span>
          <span className="home-text4">
            <span>Contact</span>
            <br></br>
          </span>
        </div>
        <button type="button" className="home-button button">
          Get a Quote
        </button>
      </header>
    </div>
  )
}

export default Home
