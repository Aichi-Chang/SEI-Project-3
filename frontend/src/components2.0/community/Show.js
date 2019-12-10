import React from 'react'
import UseAxios from '../UseAxios'

const SingleCommunity = (props) => {
  const data = UseAxios(`/api/communities/${props.match.params.id}`)
  // console.log(community)
  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="title">
            {data.title}
          </p>
          <p className="subtitle">
            {data.address}
          </p>
          <p>
            {data.text}
          </p>
        </div>
        <div className="column is-half-tablet">
          <img src={data.image} />
        </div>
      </div>
    </div>
  </div>
}
export default SingleCommunity