import React, { Components } from 'react'
import DataRetreive from './dataRetreive'
import NavBar from './navbar'
import './navbar.css';              

class DisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
            updates:[]
        }
        this.detailedList = this.detailedList.bind(this)
    }
    detailedList(users) {

            let newArray =Object.values(users)
            this.setState({updates:newArray})
            
        
    }
    render() {
        console.log(this.state.updates)
        return (
            <div className='Parent'>

                <div className='content'>
                    <NavBar updates={this.state.updates}/>
                </div>
                <div className='sideBar'>
                    <DataRetreive ParentMethod={this.detailedList} />
                </div>
            </div>
        )
    }
}
export default DisplayComponent;