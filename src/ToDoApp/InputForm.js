import { Component } from "react";

class InputForm extends Component{
// state = {
//     currentItem: "",
// }

// handleChange = (event) => {
//     this.setState({currentItem: event.target.value});
    
// }


    render() {

    return (
        <>
            <form onSubmit = {this.props.handleNewItemOnSubmit}>
                <label> New Task </label>
                <input type="text" placeholder="Add Next Task Here" value= {this.props.currentItem} 
                onChange={this.props.handleChange}/>
<br/>
                <button onClick = {this.props.handleNewItemOnSubmit}> Add Item Number : {this.props.todoItems.length +1} </button>
            </form>
        </>
    )
    }


// return <>
// <p> {count} </p>
// // <button>
// some way relate todoItems length  > check array number 
// // onClick = ( () => setCount (count +1) ) 
// </button>
}
export default InputForm;