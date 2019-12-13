import React from 'react'


const MapInfo = ({ info }) => (
  <div>
    <div>{info.title}</div>
    <div>{info.address}</div>
    <img width={240} src={info.image} />
    <div>
      <a href={info.website} target='_blank'>More Info</a>
    </div>
  </div>
)

export default MapInfo