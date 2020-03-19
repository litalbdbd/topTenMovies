import React, { useState } from 'react'
import Input from './inputs'
import Search from './search'
// import Add from './add'
import Form from './Form'


export default function Game(props) {
    const [genre, setGenre] = useState("")
    const [randomArray, setRandomArray] = useState([
        { 'rate': 10, 'genre': 'drama', 'movie': 'aaa' },
        { 'rate': 7, 'genre': 'comedy', 'movie': 'bbb' },
        { 'rate': 8, 'genre': 'drama', 'movie': 'ccc' },
        { 'rate': 6, 'genre': 'horror', 'movie': 'ccc' },
        { 'rate': 1, 'genre': 'drama', 'movie': 'ccc' },
        { 'rate': 3, 'genre': 'horror', 'movie': 'ccc' },
        { 'rate': 2, 'genre': 'comedy', 'movie': 'ccc' },
        { 'rate': 5, 'genre': 'drama', 'movie': 'ccc' },
        { 'rate': 4, 'genre': 'horror', 'movie': 'ccc' },
        { 'rate': 9, 'genre': 'comedy', 'movie': 'ccc' },
    ])


    console.log(genre);

    return (
        <div>
            <div className="form-comp">
                <Form randomArray={randomArray} setRandomArray={setRandomArray} />
            </div>
            <div className="search-comp">
                <Search genre={genre} setGenre={setGenre} />
            </div>
            <div className="input-comp">
                {

                    randomArray.sort((a, b) => (a['rate'] > b['rate']) ? 1 : -1)
                        .map(item => {
                            if (genre == "" || genre == "all" || genre == item['genre'])
                                return <Input genre={genre} number={item} randomArray={randomArray} setRandomArray={setRandomArray} />
                        })

                    // randomArray.map(item => {
                    //     if (genre == "" || genre == "all" || genre == item['genre'])
                    //         return <Input genre={genre} number={item} randomArray={randomArray} setRandomArray={setRandomArray} />
                    // })

                }

            </div>

        </div>
    );

};
