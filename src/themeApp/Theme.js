import { Component } from "react";
import './theme.scss';

class Theme extends Component {

    state = {
        theme : "white"
    }
    

    handleSwitchTheme = ()=>{
        // console.log ("testing!")
        if (this.state.theme === 'white'){
            // 0 is the first number in the array because computer lol
            this.setState({theme : "black"});
            document.querySelectorAll('body')[0].classList.remove("themeapp__button--whitetheme");
            document.querySelectorAll ('body')[0].classList.add(".themeapp__button--blacktheme");
        }
        else {
            this.setState({theme: "white"});
            document.querySelectorAll('body')[0].classList.remove("themeapp__button--blacktheme");
            document.querySelectorAll('body')[0].classList.add("themeapp__button--whitetheme");
        }
    };


    render () { 
        return (
        <div className='content__child-app'>
        <h1> Theme App </h1>
        <button onClick= {this.handleSwitchTheme}> Switch Theme </button>
        </div>
    );
}
}

export default Theme;