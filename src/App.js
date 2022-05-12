import React,{useState,useEffect} from "react";
import { Container,Row,Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import axios from "axios";
import Mycard from "./card";

const App=()=>{
    const[details,setDetails]=useState({});
    const getDetails= async() =>{
        const {data}=await axios.get('https://randomuser.me/api/')
        console.log("response :",data)
        const details=data.results[0];
        setDetails(details);
    }
    useEffect(()=>{
        getDetails();
        
    },[])
    return(
        <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Mycard details={details} />
        </Col>
      </Row>
    </Container>
    )
    
    
}
export default App;