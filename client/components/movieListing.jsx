import React from 'react';


class MovieListing extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        let {title,year,rating,review,genre,country,copies,$loki}=this.props.movieData;
        this.setState({
            id : $loki,
            title,
            year,
            rating,
            review,
            genre,
            country,
            copiesLeft: copies
        })
    }
    render(){
        let {id,title,year,rating,review,country,copiesLeft} = this.state;
        
        return(
            <div className="movieListing" id={id}>
                <label>Title: {title}</label><br/>
                <label>Year: {year}</label><br/>
                <label>Rating: {rating}</label><br/>
                <label>Review: {review}</label><br/>
                <label>Country: {country}</label><br/>
                <label>Stock: {copiesLeft} available for renting</label><br/>  
                <input className="rentButton"  type="button" value="Rent Movie"
                onClick={()=>{
                    this.props.rentMovie(id);
                    let copies = this.state.copiesLeft - 1;
                    this.setState({copiesLeft:copies})
                }}
                ></input>                                   
            </div>
        )
    }
}

export default MovieListing;