import React, { Component } from 'react'
import Dictitem from './Dictitem'
import "./Dict.scss";

export class Dict extends Component {
    constructor() {
        super();
        this.state = {
            results: [],
            page: 1,
            query: ''
        }
    }
    handleSearchClick = async () => {
        let x = this.state.query
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
                'X-RapidAPI-Key': '0bbe06aba5msh8ead08afc24e9c3p16b900jsnd23d4dd81bb2'
            }
        };

        let url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${x}`

        let list = await fetch(url, options);
        let parsedata = await list.json();
        console.log(parsedata);
        this.setState({ results: parsedata.list })


    }

    async componentDidMount() {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
                'X-RapidAPI-Key': '0bbe06aba5msh8ead08afc24e9c3p16b900jsnd23d4dd81bb2'
            }
        };

        let url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat'

        let list = await fetch(url, options);
        let parsedata = await list.json();
        console.log(parsedata);
        this.setState({ results: parsedata.list })
        console.log(this.state.results)

    }


    render() {
        return (
            <div className="container">
                <div className="head">
                    <h2 >Know what YOU want to </h2>
                </div>
                <div className=" cont">
                    <form className="d-flex " role="search">
                        <input className="form-control me-2" value={this.state.query} type="search" onChange={e => this.setState({ query: e.target.value })} style={{ width: '800px' }} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="button" onClick={this.handleSearchClick} >Search</button>
                    </form>
                </div>
                <div className="my-5 Mx-auto " >
                    <div className="conta my-4">

                        {this.state.results.map((element) => {
                            return <div className="col-md-8" key={element.defid}>
                                <Dictitem word={element.word} definition={element.definition} exp={element.example} author={element.author} written_on={element.written_on} />
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <img src=''></img>
                </div>
            </div>
        )
    }
}

export default Dict
