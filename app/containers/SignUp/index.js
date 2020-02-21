import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TextFieldGroup from 'components/common/TextFieldGroup';
import { registerUser } from '../../containers/App/actions';
import styled from 'styled-components';

const SignUpPage = styled.div`
  top: 0px;
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const Form = styled.form`
  position: absolute;
  top: 30%;
  left: 15vw;
`;

const InputDiv = styled.div`
  font-family: tablet-gothic,sans-serif;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  color: white;
  background-color: red;
  cursor: pointer;
  font-family: tablet-gothic,sans-serif;
`;

const ButtonBack = styled(Link)`
  position: absolute;
  height: 50px;
  width: 100px;
  padding: 14px;
  text-align: center;
  border: 2px solid red;
  margin-left: 35%;
  font-family: tablet-gothic,sans-serif;
  background-color: transparent;
`;

const ButtonHolder = styled.div`
  display: flex;
`;



class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          invalid = true;
        } else {
          console.log(res.data)
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid });
      });
    }
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.registerUser(this.state)
    // const user = this.state;
    // console.log(user, ' this is user from obsubmit 112')
    // registerUser(user)

    //   if (this.isValid()) {
    //     this.setState({ errors: {}, isLoading: true });
    //     this.props.userSignupRequest(this.state).then(
    //       () => {
    //         this.context.router.push('/');
    //       },
    //       (err) => this.setState({ errors: err.response.data, isLoading: false })
    //     );
    //   }

  }


  render() {
    const { errors } = this.state;

    return (
      <SignUpPage>
        <Form onSubmit={this.onSubmit}>
          <h1>Join our community!</h1>

          <InputDiv>
            <TextFieldGroup
              // error={errors.username}
              label="Username"
              onChange={this.onChange}
              placeholder="username"
              // checkUserExists={this.checkUserExists}
              value={this.state.username}
              field="username"
            />
          </InputDiv>

          <InputDiv>
            <TextFieldGroup
              // error={errors.email}
              label="email"
              onChange={this.onChange}
              placeholder="email"
              type="text"
              // checkUserExists={this.checkUserExists}
              value={this.state.email}
              field="email"
            />
          </InputDiv>

          <InputDiv>
            <TextFieldGroup
              // error={errors.password}
              label="Password"
              onChange={this.onChange}
              value={this.state.password}
              placeholder="password"
              field="password"
              type="password"
            />
          </InputDiv>

          <InputDiv>
            <TextFieldGroup
              // error={errors.passwordConfirmation}
              label="Password Confirmation"
              onChange={this.onChange}
              value={this.state.passwordConfirmation}
              placeholder="password confirmation"

              field="passwordConfirmation"
              type="password"
            />
          </InputDiv>

          <ButtonHolder>
            <Button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
              Sign up
            </Button>
            <ButtonBack to="/"> Back </ButtonBack>
          </ButtonHolder>

        </Form>
      </SignUpPage>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  registerUser: (user) => dispatch(registerUser(user))
})


export default connect(mapDispatchToProps, { registerUser })(SignUpForm);

