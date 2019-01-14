import * as React from 'react';
import { ReactNode } from 'react';
import { MenuType, MenuComponent } from './views/menu.component';
import { ContentComponent } from './views/content/content.Component';

interface IState
{
  text: string;
}

export class App extends React.Component<{}, IState>
{
  private refContentComponent: ContentComponent;

  constructor(props: {})
  {
    super(props);
  }

  public onSelectMenu = (value: MenuType) =>
  {
    this.refContentComponent.selectMenu(value);
  };

  public render(): ReactNode
  {
    return (
      <div className="app">
        <div className="container">
          <MenuComponent onSelectMenu={this.onSelectMenu}/>
          <ContentComponent ref={el => this.refContentComponent = el}/>
        </div>
      </div>
    );
  }
}