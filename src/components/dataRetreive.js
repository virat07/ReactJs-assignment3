    import React, { Component } from 'react';
    import './navbar.css';
    import Parent from './mainComponent';

    class DataRetreive extends Component {
        constructor(props){
            super(props);
            this.state = {
                suggest :[],
                category:[]
                
            
                    
            }
            this.fetchData = this.fetchData.bind(this);
        }
       
        componentDidMount(){
            this.fetchData();
           
        }
     
    handleDisplay(e){
            console.log(e.target.id)
            if(e.target.id === 'All'){
                this.props.ParentMethod(this.state.suggest)
            }
            else{
            let user = this.state.suggest[e.target.id];
            this.props.ParentMethod(user);
            }   
                      
        }

            
        
        
        
        //http://www.json-generator.com/api/json/get/cfOBMwufuG?indent=2
        fetchData(){
                fetch("http://www.json-generator.com/api/json/get/ceznuAjGxu?indent=2",{
                    method:"GET",
                    dataType:"JSON",                
                })
                .then((resp)=>{
                    return resp.json()
                })
                .then((resp)=>{
                    
                    this.setState({suggest:resp.books})
                    this.setState({category:resp.Category})
                    
                })
                .catch((error)=>{
                    console.log(error,"catch me if you can")
                })
        }
        render(){
            const {category} = this.state;  

            return(
                <div className='Parent-container'>
                <div className="left-container" id="category">
                
                <ul  className='List' id="List" onClick={this.handleDisplay.bind(this)}> 
                
                    {category ? Object.keys(category).map((key)=>{
                        return <li  key ={key} id={key}>{category[key]}
                        </li>
                    }): ''}
                </ul>
                </div>
       
                    
            
            
            </div>
            )
        }
    }
    export default  DataRetreive;