import React from 'react'
import {Image} from 'react-bootstrap'

const Page = (props) => {
  return (
    <div>
     
       <Image src={props.icon} /> 
       <h1>{props.title}</h1>
     


    </div>
  );
}

export default Page
