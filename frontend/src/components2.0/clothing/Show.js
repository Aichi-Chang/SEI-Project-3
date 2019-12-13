import React, { useState, useEffect } from 'react'
// import UseAxios from '../commonComponents/UseAxios'
import axios from 'axios'
import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'
import Rating from '../commonComponents/Rating'


const SingleClothing = (props) => {
  const [data, setData] = useState( { comments: [] })


  useEffect(() => {
    fetch(`/api/clothing/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
  },[])


  function handleDelete(e) {
    axios.delete(`/api/clothing/${props.match.params.id}/comments/${e.target.id}`, {
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
            {data.department}
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
          url={`/api/clothing/${props.match.params.id}/comments`}
          updateData={setData}
          data={data}
        />

        <div className='columns'>
          <div className='column'>
            {data.comments.map((comment) => 
              <div className="is-half" 
                key={comment._id} > 
                <div>{comment.content}</div>
                <br />
                {/* <div>from {`${Auth.getUser().username}`}</div> */}
                <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
              </div>
            )}
          </div>
        </div> 
      </div>
    </div>
  </div> 

}


export default SingleClothing