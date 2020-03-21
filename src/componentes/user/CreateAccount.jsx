import React from 'react';
import {connect} from 'react-redux'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import getAccount from '../../redux/actions/CreateAccount'
import Footer from '../footer/footer'

class Account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Username:'',
            Password:'',
            Email:'',
            FistName:'',
            LastName:''

        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange=(e)=> {
        var state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state)
    };      
    
      handleSubmit=(event)=> {
        let Account= this.state
        this.props.getAccount(Account)
        alert('Creado')
        event.preventDefault();
      }
    render(){
        const {Username,Password,Email,FistName,LastName}=this.state;
            return(
                <Container className="App">
                    <Footer/>
                        <h2>Create Accout</h2>
                    <Form className="form" onSubmit={this.handleSubmit}>

                            <Col>
                                <FormGroup>
                                <Label>Username</Label>
                                <Input
                                type="text"
                                value={Username}
                                name="Username"
                                placeholder="Username"
                                onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    value={Email}
                                    name="Email"
                                    placeholder="myemail@example.com"
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>
                            
                            <Col>
                                <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="Password" 
                                    value={Password} 
                                    name="Password" 
                                    placeholder="Password" 
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                <Label>FirstName</Label>
                                <Input
                                    type="text"
                                    value={FistName}
                                    name="FistName" 
                                    placeholder="FirstName"
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                <Label>Lastname</Label>
                                <Input
                                    type="text"
                                    value={LastName}
                                    name="LastName" 
                                    placeholder="LastName"
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>
                            

                        <Button color="primary" type="submit" >Create</Button>

                    </Form>
                </Container>
                
            )
    }
}
const mapStateToProps=(state)=>{
    return{
        // Account:state.Account
    }
}

const mapDisparchToProps = dispatch=>{
    return {
        getAccount:(Account)=>dispatch(getAccount(Account))
    }
        
    }

    // singGoogle=()=>{
    //     window.location.href="http://localhost:8080/api/auth/google"
    // }
    
export default connect(mapStateToProps,mapDisparchToProps)(Account);