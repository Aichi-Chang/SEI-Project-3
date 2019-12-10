import React from 'react'
import UseAxios from '../UseAxios'
import CommunityCard from './CommunityCard'

const CommunityListing = () => {
  const data = UseAxios('/api/communities')
  console.log(data)
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {data.map((community, index) => {
            return <CommunityCard key={index} article={community}/>
          })}
        </div>
      </div>
    </div>
  )
}
export default CommunityListing