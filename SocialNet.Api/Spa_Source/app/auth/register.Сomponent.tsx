import * as React from 'react';
import { ReactNode } from 'react';
import { UserService } from '../../services/user.services';
import { IUser } from '../../models/models';

interface IProps
{
  goToAuthComponent?: () => void;
}

interface IState
{
  name: string;
  email: string;
  password: string;
}

export class RegisterOmponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  private registerUser(user: IUser): void
  {
    console.log('user', user);
    UserService.add(user).then(index =>
    {

    });
  }

  private onChange = (event: React.FormEvent<HTMLInputElement>) =>
  {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState(prevState =>
    {
      prevState[name] = value;
      return prevState;
    });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();

    const user: IUser = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };

    this.registerUser(user);
  };

  public render(): ReactNode
  {
    return (
      <div className="auth-form">
        <form className="auth-form-content" onClick={this.handleSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            <hr/>
            <label htmlFor="name">Username</label>
            <input type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Enter Username"/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password"/>

            {/*<label htmlFor="psw-repeat"><b>Repeat Password</b></label>*/}
            {/*<input type="password" placeholder="Repeat Password" name="psw-repeat"/>*/}
            {/*<label>*/}
            {/*<input type="checkbox" name="remember" style={{marginBottom: '15px'}}/> Remember me*/}
            {/*</label>*/}

            <div className="clearfix">
              <button id="sign_up" type="submit" className="signupbtn">Sign Up</button>
              <button id="button-red" onClick={this.props.goToAuthComponent} type="text" className="signupbtn">Go to Login</button>
            </div>
          </div>
        </form>
      </div>);
  }
}