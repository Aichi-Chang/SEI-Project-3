import React from 'react'
import UseAxios from '../UseAxios'

const SingleCommunity = (props) => {
  const data = UseAxios(`/api/communities/${props.match.params.id}`)
  // console.log(community)
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.image} />
      <p>{data.text}</p>
    </div>
  )
}
export default SingleCommunity