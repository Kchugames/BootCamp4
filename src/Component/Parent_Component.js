import { Component } from "react";
import ChildComponentList from './Child_ColourList';
import ChildComponentSelect from './Child_ColourSelect';
import BabaSelect from './Baba_Select'; 


class ParentComponent extends Component{
    render () {
        return (
            <div class='Parent'>
                <h1>
                    <a href = 'www.google.co.uk' > GOOGLE </a>
                    <ChildComponentSelect />
                    {/* <ChildComponentList /> */}
                    {/* <BabaSelect/> */}
                </h1>
            </div>
        )
    };
}


export default ParentComponent