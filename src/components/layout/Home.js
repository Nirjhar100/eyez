import React,{Component} from 'react'
import CardList from '../lifecards/CardList'
import Intro from '../carousels/Intro'
import {connect} from 'react-redux';

class Home extends Component{
    
    render(){
        const {lifecards}=this.props.lifecards;
        return(
            <div className="container">
                <div className="intro">
                    <Intro/>
                </div>
                <CardList lifecards={lifecards} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        lifecards: state.lifecard.lifecards
    }
}

export default connect(mapStateToProps)(Home);