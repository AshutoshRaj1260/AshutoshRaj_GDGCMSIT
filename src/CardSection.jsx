import { FaLocationDot } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { MdLuggage } from "react-icons/md";

import Card from "./Components/Card";
 import React from 'react'
 
 function CardSection() {
   return (
     <div className="flex w-full justify-center gap-5">
        <Card Icon = {FaHandsHelping} dataValue={25000} Text='Guides'/>
        <Card Icon = {MdLuggage} dataValue={20000} Text='Tours'/>
        <Card Icon = {FaLocationDot} dataValue={20000} Text='Destinations'/>
     </div>
   )
 }
 
 export default CardSection