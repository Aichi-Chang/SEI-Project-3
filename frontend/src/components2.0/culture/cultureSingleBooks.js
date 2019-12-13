import React, { useState, useEffect } from 'react'
// import UseAxios from '../commonComponents/UseAxios'
import axios from 'axios'
import Auth from '../../lib/auth'
import CommentForm from '../commonComponents/CommentForm'
import CultureRating from '../commonComponents/Rating'

const SingleBooks = (props) => {
  const [data, setData] = useState( { comments: [] })


  useEffect(() => {
    fetch(`/api/culture-books/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
  },[])


  function handleDelete(e) {
    axios.delete(`/api/culture-books/${props.match.params.id}/comments/${e.target.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => setData(res.data)) 
  }

  // render() {
  //   console.log(data)
  //   if (this.state.err === 404) {
  //     return <h1>404</h1>
  //   }
  return <div className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-half-tablet">
          <p className="titleFour">
            {data.title}
          </p>
          <p className="subtitle">
            {data.author}
          </p>
          <p>
            {data.review}
          </p>
          <p>
          Vault Rating: {data.rating}
          </p>
        </div>
        <div className="column is-half-tablet">
          <img src={data.image} />
          
        </div>
      </div>
    
  

      <CommentForm 
        url={`/api/culture-books/${props.match.params.id}/comments`}
        updateData={setData}
        data={data}
      />

      <div className='columns'>
        <div className='column'>
          {data.comments.map((comment) => 
            <div className="is-half" 
              key={comment._id} > 
              <div className="commentmessage">{comment.content}</div>
              <br />
              {/* <div>from {`${Auth.getUser().username}`}</div> */}
              <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
            </div>
          )}
          <div className='column'>
          </div>
        </div>
      </div> 
    </div>
  </div>

}

export default SingleBooks