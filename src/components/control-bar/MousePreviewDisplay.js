import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

function MousePreviewDisplay({
  duration,
  mouseTime,
  imageUrl,
  className,
  text
}) {
  if (!mouseTime.time) {
    return null;
  }

  const time = text || formatTime(mouseTime.time, duration);

  // For more flexibility these should all be based on the actual image dimensions
  const width = 180;
  const height = width / (16 / 9);
  const frames = Math.ceil(duration / Math.ceil(duration / 200)) + 1;
  const frameOffset = Math.ceil((mouseTime.time / duration) * frames) - 1;

  return (
    <div
      className={classNames('video-react-mouse-preview', className)}
      style={{
        left: `${mouseTime.position}px`
      }}
    >
      <div
        className={classNames('video-react-mouse-preview-image', className)}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: `0 -${frameOffset * height}px`
        }}
      />
      <div className={classNames('video-react-mouse-preview-time', className)}>
        {time}
      </div>
    </div>
  );
}

MousePreviewDisplay.propTypes = {
  duration: PropTypes.number,
  mouseTime: PropTypes.object,
  className: PropTypes.string
};
MousePreviewDisplay.displayName = 'MousePreviewDisplay';

export default MousePreviewDisplay;
