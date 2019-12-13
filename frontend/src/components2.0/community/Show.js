import React, { useState, useEffect } from 'react'
import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map from '../commonComponents/Map'

import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'
import Rating from '../commonComponents/Rating'




const SingleCommunity = (props) => {
  const [data, setData] = useState({ comments: [] })
  // const [viewport, setViewport] = useState({
  //   width: 800,
  //   height: 500,
  //   longitude: -0.12743,
  //   latitude: 51.5074,
  //   zoom: 14,
  //   bearing: 0,
  //   pitch: 0
  // })
  // const [event, setEvent] = useState({})
  // const [info, setInfo] = useState(null)
  


  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
      // .then(res => setEvent({ event: res }))      
  }, [])


  function handleDelete(e) {
    axios.delete(`/api/communities/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }


  
  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="titleFour">
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
          <Rating className="rating" />
        </div>

        <CommentForm 
          url={`/api/communities/${props.match.params.id}/comments`}
          updateData={setData}
          data={data}
        />

        <div className='columns'>
          <div className='column'>
            {data.comments.map((comment) => 
              <div className="is-half" 
                key={comment._id}> 
                <div>{comment.content}</div>
                <br />
                {/* <div>from {`${Auth.getUser().username}`}</div> */}
                <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
              </div>
            )}
            <div className='column'>
              <Map  data={data}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div> 

}


export default SingleCommunity