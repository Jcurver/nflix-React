import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import React, { Component } from "react";


class App extends Component {
    hello = "";
    render(){
        return (
             <>
             <Router /> { this.hello }
             <GlobalStyles />
             </>
        );
    }
}

export default App;



