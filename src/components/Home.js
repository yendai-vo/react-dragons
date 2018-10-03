import React, { Component } from 'react'

class Home extends Component{

    render(){
        const allDragons = this.props.dragons
        .filter(item => 
            item.name.toLowerCase().includes(this.props.search.toLowerCase())
        )
        .map(dragon => 
        <div>
            {!(this.props.warDragon.includes(dragon)) && <div onClick={() => this.props.onClick(dragon)}>
                {dragon.name} 
                <img src={dragon.image} width="100%"/>
            </div>}
        </div>)
        
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            <input value={this.props.search} onChange={this.props.changeSearch} />
            {allDragons}
        </div>
        )
    }

}

export default Home