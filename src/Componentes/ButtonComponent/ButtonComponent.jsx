import React, {Component} from "react";

import Button from '@material-ui/core/Button';

class ButtonComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            text:props.text,
            onClickEvent: props.onClickEvent
        }
    }

    render(){
        const {text, onClickEvent}=this.state;
        return(
            <Button color="primary" variant="contained" onClick={onClickEvent}>{text}</Button>
        )
    }
}

export default ButtonComponent;