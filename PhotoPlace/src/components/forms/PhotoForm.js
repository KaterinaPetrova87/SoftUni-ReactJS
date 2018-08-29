import React from 'react'
import Input from './../common/Input'

const PhotoForm = props => (
  <form onSubmit={props.onSubmit}>
    <fieldset>
    <Input
        placeholder="Title"
        type="text"
        name='title'
        value={props.title}
        onChange={props.onChange} 
        error={props.errors.title}/>
      {/* <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={props.title}
          onChange={props.onChange} />
      </div> */}
      <div className="form-group">
        <label>Select category</label>
        <select
          className="form-control"
          id="exampleSelect1"
          name='category'
          value={props.category}
          onChange={props.onChange}>
          <option value="Animals">Animals</option>
          <option value="Macro">Macro</option>
          <option value="Nature">Nature</option>
          <option value="People">People</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <Input
        placeholder="Photo"
        type="text"
        name='photo'
        value={props.photo}
        onChange={props.onChange} 
        error={props.errors.photo}/>
      {/* <div className="form-group">
        <label>Photo</label>
        <input
          type="text"
          className="form-control"
          name='photo'
          value={props.photo}
          onChange={props.onChange} />
      </div> */}
      <div className="form-group">
        <img height="100px" src={props.photo} alt={props.photo}/>
      </div>
      <div className="form-group">
        <label>Description (optional)</label>
        <textarea
          className="form-control"
          id="exampleTextarea"
          rows="3"
          name='description'
          value={props.description}
          onChange={props.onChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">{props.btnValue}</button>
    </fieldset>
  </form>

)

export default PhotoForm