import React, { useState, useEffect } from 'react'
import UseAxios from '../commonComponents/UseAxios'
import axios from 'axios'
import Auth from '../../lib/auth'
import CommentList from '../commonComponents/CommentList'
import Form from '../commonComponents/Form'
import Comment from '../commonComponents/Comment'

const SingleCommunity = (props) => {
  // const data = UseAxios(`/api/communities/${props.match.params.id}`)

  
  const [data, setData] = useState( { comments: [] } )
  // const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    errors: {}
  })

  useEffect(() => {
    fetch(`/api/communities/${props.match.params.id}`)
      .then(res => res.json())
      .then(res => setData(res))
  },[])


  // useEffect(() => {
  //   // loading
  //   setLoading(true)

  //   // get all the comments
  //   axios.get(`/api/communities/${props.match.params.id}`)
  //     .then(resp => resp.json())
  //     .then(res => setComment({ comments: res.data }))
  //     .then(() => setLoading(false))
  //     .catch(err => console.log(err))
  // }, [])

  function addComment(e) {
    // e.persist()
    e.preventDefault()
    axios.put(`/api/communities/${props.match.params.id}/comments`, data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => props.history.push(`/communities/${props.match.params.id}`))
      .catch(err => setErrors({ ...err, errors: err.data }))
  }

  // this.addComment = this.addComment.bind(this)


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

        <div className="App container bg-light shadow">
          <div className="row">
            <div className="col-4  pt-3 border-right">
              <h6>Leave your comment here</h6>
              <Form addComment={addComment}/>
            </div>
            <div className="col-8  pt-3 bg-white">
              {data.comments.map(comment => 
                <p key={comment._id}> {comment.text} </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}


export default SingleCommunity