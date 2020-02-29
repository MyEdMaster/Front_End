# react-guided-tour

> 

[![NPM](https://img.shields.io/npm/v/react-guided-tour.svg)](https://www.npmjs.com/package/react-guided-tour) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-guided-tour
```

## Usage

Please refer to the example folder

```jsx
import React, { Component } from 'react';
import 'hopscotch/dist/css/hopscotch.css';
import { HopscotchContext, StartButton } from 'react-guided-tour';

export default class App extends Component {
  render () {

    const steps = [
      {
        title: 'Step 1',
        content: 'This is step 1',
        target: 'step1',
        placement: 'bottom',
      },
      {
        title: 'Step 2',
        content: '<p>This is <strong>step 2</strong></p>',
        target: 'step2',
        placement: 'top',
      }
    ];

    return (
      <div id="app">
        <HopscotchContext
          id="appTour"
          steps={steps}
          showPrevButton={true}
        >
          <StartButton>Help</StartButton>
        </HopscotchContext>
        <div id="container">
          <div id="left">
            <div id="step1"></div>
          </div>
          <div id="right">
            <div id="step2"></div>
          </div>
        </div>
      </div>
    )
  }
}
```

## License

MIT © [sorenhoyer](https://github.com/sorenhoyer)
