import React, { Component } from 'react'
import { loginUser } from '../../containers/App/actions'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextFieldGroup from 'components/common/TextFieldGroup';


const SignInPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const ButtonBack = styled(Link)`
    position: absolute;
    height: 50px;
    padding-top: 1.5vh;
    width: 100px;
    text-align: center;
    border: 2px solid red;
    margin-left: 10%;
`;

const Form = styled.form`
    position: absolute;
    left: 20vw;
    top: 25vh;
`;

const Button = styled.button`
    background-color: red;
    color: white;
    width: 100px;
    height: 50px;'
    cursor: pointer;
`;

const AlertErrorDiv = styled.div`
    position: relative;
    border: 1px solid black;
    margin: 2%;
    color: red;
`;

const InputDiv = styled.div`
  @media screen and (max-width: 460px) {
    display: table-caption;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;


class SignInForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state, e.target.name, 'this state from login')
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    this.props.loginUser(this.state)
  }

  render() {
    return (
        <SignInPage>
      <Form onSubmit={this.handleFormSubmit}>
      <InputDiv>
      <input
          name="username"
          placeholder="username"
          type="text"
          onChange={this.onChange}
          value={this.state.username}
          />
           </InputDiv>
        <InputDiv>
        <input
          name="password"
          placeholder="password"
          type="text"
          onChange={this.onChange}
          value={this.state.password}
          />
          </InputDiv>
          <Button type="submit" value="Log in"> LOGIN </Button>
          </Form>
      </SignInPage>
    )
  }
  
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
