import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import hopscotch from 'hopscotch';

export default class HopscotchContext extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired,
    active: PropTypes.bool,
    /* eslint-disable react/no-unused-prop-types, react/require-default-props */
    bubbleWidth: PropTypes.number,
    bubblePadding: PropTypes.number,
    smoothScroll: PropTypes.bool,
    scrollDuration: PropTypes.number,
    scrollTopMargin: PropTypes.number,
    showCloseButton: PropTypes.bool,
    showPrevButton: PropTypes.bool,
    showNextButton: PropTypes.bool,
    arrowWidth: PropTypes.number,
    skipIfNoElement: PropTypes.bool,
    nextOnTargetClick: PropTypes.bool,
    onNext: PropTypes.func,
    onPrev: PropTypes.func,
    onStart: PropTypes.func,
    onEnd: PropTypes.func,
    onClose: PropTypes.func,
    onError: PropTypes.func,
    i18n: PropTypes.shape({
      nextBtn: PropTypes.string,
      prevBtn: PropTypes.string,
      doneBtn: PropTypes.string,
      skipBtn: PropTypes.string,
      closeTooltip: PropTypes.string,
      stepNums: PropTypes.arrayOf(PropTypes.string)
    })
    /* eslint-enable */
  };

  static defaultProps = {
    active: false
  };

  static childContextTypes = {
    tour: PropTypes.object,
    hopscotch: PropTypes.object,
    customRenderer: PropTypes.func,
  }

  constructor(props, context) {
    super(props, context);

    let tour = {
      id: this.props.id,
      steps: this.props.steps,
    };

    if (this.props.bubbleWidth) tour['bubbleWidth'] = this.props.bubbleWidth;
    if (this.props.bubblePadding) tour['bubblePadding'] = this.props.bubblePadding;
    if (this.props.smoothScroll) tour['smoothScroll'] = this.props.smoothScroll;
    if (this.props.scrollDuration) tour['scrollDuration'] = this.props.scrollDuration;
    if (this.props.scrollTopMargin) tour['scrollTopMargin'] = this.props.scrollTopMargin;
    if (this.props.showCloseButton) tour['showCloseButton'] = this.props.showCloseButton;
    if (this.props.showPrevButton) tour['showPrevButton'] = this.props.showPrevButton;
    if (this.props.showNextButton) tour['showNextButton'] = this.props.showNextButton;
    if (this.props.arrowWidth) tour['arrowWidth'] = this.props.arrowWidth;
    if (this.props.skipIfNoElement) tour['skipIfNoElement'] = this.props.skipIfNoElement;
    if (this.props.nextOnTargetClick) tour['nextOnTargetClick'] = this.props.nextOnTargetClick;
    if (this.props.onNext) tour['onNext'] = this.props.onNext;
    if (this.props.onPrev) tour['onPrev'] = this.props.onPrev;
    if (this.props.onStart) tour['onStart'] = this.props.onStart;
    if (this.props.onEnd) tour['onEnd'] = this.props.onEnd;
    if (this.props.onClose) tour['onClose'] = this.props.onClose;
    if (this.props.onError) tour['onError'] = this.props.onError;

    if(this.props.i18n) {
      let i18n = {};
      if (this.props.nextBtn) i18n['nextBtn'] = this.props.nextBtn;
      if (this.props.prevBtn) i18n['prevBtn'] = this.props.prevBtn;
      if (this.props.doneBtn) i18n['doneBtn'] = this.props.doneBtn;
      if (this.props.skipBtn) i18n['skipBtn'] = this.props.skipBtn;
      if (this.props.closeTooltip) i18n['closeTooltip'] = this.props.closeTooltip;
      if (this.props.stepNums) i18n['stepNums'] = this.props.stepNums;
      tour['i18n'] = i18n;
    }

    this.state = {
      tour: tour,
      customRenderer: this.props.customRenderer,
    };
  }

  getChildContext() {
    return {
      tour: this.state.tour,
      customRenderer: this.state.customRenderer,
      hopscotch,
    };
  }

  componentDidMount() {
    this.startTour();
  }

  componentDidUpdate() {
    this.startTour();
  }

  startTour() {
    const state = hopscotch.getState();
    if (this.props.active && (!state || state.indexOf(`${this.props.id}:`) === 0)) {
      if (this.state.customRenderer) {
        hopscotch.setRenderer(this.state.customRenderer);
      }
      hopscotch.startTour(this.state.tour);
    }
  }

  render() {
    return this.props.children;
  }
}

/* Utility functions */

// This is not in the utils folder due to the dependency on hopscotch
export const nextOnCallback = (tour, callback) => {
  const currentStep = hopscotch.getCurrStepNum();

  callback(function() {
    hopscotch.startTour(tour, currentStep);
  });
};