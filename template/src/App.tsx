import React, { Component, ReactNode } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { observer } from 'mobx-react';

import CoreModule from './Modules/Core/Core.module';

import './Assets/Sass/index.scss';

@observer
class App extends Component {
  private get baseName(): string {
    const baseElement: HTMLElement = document.querySelector('base');
    let base: string = '';

    if (baseElement) {
      base = baseElement.getAttribute('href');
    }

    return base;
  }

  public render(): ReactNode {
    return (
      <StylesProvider injectFirst>
        <CssBaseline />
        <BrowserRouter basename={this.baseName}>
          <Switch>
            <Route path="/" component={CoreModule}/>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    );
  }
}

export default App;
