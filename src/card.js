import React from "react";
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaPhone,FaEnvelope,FaMapMarkedAlt} from "react-icons/fa"
const Mycard=({details})=>{
    return (
        <div className="card" style="width: 18rem;">
  <img src={details.picture?.large} className="card-img-top" alt="..."/>

  <div className="card-body">

    <h5 className="card-title">
    <span>{details.name.title}</span>
    <span>{details.registered.phone}</span>
    <span>{details.dob.age}</span>
    </h5>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{details.location.city}</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    )
}
export default Mycard;