import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi"
import { Button } from 'react-bootstrap'
import './Style.css';

export const Searchbar = () => {
    const [show, setShowResults] = useState(false)
    const onClick = () => setShowResults(!show)
    const Results = () => (
        <input type="text" className="input" placeholder="Search..."/>
    )
  return (
    <div className="search">
    {
        show?<Results />: null
    }
        <Button className="btn-cls" onClick={onClick}>
           <FiSearch color="black"/>
        </Button>
    </div>
  )
}
