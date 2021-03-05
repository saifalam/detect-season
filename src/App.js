import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

class App extends Component {

    //Bable will generate necessary constructor and put state inside. 
    state = {lat: null, err: '' };

    componentDidMount() {
        console.log("Initial loading");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err =>this.setState({ err: err.message })
        );
    }

    render() {
        let showError = "";
        if(!!this.state.err) {
            showError = ( <div className="error-message" ><h1>Error: {this.state.err}</h1></div> );     
        }
        if(this.state.err && !this.state.lat) {
            return <div>{showError}</div>;
        }
        if(!this.state.err && this.state.lat) {
            return (<SeasonDisplay> lat={this.state.lat} </SeasonDisplay>);
        }
        return <Loader loaderText="Please accept current location request  ..." />;
    }
} 

export default App;