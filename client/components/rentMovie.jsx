import React from 'react';


var RentedMovies = function (props) {
    console.log('props:',props);
    if (props.moviesRented.length>0) {
        return (
            <div>
                <label>Movies Rented:</label>
                <div className="rentedMovies">
                    {props.moviesRented.map(movie => {
                        let { title, year, genre } = movie;
                       return (<div><span>{`${title}(${year}), ${genre}`}</span><br/></div>)
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }

}

export default RentedMovies;