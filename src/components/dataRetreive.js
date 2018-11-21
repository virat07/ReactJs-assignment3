import React, { Component } from 'react';
import './navbar.css';

class DataRetreive extends Component {
    constructor(props){
        super(props);
        this.state = {
            suggest :""
        }
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData();
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
                console.log('Clicked')
                this.setState({suggest:resp.suggest})
                console.log(resp.books)
            })
            .catch((error)=>{
                console.log(error,"catch me if you can")
            })
    }
    render(){
        return(
            <div className="left-container" id="category">
            <ul className="List" id="List">
                <li id="getAll" onClick={this.fetchData}>All</li>
                <li id="Programming">Programming</li>
                <li id="Inspiration">Inspiration</li>
                <li id="Autobiography">Autobiography</li>
                <li id="Horror">Horror</li>
                <li id="Romantic">Romantic</li>
                <li id="Comedy">Comedy</li>
                <li id="Travel">Travel</li>
                <li id="Poetry">Poetry</li>
                <li id="Fantasy">Fantasy</li>
                <li id="Cultural">Cultural</li>
                

            </ul>
        
        </div>
        )
    }
}
export default  DataRetreive;