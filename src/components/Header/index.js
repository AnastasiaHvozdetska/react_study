import React, { Component } from 'react';
import { Button } from '../ui/misc'
// import { Link } from 'react-router-dom';



export default class Header extends Component {
  render() {
    return (
     <div>
         Header

         <Button
            bck="#3e3743"
            size="50px"
            color="#ffffff"
            add={{
              boxShadow: '2px 2px 2px #000'
            }}
          >
             Click me
         </Button>

         <Button
            bck="#234743"
            size="20px"
            color="#e6e6e6"
            add={{
              boxShadow: '3px 3px3px #000'
            }}
          >
             Click me
         </Button>
     </div>
    )
  }
}