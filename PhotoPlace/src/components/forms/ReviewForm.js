import React from 'react'

const ReviewForm = props => (
 <form onSubmit={props.onSubmit}>
  <h2>{props.title}</h2>
  <fieldset>
      Rating:&nbsp; &nbsp; 
      <select style={{width: "60px"}} className="form-control rating" id="exampleSelect1" name="rating" value={props.rating} onChange={props.onChange}>
        <option value={0}></option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    <div className="form-group">
      <label htmlFor="exampleTextarea">Comment</label>
      <textarea className="form-control" id="exampleTextarea" rows={3} name="comment" value={props.comment} onChange={props.onChange} />
    </div>
    <button type="submit" className="btn btn-primary">{props.btnValue}</button>
  </fieldset>
</form>

)

export default ReviewForm