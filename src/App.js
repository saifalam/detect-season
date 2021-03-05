import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";
import "semantic-ui-css/semantic.min.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {lat: null,err: '' };
    }

    componentDidMount() {
        console.log("Initial loading");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude }),
            err =>this.setState({err: err.message })
        );
    }

    render() {
        let showError = "";
        if(!!this.state.err) {
            showError = ( <div className="ui basic red button" ><h1>Error: {this.state.err}</h1></div> );     
        }
        if(this.state.err && !this.state.lat) {
            return (<SeasonDisplay> {showError} </SeasonDisplay>);
        }
        if(!this.state.err && this.state.lat) {
            return (<SeasonDisplay> lat={this.state.lat} </SeasonDisplay>);
        }
        return <Loader />;
    }
} 

export default App;