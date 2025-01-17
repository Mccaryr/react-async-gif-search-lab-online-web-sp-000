import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        query: ""
    }

    submitHandler = (event) => {
        event.preventDefault(); 
        this.props.fetchGifs(this.state.query)
    }





    render(){
        return(
        <div>
            <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
            </form> 
        </div>
        )
    }
}