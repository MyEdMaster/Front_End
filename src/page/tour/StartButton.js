import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StartButton extends Component {
  static contextTypes = {
    tour: PropTypes.object,
    hopscotch: PropTypes.object,
    customRenderer: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context);
  }

  startTour = () => {
    if (this.context.customRenderer) {
      this.context.hopscotch.setRenderer(this.context.customRenderer);
    }
    this.context.hopscotch.startTour(this.context.tour);
  }

  render () {
    const {
      className,
      children,
    } = this.props;
    return (
      <button className={className} onClick={this.startTour}>{children}</button>
    );
  }
}