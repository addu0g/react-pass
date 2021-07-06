import React from 'react';
import './App.css';

// Componentes
import ButtonComponent from './Componentes/ButtonComponent';
import PCComponent from './Componentes/PCComponent';
import MessageComponent from './Componentes/MessageComponent';

//configuraciones de api
import {pass_api} from './config';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      finalPass:'',
      num:false,
      caps:false,
      char:false,
      len:8
    };
    this.messageReference = React.createRef();
  }

  getPasswrod = () => {
    this.messageReference.current.setValues(undefined, 'hide-result');
    let rest_url = pass_api;
    const {num, caps, char, len}= this.state;
    if(num === true){
      if(rest_url.indexOf('?')>0){
        rest_url = rest_url+'&num=true';
      }
      else{
        rest_url = rest_url+'?num=true';
      }
    }
    if(caps === true){
      if(rest_url.indexOf('?')>0){
        rest_url = rest_url+'&caps=true';
      }
      else{
        rest_url = rest_url+'?caps=true';
      }
    }
    if(char === true){
      if(rest_url.indexOf('?')>0){
        rest_url = rest_url+'&char=true';
      }
      else{
        rest_url = rest_url+'?char=true';
      }
    }
    if(len >= 8 && len <=100){
      if(rest_url.indexOf('?')>0){
        rest_url = rest_url+'&len='+len;
      }
      else{
        rest_url = rest_url+'?len='+len;
      }
      fetch(rest_url, {method:'GET'})
      .then(response=> response.json())
      .then(j =>{
        this.messageReference.current.setValues(j.data, 'shine-result');
      })
    }else{
      if(len >= 100){
        alert("Sólo se permiten contraseñas por debajo de 101 carácteres.");
      }else
      {
        alert("Contraseñas menores a 8 carácteres pueden ser vulnerables.");
      }
    }
  }

  checkBoxChange = (event) =>{
    switch(event.target.id){
      case 'num':
        this.setState({
          num: event.target.checked
        })
        break;
      case 'char':
        this.setState({
          char: event.target.checked
        })
        break;
      case 'caps':
        this.setState({
          caps: event.target.checked
        })
        break;
      case 'len':
        this.setState({
          len: event.target.value
        })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">

        <div className="wordart tilt">
            <span className="text">Super password generator</span>
        </div>
        
        <PCComponent checkBoxChangeEvent={this.checkBoxChange}/>
        <ButtonComponent stilo='button-normal' text='Generar' onClickEvent={
          this.getPasswrod
        } />
        <br/><br/><br/>
        <MessageComponent ref={this.messageReference} />
        <br/><br/><br/>
        <div className='footer'>
          Esta aplicación utiliza la api REST del proyecto Passwordinator publicado en: https://github.com/fawazsullia/password-generator/
        </div>
      </div>
    );
  };
}

export default App;
