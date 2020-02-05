import React,{Component} from 'react'
import LifeCard from './LifeCard'
import {connect} from 'react-redux'


class CardList extends Component{
    
    render(){
        const {lifecards}=this.props;
        return(
         
            <div className="row">
            
                {lifecards&&lifecards.map(lifecard=>{
                    return(
                        <div className="col s12">
                        <LifeCard lifecard={lifecard} key={lifecard.id}/>
                        <br/><br/>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        lifecards: state.lifecard.lifecards
    }
}

export default connect(mapStateToProps)(CardList) ;