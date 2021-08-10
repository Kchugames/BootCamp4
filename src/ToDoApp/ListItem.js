import { Component } from "react";

class ListItem extends Component {
    
    // clickevent = (e) => {
    //     e.target.style.textDecoration = 'strikeThrough';  
    //     e.target.style.backgroundColor = "red";
    //     }


// eventListener onClick
// when style.strikethrough = true 

    
    render() {
        return (
            <>
                <ol>
                    {/* {this.props.todoItems.map((todoItem)=> <li onClick = {(e) => this.clickevent (e)} >{todoItem}</li>)} */}
                    {this.props.todoItems.map((todoItem)=> <li>{todoItem}</li>)}
                </ol>
            </>
        );
    };
};



export default ListItem;



// object.style.textDecoration="underline"