import React from 'react'
import UseAxios from '../commonComponents/UseAxios'
import CommunityCard from './CommunityCard'

const CommunityListing = () => {
  const data = UseAxios('/api/communities')
  // console.log(data)
  return (
    <div className="section">
      <h1 className="titleOne">After cool places to check out?</h1>
      <h2 className="titleTwo"> Our Head of Community, Aichi, shares her hot spots..</h2>
      <div className="container">
        <div className="titleThree">
          <div className="columns is-mobile is-multiline">
            {data.map((community, index) => {
              return <CommunityCard key={index} article={community} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CommunityListing