import React, { Component } from 'react'
// Componentes
import ButtonComponent from './../../Componentes/ButtonComponent';
import PCComponent from './../../Componentes/PCComponent';
import MessageComponent from './../../Componentes/MessageComponent';

//configuraciones de api
import {pass_api} from './../../config';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Toolbar';
export default class AppFrame extends Component {
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
            this.messageReference.current.setValues(j.data);
            this.messageReference.current.handleOpen();
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
            <Grid container 
                    justifyContent='space-between' 
                    alignItems="center"
                    direction='column'>
                        <AppBar position='static' color="primary">
                            <Toolbar variant="dense">
                                <Typography variant='h6'>Generador de passwords</Typography>
                            </Toolbar>
                        </AppBar>
                        <Grid container item>
                            <Grid item md={12}>
                                <PCComponent checkBoxChangeEvent={this.checkBoxChange}/>
                            </Grid>
                            <Grid item md={12}>
                                <ButtonComponent text='Generar' 
                                                 onClickEvent={
                                                        this.getPasswrod
                                                 } />
                            </Grid>
                        </Grid>
                        <Grid item md={12} className="footer">
                            <AppBar position="static" color="primary" >
                                <Container>
                                    <Toolbar>
                                    <Typography variant="body1" color="inherit">
                                        Esta aplicación utiliza la api REST del proyecto Passwordinator publicado en: https://github.com/fawazsullia/password-generator/
                                    </Typography>
                                    </Toolbar>
                                </Container>
                            </AppBar>
                        </Grid>
            
                <MessageComponent ref={this.messageReference} />

            </Grid>
        )
    }
}
