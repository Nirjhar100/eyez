import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'


const CardDetails =({show,hide,lifecard})=>{
        return(
            
            <Modal show={show} onHide={hide} size="lg"  >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">{lifecard.name} 
                   
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
                        <div className="chip">
                            Tag4
                        </div>
                        <div className="chip">
                            Tag5
                        
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <div>
                    <small>Age:{lifecard.age}</small>
                </div>
                <Modal.Body>
                    <img src= {lifecard.img} alt=""/>
                    <p> {lifecard.content}</p>
                </Modal.Body>
                <Modal.Body>
         
                    <img src="https://img.pngio.com/colorful-bar-graph-icon-transparent-png-svg-vector-bar-graph-png-512_512.png" alt=""/>
                    <p> text in a modal!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        )
}
   




export default CardDetails;