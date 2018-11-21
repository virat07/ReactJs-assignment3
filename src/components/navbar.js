import React, { Component } from 'react';
import './navbar.css';
import DataRetrive from './dataRetreive';



class NavBar extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className='parent-container'>
                    <DataRetrive/>
            <div className='right-container'>
                <div className="row">
                <div className="column_1" id="data">
                    <h2>Name</h2>
                </div>
                <div className="column_1" id="data">
                    <h2>Description</h2>
                </div>
                <div className="column_1" id="data">
                    <h2>Category</h2>
                </div>
            </div>
            <div>
                 {this.props.id}
;            </div>
            </div>
            </div>

        )
    }
}
export default  NavBar;