import React, {Component} from "react";
import './Button.css';

class ButtonComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            stilo:props.stilo,
            text:props.text,
            onClickEvent: props.onClickEvent
        }
    }

    render(){
        const {stilo, text, onClickEvent}=this.state;
        return(
            <button className={stilo} onClick={onClickEvent}>{text}</button>
        )
    }
}

export default ButtonComponent;