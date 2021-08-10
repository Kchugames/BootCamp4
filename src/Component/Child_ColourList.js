import { Component } from "react";

class ChildComponentList extends Component{
    render () {
        return (
        <>
        <div className='ChildList'>
				<ul>
                    <li Style={{ backgroundColor: 'green'}} > blue </li>
                    <li Style={{ backgroundColor: 'blue'}} > red </li>
                    <li Style={{ backgroundColor: 'yellow'}} > yellow </li>                
                </ul>
			</div>
        </>
        );
    };
}


export default ChildComponentList