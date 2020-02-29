import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { jarallax, jarallaxVideo, jarallaxElement } from 'jarallax';

class Parallax extends Component {
  jarallax = React.createRef();

  componentDidMount() {
    const {
      image,
      video,
      element,
      elementOptions,
      disableParallax,
      disableVideo,
      disableVideoLazyLoading,
      disableVideoLoop,
      disableVideoPlayOnlyVisible,
      elementInViewport,
      imgElement,
      imgPosition,
      imgRepeat,
      imgSize,
      imgSrc,
      videoEndTime,
      videoStartTime,
      videoVolume,
      zIndex
    } = this.props;

    const imageOptions = {
      disableParallax,
      elementInViewport,
      imgElement,
      imgPosition,
      imgRepeat,
      imgSize,
      imgSrc,
      zIndex
    };

    const videoOptions = {
      disableVideo,
      videoEndTime,
      videoLazyLoading: !disableVideoLazyLoading,
      videoLoop: !disableVideoLoop,
      videoPlayOnlyVisible: !disableVideoPlayOnlyVisible,
      videoStartTime,
      videoVolume
    };

    jarallax(
      this.jarallax.current,
      image
        ? imageOptions
        : video
        ? videoOptions
        : element
        ? elementOptions
        : null
    );

    jarallaxVideo(this.jarallax.current);
    jarallaxElement(this.jarallax.current);
  }

  componentWillUnmount() {
    jarallax(this.jarallax.current, 'destroy');
  }

  render() {
    const {
      alt,
      children,
      className,
      element,
      image,
      keepImg,
      speed,
      tag: Tag,
      threshold,
      type,
      video,
      height,
      width
    } = this.props;

    const parentClasses = classNames(
      keepImg ? 'jarallax-keep-img' : 'jarallax',
      className
    );
    const elementClasses = classNames(Tag === 'span' ? 'd-inline-block' : null);

    return (
      <>
        {image && (
          <Tag
            ref={this.jarallax}
            className={parentClasses}
            style={{
              height,
              width
            }}
            data-jarallax
            data-type={type}
            data-speed={speed}
          >
            <img className='jarallax-img ' src={image} alt={alt} />
            {children}
          </Tag>
        )}
        {video && (
          <Tag
            ref={this.jarallax}
            className={parentClasses}
            style={{
              height,
              width
            }}
            data-jarallax
            data-type={type}
            data-speed={speed}
            data-video-src={video}
          >
            {children}
          </Tag>
        )}
        {element && (
          <Tag
            className={elementClasses}
            ref={this.jarallax}
            data-jarallax-element={speed}
            data-threshold={threshold}
          >
            {children}
          </Tag>
        )}
      </>
    );
  }
}

Parallax.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  disableParallax: PropTypes.func,
  disableVideo: PropTypes.func,
  elementInViewport: PropTypes.node,
  height: PropTypes.string,
  image: PropTypes.string,
  imgElement: PropTypes.string,
  imgPosition: PropTypes.string,
  imgRepeat: PropTypes.string,
  imgSize: PropTypes.string,
  keepImg: PropTypes.bool,
  speed: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  threshold: PropTypes.node,
  type: PropTypes.string,
  video: PropTypes.string,
  videoEndTime: PropTypes.number,
  videoLazyLoading: PropTypes.bool,
  videoLoop: PropTypes.bool,
  videoPlayOnlyVisible: PropTypes.bool,
  videoStartTime: PropTypes.number,
  videoVolume: PropTypes.number,
  width: PropTypes.string,
  zIndex: PropTypes.number
};

Parallax.defaultProps = {
  alt: 'MDBParallax image',
  disableParallax: null,
  disableVideo: null,
  elementInViewport: null,
  height: '600px',
  imgElement: '.jarallax-img',
  imgPosition: '50% 50%',
  imgRepeat: 'no-repeat',
  imgSize: 'cover',
  keepImg: false,
  speed: 0.5,
  tag: 'div',
  threshold: 'null null',
  type: 'scroll',
  videoEndTime: 0,
  videoLazyLoading: true,
  videoLoop: true,
  videoPlayOnlyVisible: true,
  videoStartTime: 0,
  videoVolume: 0,
  width: '100%',
  zIndex: -100
};

export default Parallax;
export { Parallax as MDBParallax };
