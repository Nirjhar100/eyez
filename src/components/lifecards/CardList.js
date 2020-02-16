import React,{Component} from 'react'
import LifeCard from './LifeCard'
import {connect} from 'react-redux'


const CardList =({lifecards})=>{
    
        console.log(lifecards);
        return(
            
            <div className="row">
            
                {lifecards&&lifecards.map(lifecard=>{
                    return(
                        <div className="col s12">
                        <LifeCard lifecard={lifecard} />
                        <br/><br/>
                        </div>
                    )
                })}
            
            </div>
        )
    
}



export default CardList ;