import React from 'react'


export default function Search(props) {

    const { genre, setGenre } = props;
    const filterMovie = (e) => {
        setGenre(e.target.id);




    }

    return (
        <>
            <button className="button button2" id="drama" onClick={
                (e) => filterMovie(e)
            } >DRAMA</button>
            <button className="button button2" id="comedy" onClick={
                (e) => filterMovie(e)
            }>COMEDY</button>
            <button className="button button2" id="horror" onClick={
                (e) => filterMovie(e)
            }>HORROR</button>
            <button className="button button2" id="all" onClick={
                (e) => filterMovie(e)
            }>ALL</button>

        </>

    );

};
