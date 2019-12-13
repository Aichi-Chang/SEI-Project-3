import React from 'react'
import 'bulma'

const About = () => {
  return <div>
    <h1 className="titleOne">
      About
    </h1>
    <div className="columns has-text-centered">
      <div className="column is-one-quarter">
        <h2 className="titleTwo">Lucy Casey</h2>
        <a href='https://www.linkedin.com/in/lucy-casey-02b815114/'>
          <img src='/images/currentImg/L.jpg'/>
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>

      <div className="column is-one-quarter">
        <h2 className="titleTwo">Aichi Chang</h2>
        <a href='https://www.linkedin.com/in/aichi-chang-22311659/'>
          <img src='/images/currentImg/A.jpg'/>
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>
      <div className="column is-one-quarter">
        <h2 className="titleTwo">Soina Choudhury</h2>
        <a href='https://www.linkedin.com/in/sonia-choudhury-42b018bb/'>
          <img src='/images/currentImg/S.jpg'/>
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>
      <div className="column is-one-quarter">
        <h2 className="titleTwo">Sarah Wood</h2>
        <a href='https://www.linkedin.com/in/sarah-wood-57b407168/'>
          <img src='/images/currentImg/S.jpg'/>
        </a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>
    </div>
  </div>
}

export default About