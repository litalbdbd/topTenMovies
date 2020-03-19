import React from 'react'


export default function Input(props) {
    const { number } = props;
    const { randomArray, setRandomArray } = props;
    console.log(randomArray);

 


    return (<>
      
        <div className="movie">
            <p className="title" id="rate" ><b> Rate:</b> &nbsp; {number['rate']} </p>
            <p className="title" id="genre"><b>Genre:</b> &nbsp;{number['genre']} </p>
            <p className="title" id="movieName"> <b>Movie Name:</b> &nbsp;{number['movie']}</p>
            <img className="img"
                src={`img/${number['rate']}.jpg`} />
        </div>
    </>
    );

};