import React,{useState,useEffect} from "react";
import { Container,Row,Col } from "reactstrap";

import "./App.css"
import axios from "axios";

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
        <h1>Profiles</h1>
    )
    
    
}
export default App;