import React from 'react';
import './PCComponent.css';

export default class PCComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checkBoxChangeEvent:props.checkBoxChangeEvent
        }
    }
    render(){
        const {checkBoxChangeEvent}=this.state;
        return (
            <div className='config-buttons'>
                Usar numeros: <input type='checkbox' name='num' id='num' onChange={checkBoxChangeEvent}></input><br/>
                Usar caracteres: <input type='checkbox' name='char' id='char' onChange={checkBoxChangeEvent}></input><br/>
                Usar mayusculas: <input type='checkbox' name='caps' id='caps' onChange={checkBoxChangeEvent}></input><br/>
                Cantidad de caracteres: <input defaultValue='8' type='number' name='len' id='len' onChange={checkBoxChangeEvent}></input>
            </div>
        );
    }
}