import React, { Component } from 'react';
import './navbar.css';
import mainComponent from './mainComponent';



class NavBar extends Component {
    constructor(props){
        super(props);

    }
    render(){   
        
        
         let Detailed  = this.props.updates
       
         
         
   
        return(
            <div className='parent-container'>
                    
            <div className='right-container'>
               
                <div className="column_1" id="data">
                    <h2>Name</h2>
                </div>
                <div className="column_1" id="data">
                    <h2>Description</h2>
                </div>
                <div className="column_1" id="data">
                    <h2>Category</h2>
                </div>
         

            
            {Detailed.map(Detailed=><div className='row' key={Detailed.name}>
            <div className='column'>{Detailed.name}</div>
            <div className='column'>{Detailed.description}</div>
            <div className = 'column'>{Detailed.category} </div>               
            </div>
                )}
            
              
                   
                </div>
            
            

            </div>
           

        )
    }
}
export default  NavBar;