import React,{Component} from 'react'
import CardList from '../lifecards/CardList'
import Intro from '../carousels/Intro'
import {connect} from 'react-redux';
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'


class Home extends Component{
    
    render(){
        const {lifecards}=this.props.lifecards;
        return(
            <div className="container">
                <div className="intro">
                    <Intro/>
                </div>
                <CardList lifecards={this.props.lifecards} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        lifecards: state.firestore.ordered.lifecards||state.lifecard.lifecards
    }
}

export default compose(
    firestoreConnect(['lifecards']),
    connect(mapStateToProps),
)(Home);