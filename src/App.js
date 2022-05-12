import React,{useState,useEffect} from "react";
import { Container,Row,Col } from "reactstrap";

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
        <Container fluid>
        <Mycard details={details}/>
        </Container>
    )
    
    
}
export default App;