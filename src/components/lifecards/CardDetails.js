import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'


class CardDetails extends Component{
    render(){

    
    console.log(this.props)
    
        return(
            
            <Modal show={this.props.showModal} onHide={this.props.hideModal} size="lg"  >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">{this.props.lifecard.name} 
                   
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
                    <small>Age:{this.props.lifecard.age}</small>
                </div>
                <Modal.Body>
                    <img src= {this.props.lifecard.img} alt=""/>
                    <p> {this.props.lifecard.content}</p>
                </Modal.Body>
                <Modal.Body>
         
                    <img src="https://img.pngio.com/colorful-bar-graph-icon-transparent-png-svg-vector-bar-graph-png-512_512.png" alt=""/>
                    <p> text in a modal!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.hideModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.hideModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        )
    }
    }

    const mapStateToProps=(state)=>{
        return{
            lifecards: state.lifecard.lifecards
        }
    }



export default connect(mapStateToProps)(CardDetails);