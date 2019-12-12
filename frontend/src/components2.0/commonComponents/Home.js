import React from 'react'
import LazyHero from 'react-lazy-hero'

const heroStyle = {
  color: 'black',
  fontSize: '100px'
  // backgroundColor: 'grey'
}

const subtitle = {
  fontSize: '40px'
}

const Hero = () => {
  return <div className="hero">
    <LazyHero imageSrc="https://media.giphy.com/media/l4Ki6RXMtgJ5N8n0Q/giphy.gif">
      <h1 style={heroStyle}>The Vault</h1>
      <p style={subtitle}>Unlock your lifestyle...</p>
    </LazyHero>
  </div>
}

export default Hero