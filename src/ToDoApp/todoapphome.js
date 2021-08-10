import { Component } from 'react';
import InputForm from './InputForm.js';
import ListItem from "./ListItem";



class ToDoAppHome extends Component {

state = {
currentItem: "",
todoItems: [], 
}




// below defines the function handlechange that handles a parameter called event. event is the param name) 
// event is a class/param that has a target and the target has a value 
handleChange = (event) => {
        // below is text to show and parameter we named above.
        console.log ("input field event: ", event);
        // state set on line 9; makes whatever is put in there is called when the event is called.
        this.setState({currentItem: event.target.value});
}

// take value that was in current item from input box and add to/concat it to the to do items array []
handleNewItemOnSubmit = (event) => {
        // handlechange and preventdefault are both built in functions
event.preventDefault(); 
this.setState ({todoItems : this.state.todoItems.concat (this.state.currentItem)});

this.setState({currentItem: ""});


// const handleStrikeThroughOnClick = (i) => {
// document.getElementById(i).classList.toggle("task-item")
// if (document.getElementById(i).classList.contains("task-list"))
// setdoneCounter(doneCounter +1)
// else setdoneCounter(doneCounter -1);
// }; BINAY SOLUTION ABOVE 
}


        render() {
        return (
<div className='content__child-app'>
        <h1> To Do List App</h1>
            {/* input form for the to do list */}

            {/* below; telling other compon about state we did, and functions we made: you may need these (or not!) but we are passing the knowledge to the class InputForm   */}
        <InputForm currentItem={this.state.currentItem} handleChange={this.handleChange} handleNewItemOnSubmit={this.handleNewItemOnSubmit} todoItems={this.state.todoItems}/>

        <ListItem todoItems = {this.state.todoItems}/>
        </div>
);
}
}

export default ToDoAppHome