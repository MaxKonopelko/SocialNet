import * as React from 'react';
import { ReactNode } from 'react';
import { MainOmponent } from './main/main.Сomponent';
import { AuthOmponent } from './auth/auth.Сomponent';

interface IState
{
  isAuth: boolean;
}

export class App extends React.Component<{}, IState>
{
  constructor(props: {})
  {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  public testParent = () =>
  {
    this.setState({
      isAuth: true
    });
  };

  public render(): ReactNode
  {
    return this.state.isAuth ? <MainOmponent/> : <AuthOmponent onSelectClick={this.testParent}/>;
  }
}
