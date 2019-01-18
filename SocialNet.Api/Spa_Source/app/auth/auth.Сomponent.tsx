import * as React from 'react';
import { ReactNode } from 'react';
import { LoginOmponent } from './login.Сomponent';
import { RegisterOmponent } from './register.Сomponent';

interface IProps{
  onSelectClick?: () => void;
}

interface IState
{
  isAuthComponent: boolean;
}

export class AuthOmponent extends React.Component<IProps, IState>
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

  public testParent = () =>
  {
    this.props.onSelectClick();
  };

  public render(): ReactNode
  {
    return this.state.isAuthComponent
      ? <RegisterOmponent goToAuthComponent={this.goToRegisterComponent}/>
      : <LoginOmponent onSelectClick={this.testParent} goToAuthComponent={this.goToLoginComponent}/>;
  }
}