import GlobalStyles from "Components/Header/GlobalStyles";
import Router from "Components/Header/Router";
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



