
import { SignIn } from '@clerk/react-router'
import React from 'react'



const centeredstyle ={
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#161B40',
}
export default function () {
  return (
  <div style ={centeredstyle}>
  <SignIn fallbackRedirectUrl="/dashboard"/>
 
  </div>
  )
}