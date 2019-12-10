import React from 'react'
import useAxios from './UseAxios'
import ClothingCard from './ClothingCard'

const ClothesListing = () => {
  const data = useAxios('/api/clothing')
  console.log(data)
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {data.map((clothes, i) => {
            return <div key={i}>
              <img src={clothes.image} alt="Placeholder image"/>
              <p>{clothes.title}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default ClothesListing