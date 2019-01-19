import * as React from 'react';
import { ReactNode } from 'react';
import { IUser } from '../../models/models';
import { AuthService } from '../../services/auth.service';

interface IProps
{
  goToAuthComponent?: () => void;
  onSelectClick: () => void;
}

interface IState
{
  email: string;
  password: string;
}

export class LoginOmponent extends React.Component<IProps, IState>
{
  constructor(props: IProps)
  {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  private loginUser(user: IUser): void
  {
    AuthService.auth(user).then(boolAuth =>
    {
      if (boolAuth)
      {
        this.bla();
      }
      else
      {

      }
    });
  }

  private bla = () =>
  {
    this.props.onSelectClick();
  };

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
      email: this.state.email,
      password: this.state.password,
    };

    this.loginUser(user);
  };

  public render(): ReactNode
  {
    return (
      <div className="auth-form">
        <form id="form" className="auth-form-content animate" onSubmit={this.handleSubmit}>
          <div className="container">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" onChange={this.onChange} value={this.state.email} placeholder="Enter Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter Password"/>

            <button type="submit">Login</button>
            <button id="button-red" onClick={this.props.goToAuthComponent} type="submit">Go To Register</button>
          </div>
          <div className="container" style={{backgroundColor: '#f1f1f1'}}/>
        </form>
      </div>
    );
  }
}