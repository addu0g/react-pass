import React from 'react';
import './PCComponent.css';

import FormControlLabel  from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/Checkbox';
import TextField  from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
                <Grid container className="container">
                        <Grid container item direction='column' alignItems="center" justifyContent='space-between'  >
                            <Paper elevation={8} >
                                <Grid container item direction="column" justifyContent='flex-start' md={12}>
                                    <FormControlLabel label="Usar numeros" control={<CheckBox color="primary" name='num' id='num' onChange={checkBoxChangeEvent}/>}></FormControlLabel>
                                
                                    <FormControlLabel label="Usar caracteres" control={<CheckBox color="primary" name='char' id='char' onChange={checkBoxChangeEvent}/>}></FormControlLabel> 
                                
                                    <FormControlLabel label="Usar mayusculas" control={<CheckBox color="primary" name='caps' id='caps' onChange={checkBoxChangeEvent}/>}></FormControlLabel>                         
                                </Grid>
                                <Grid item>
                                    <TextField defaultValue='8' label="Cantidad de caracteres" type='number' name='len' id='len' onChange={checkBoxChangeEvent} variant="outlined"/>                        
                                </Grid>
                            </Paper>
                        </Grid>
                </Grid>
        );
    }
}