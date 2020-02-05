import React, { Component } from 'react';
import {Form,FormControl,Button} from 'react-bootstrap'

class Intro extends Component {
    render() {
        return (
            
                <div>
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button  variant="info">Search</Button>   
                </Form>
                <br/><br/>
                    <img src="https://img.pngio.com/colorful-bar-graph-icon-transparent-png-svg-vector-bar-graph-png-512_512.png" alt=""/>
                    <img src="https://img.pngio.com/colorful-bar-graph-icon-transparent-png-svg-vector-bar-graph-png-512_512.png" alt=""/>
                   
                </div>
                
                
            
        );
    }
};
  
export default Intro;