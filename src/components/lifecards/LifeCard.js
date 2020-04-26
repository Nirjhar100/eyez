import React,{Component,useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import CardDetails from './CardDetails'
import {connect} from 'react-redux'


const LifeCard =({lifecard})=>{

    const [show, setShow] = useState(false);
    function toggle(){
        setShow(!show);
    }

    return(
    
        <div className="container">
            <Accordion defaultActiveKey="1">     
            <Card bg="info" text="white" border="light" style={{ width: '20rem' }} className="lcid" >
            <Card.Header>
            
            <div className="chip">
             Tag1
            </div>
            
            <div className="chip">
                Tag2
                <i className="close material-icons">close</i>
            </div>
            <div className="chip">
                Tag3
            </div>
            </Card.Header>
           
            <Card.Title>
                {lifecard.name}
        
            </Card.Title>
            
            <div className="row">
            <Link to="" className="col s6" onClick={() => setShow(true)} >
            <Image src="https://pvnbooks.com/storage/settings/pvn-default_author_image.jpg" className="col s12" roundedCircle />
            </Link>
           
            <Card.Text className="col s6">
            {lifecard.content}
            </Card.Text>
            {show ? <CardDetails show={show} hide={toggle} lifecard={lifecard} key={lifecard.id}/> :null}

            </div>  
            <small>Age:{lifecard.age}</small>
            <div>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            
                <Card.Text>
                example text to build on the card title and make up the bulk of
                the card's content....
                {lifecard.content}
                {lifecard.content}
                </Card.Text>
                
                
               
               
                
                
                
                </Card.Body>
            
            </Accordion.Collapse>
            </div>
            
            <Card.Footer >   
            <div className="chip">
                Tag4
            </div>
            <div className="chip">
                Tag5
                    
            </div>
            
            
            <Accordion.Toggle as={Button} eventKey="0" className="yellow darken-3 right">
           
                <i className="material-icons">
                    expand_more
                </i>
             
                </Accordion.Toggle>
           
            
            </Card.Footer>
            </Card> 
            </Accordion>
        
           
       
        </div>
        
    )
    
}




export default LifeCard;