import React from 'react'
import UseAxios from '../commonComponents/UseAxios'
import ClothingCard from './ClothingCard'
import 'bulma'

const ClothesListing = () => {
  const data = UseAxios('/api/clothing')
  // console.log(data) 
  return (
    <div className="section">
      <h1 className="titleOne">Browsing to Swap?</h1>
      <h2 className="titleTwo"> Our Head of Clothing, Lucy, shares her top picks..</h2>
      <div className="container">
        <div className="titleThree">
          <div className="columns is-mobile is-multiline">
            {data.map((clothing, index) => {
              return <ClothingCard key={index} item={clothing} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClothesListing