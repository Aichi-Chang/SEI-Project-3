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
    <LazyHero 
      imageSrc="https://66.media.tumblr.com/tumblr_m4shinrmkZ1qdk1qco1_r1_1280.jpg" 
      parallaxOffset={100} 
      opacity={0.7}
      minHeight={'120vh'}
      style={{ overflow: 'hidden' }}>
      <header className='tc pv4 pv5-ns'>
        <h1 className='f5 f4-ns fw6 mid-gray'>Jasper Whitehouse</h1>
        <h2 className='f6 gray fw2 ttu tracked'>Los Angeles</h2>
      </header>
      <h1 className='bg-red'>The Vault</h1>
      <p style={subtitle}>Unlock your lifestyle...</p>
    </LazyHero>
  </div>
}

export default Hero