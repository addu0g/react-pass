import React from 'react';
import './MessageComponent.css';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default class MessageComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pass:'',
            open: false,
            getModalStyle:()=>{
                const top = 50 ;
                const left = 50 ;
                return {
                  top: `${top}%`,
                  left: `${left}%`,
                  padding:"0px 25px 5px 25px",
                  borderRound:"15px",
                  transform: `translate(-${top}%, -${left}%)`,
                  backgroundColor:"#4a6068",
                  position:"absolute",
                  color:"#fff"
                };
            }
        };
    }

    classes = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    setValues=(pass)=>{
        this.setState({
            pass:pass
        });
    }

    handleOpen = () => {
        this.setState({
            open:true
        });    
    };
    

    handleClose = () => {
        this.setState({
            open:false,
            pass:''
        });    
    };

    

    render () {
        const {pass, open, getModalStyle} = this.state;
        const modalStyle = getModalStyle();
        return(
            <Modal open={open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description">
                        <Box borderRadius={16} style={modalStyle} className={this.classes.paper}>
                           
                                <h2 id="modal-title">Su nuevo password</h2>
                                <hr/>
                                <p id="modal-description">
                                        {pass}
                                </p>
                                <hr/>
                                <Button color="inherit" onClick={this.handleClose}>Cerrar</Button>
                            
                        </Box>
            </Modal>
          
        );
    }
} 