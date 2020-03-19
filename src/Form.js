import React, { Component } from 'react'
// const {randomArray , setRandomArray } = props;   

export class Form extends Component {
    
    constructor(props) {
        const {randomArray , setRandomArray } = props;
        super(props)

        this.state = {
            rate: '',
            genreName: '',
            movieName: '',
        }

        this.handleMovieNameChange = this.handleMovieNameChange.bind(this);
        // this.handleGenreNameChange = this.handleGenreNameChange.bind(this);
        // this.handleRateChange = this.handleRateChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleMovieNameChange = (event) => {
        this.setState({
            movieName: event.target.value
        })
    
    }

    handleGenreNameChange = (event) => {
        this.setState({
            genreName: event.target.value
        })
    }

    handleRateChange = (event) => {
        this.setState({
            rate: event.target.value
        })
    }

    handleSubmit = (event) => {

        console.log("vgdfsvedsvsv");
        
        console.log(randomArray);
        
        
        this.setRandomArray({
            ...randomArray.push({'rate':this.state.rate,'genre':this.state.genre,'movie':this.state.movieName})
        });
        // alert(`${this.state.movieName}`)

    }


    render() {
        
        const { movieName, genreName, rate } = this.setState
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form">
                    <h2>Add New Movie</h2>
                    <div>
                        <label>Movie Name:</label>
                        <input type="text" value={movieName} onChange={this.handleMovieNameChange} />
                    </div>
                    <div>
                        <label for="genres">Choose a genre:</label>
                        <select id="genres" value={genreName} onChange={this.handleGenreNameChange}>
                            <option value="comedy">comedy</option>
                            <option value="drama">drama</option>
                            <option value="action">action</option>
                            <option value="horror">horror</option>
                        </select>
                    </div>
                    <div>
                        <label for="rate">Rate (between 1 and 10):</label>
                        <input type="number" id="rate" name="rate" min="1" max="10" value={rate}
                            onChange={this.handleRateChange} />
                    </div>
                    <button type="submit" onClick={this.handleSubmit}>Add</button>
                </div>
            </form>
        )
    }
}

export default Form
