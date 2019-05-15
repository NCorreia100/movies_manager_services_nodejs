import React from 'react';


class SearchMovies extends React.Component{
    constructor(props){
        super(props);
        this.state={q:''}
    }
    render(){
        return(
            <div>
                <label>Search Movie:</label>
                <br/>
                <textarea onChange={(e)=>this.setState({q:e.target.vale})}></textarea>
                <br/>
                <span>Enter text to search</span>
            </div>
        )
    }

}

export default SearchMovies;