import * as React from 'react';
import { ReactNode } from 'react';
import { LoginOmponent } from './login.Сomponent';
import { RegisterOmponent } from './register.Сomponent';

interface IState
{
  isAuthComponent: boolean;
}

export class AuthOmponent extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      isAuthComponent: false,
    };
  }

  private goToLoginComponent = () =>
  {
    this.setState({
      isAuthComponent: true
    });
  };

  private goToRegisterComponent = () =>
  {
    this.setState({
      isAuthComponent: false
    });
  };

  public render(): ReactNode
  {
    return this.state.isAuthComponent
      ? <RegisterOmponent goToAuthComponent={this.goToRegisterComponent}/>
      : <LoginOmponent goToAuthComponent={this.goToLoginComponent}/>;
  }
}