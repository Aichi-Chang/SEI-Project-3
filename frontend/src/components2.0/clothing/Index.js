import React from 'react'
import UseAxios from '../commonComponents/UseAxios'
import ClothingCard from './ClothingCard'
import 'bulma'

const ClothesListing = () => {
  const data = UseAxios('/api/clothing')
  // console.log(data) 
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {data.map((clothing, index) => {
            return <ClothingCard key={index} item={clothing}/>
          })}
        </div>
      </div>
    </div>
  )
}
export default ClothesListing