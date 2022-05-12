import React from "react";
import {Card,CardBody,CardTitle,CardText} from "reactstrap"
import {FaPhone,FaEnvelope,FaMapMarkedAlt} from "react-icons/fa"
const Mycard=({details})=>{
    return (
        <Card>
            <CardBody>
                <img
                height="150"
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large} 
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span className="pr-2">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaPhone/>
                    <FaEnvelope/>
                    <FaEnvelope/>
                </CardText>
            </CardBody>
        </Card>
    )
}
export default Mycard;