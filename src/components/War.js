import React, { Component } from 'react'

class War extends Component{

    render(){
        // Note how style attributes are now passed as object instead of a string!!!

        const selectedDragons = this.props.warDragon.map(dragon => 
            <div onClick={() => this.props.removeWarDragon(dragon)}>
                {dragon.name} 
                <img src={dragon.image} width="100%"/>
            </div>)
        return (
            <div style={{float:'left', width:'40%', padding:'5%', backgroundColor:'#f98181'}}>
                <h1>War</h1>
                {selectedDragons}
            </div>
        )
    }

}

export default War