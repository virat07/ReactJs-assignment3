import React, { Component } from 'react';
import './navbar.css';

class DataRetreive extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggest :[],
            category:[],
            data :{ }
           
                
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
    }
   handleDisplay(e){
        console.log(e.target.id)
        let user = this.state.suggest[e.target.id];
        for (let i in (user)) {       
        console.log(user[i].name);
      
      }
        this.state.data= user;
            console.log(this.state.data)
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
                console.log(resp);
                this.setState({suggest:resp.books})
                this.setState({category:resp.Category})
                
            })
            .catch((error)=>{
                console.log(error,"catch me if you can")
            })
    }
    render(){
        return(
            <div className='Parent-container'>
            <div className="left-container" id="category">
            
            <ul  className='List' id="List" onClick={this.handleDisplay.bind(this)}>
              
                 {this.state.category ? Object.keys(this.state.category).map((key)=>{
                     return <li id={key}>{this.state.category[key]}
                    </li>
                 }): ''}
            </ul>
            <div className='right-container'>
                 {this.state.data?Object.keys(this.state.data).map((keys)=>{
                     return <li id={key}>{this.state.data.name}</li>
                 }
                 }):''}
            </div>

           
        </div>
        </div>
        )
    }
}
export default  DataRetreive;