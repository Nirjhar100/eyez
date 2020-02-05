import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'
import CardDetails from './CardDetails'
import {connect} from 'react-redux'


class LifeCard extends Component{

    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    handleClick=(e)=>{
        console.log('')
        
    }
    render(){
    const {lifecard}=this.props
    return(
    
        <div className="container ">
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
                {this.props.lifecard.name}
        
            </Card.Title>
            
            <div className="row">
            <Link to="" className="col s6" onClick={this.showModal} >
            <Image src={this.props.lifecard.img} className="col s12" roundedCircle />
            </Link>
           
            <Card.Text className="col s6">
            {this.props.lifecard.content}
                </Card.Text>

            </div>  
            <small>Age:{this.props.lifecard.age}</small>
            <div>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            
                <Card.Text>
                example text to build on the card title and make up the bulk of
                the card's content....
                </Card.Text>
                
                
                {this.state.show ? <CardDetails showModal={this.showModal} hideModal={this.hideModal} lifecard={lifecard} key={lifecard.id}/> :null}
               
                <button className="btn btn-secondary" onClick={this.showModal}>
                    <small className="text-white">View Profile</small>
                   
                </button>
               
                
                
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
}

const mapStateToProps=(state)=>{
    return{
        lifecards: state.lifecard.lifecards
    }
}


export default connect(mapStateToProps)(LifeCard);