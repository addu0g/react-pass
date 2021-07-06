import React from 'react';
import './MessageComponent.css';

export default class MessageComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pass:'',
            cssStyle:'hide-result'
        };
    }

    setValues=(pass, cssStyle)=>{
        this.setState({
            pass:pass,
            cssStyle:cssStyle
        });
    }

    render () {
        const {pass, cssStyle} = this.state;
        return(
          <div className='result-container'>
            <span className={cssStyle}>
                Su nuevo password: <br/>{pass}
              </span>
          </div>
        );
    }
} 