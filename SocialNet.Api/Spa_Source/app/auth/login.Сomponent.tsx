import * as React from 'react';
import { ReactNode } from 'react';

interface IProps
{
  goToAuthComponent?: () => void;
}

export class LoginOmponent extends React.Component<IProps>
{
  constructor(props: IProps)
  {
    super(props);
  }

  public onSelectClick = () =>
  {
    this.props.goToAuthComponent();
  };

  public render(): ReactNode
  {
    return (
      <div id="id01" className="auth-form">
        <form id="form" className="auth-form-content animate">
          <div className="container">
            <label htmlFor="uname">Username</label>
            <input id="login" name="name" type="text" placeholder="Enter Username"/>

            <label htmlFor="psw">Password</label>
            <input id="password" type="password" name="password" placeholder="Enter Password"/>

            <button id="sendForm" type="submit">Login</button>
            <button id="button-red" onClick={() => this.onSelectClick()} type="submit">Go To Register</button>
          </div>
          <div className="container" style={{backgroundColor: '#f1f1f1'}}/>
        </form>
      </div>
    );
  }
}