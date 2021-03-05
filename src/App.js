import React, { Component } from 'react';

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
            return <div>{showError}</div>;
        }
        if(!this.state.err && this.state.lat) {
            return <div className="ui basic red green" > <h1>latitude : {this.state.lat}</h1></div> ;
        }
        return <div>Loadaing, Please Wait!!!!!</div>;
    }
}

export default App;