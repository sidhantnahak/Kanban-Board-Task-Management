import React from 'react'
import { useLocation, useNavigate,Link } from 'react-router-dom'

const Notfound = () => {
    const location=useLocation();
    const navigate=useNavigate();

  return (

    <div style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",gap:"2rem",justifyContent:"center",fontSize:"1.2rem"}}><Link style={{padding:"0.8rem 1.3rem",background:"red", color:"white",boxShadow:"1px 1px 4px black",cursor:"pointer"}} >Page Not Found </Link><Link style={{padding:"0.8rem 1.3rem",background:"red",color:"white",fontSize:"1.2rem",boxShadow:"1px 1px 4px black",cursor:"pointer"}} onClick={()=>window.history.go(-1)}>Go Back</Link> </div>
  )
}

export default Notfound