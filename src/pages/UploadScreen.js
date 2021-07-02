import React from 'react'
import Container from '../components/Container';
import {makeStyles, withStyles} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Grid, Box } from "@material-ui/core";
import Table from '../components/Table';
import Button from '../components/Button';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
    root:{
        margin: "auto",
        padding: '35px 35px 15px 35px',
        fontFamily:"Poppins",
        width: "80%",
        marginTop: "40px",
        marginBottom: '70px',
        borderRadius: "20px",
        boxShadow:'5px 5px 18px rgb(197, 197, 197)',
        backgroundColor: "#fff",
    },
    formControl: {
        margin: theme.spacing(1),
        marginLeft: 'auto',
        minWidth: 150,
        
    },
    formControl2: {
      margin: theme.spacing(1),
      // height: 20,
      minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

function UploadScreen() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
    return (
        <>
            <Container spacing={'70%'}>
            <div className={classes.root}>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}> Upload Sheet </div>
                <hr className={classes.line} />
                <div style={{display: 'flex', marginTop: '30px'}}>
                    <h6 style={{marginTop: '26px'}}>Select Month :</h6>
                    <FormControl variant="outlined" className={classes.formControl} size="small">
                        <InputLabel htmlFor="outlined-age-native-simple" >Month</InputLabel>
                        <Select
                        native
                        // value={state.age}
                        
                        onChange={handleChange}
                        label="Month"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={1}>January</option>
                        <option value={2}>Febraury</option>
                        <option value={3}>March</option>
                        <option value={4}>April</option>
                        <option value={5}>May</option>
                        <option value={6}>June</option>
                        <option value={7}>July</option>
                        <option value={8}>August</option>
                        <option value={9}>September</option>
                        <option value={10}>October</option>
                        <option value={11}>November</option>
                        <option value={12}>December</option>
                        </Select>
                    </FormControl>
                    <FormControl  variant="outlined" className={classes.formControl2} size="small">
                        <InputLabel htmlFor="outlined-age-native-simple">Year</InputLabel>
                        <Select
                        native
                        // value={state.age}
                        onChange={handleChange}
                        label="Month"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={1}>2021</option>
                        <option value={2}>2020</option>
                        <option value={3}>2019</option>
                        <option value={4}>2018</option>
                        <option value={5}>2017</option>
                        </Select>
                    </FormControl>
                </div>
                <div style={{display: 'flex', marginTop: '40px'}}>
                  <h6 style={{marginTop: '12px'}}>Upload Input Sheet :</h6>
                  <Box style={{ marginLeft: 'auto'}}>
                      <Button text="Upload" style={{color:"white" ,backgroundColor:"#1976D2"}} />
                  </Box>
                </div>
                <h6 style={{marginTop: '20px', marginBottom: '15px'}}>Preview :</h6>
                
                {/*Table*/}
                <Table />

    
                <Box style={{ marginRight: "30px" }}>
                    <button className="btn" 
                      style={{backgroundColor:'#1976D2',color:"white",width: '120px',marginTop: '10px'}}>
                      Process</button>
                </Box>
                <h6 style={{marginTop: '30px', marginBottom: '10px', color: '#1976D2', fontWeight: '600'}}>Output Sheet</h6>
                <h6 style={{marginTop: '15px',marginBottom: '15px'}}>Preview :</h6>
               
                <Table />
                <Box style={{display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn" 
                      style={{backgroundColor:'#1976D2',color:"white",width: '120px',}}>
                      Download</button>
                </Box>
            </div>
            </Container>
        </>
    )
}

export default UploadScreen
