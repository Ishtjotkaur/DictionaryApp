import React, { Component } from 'react'
import "./Dictitem.scss"

export class Dictitem extends Component {

    
  render() {
    let {word,definition,exp, author,written_on}=this.props;
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 
    return (
      <div className="card" >
      <div className="card-body">
        <div>
        <h2 className="card-title text-center"><strong>{capitalizeFirstLetter(word)}</strong></h2>
        <div className='d-flex justify-center mx-auto'>
        <i className="fa-brands fa-instagram m-1"></i>
        <i className="fa-brands fa-twitter m-1"></i>
        <i className="fa-brands fa-facebook m-1"></i>
        </div>
        </div>
        <div className="con my-5"><p className="card-text" >{definition}</p></div>
        <div className='yee'><p style={{fontStyle:'italic'}}>{exp}</p></div>
        <p className="card-text"><small className="text-muted">By {!author? "Unknown": author} on {new Date(written_on).toGMTString()} </small></p>
        <div className="d-grid gap-2 d-md-block mx-3">
        <i style={{color:"red", fontSize:"22px"}} className="fa-solid fa-heart mx-2"></i>
        <i style={{color:"red",fontSize:"22px"}} className="fa-solid fa-heart-crack mx-2"></i>
        </div>
      </div>
      </div>
    )
  }
}

export default Dictitem
