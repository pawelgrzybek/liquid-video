(function(global) {
  function LiquidVideo(elm) {
    // loop through all videos
    for (var i = 0; i < elm.length; i++) {
      var videoWidth = elm[i].offsetWidth;
      var videoHeight = elm[i].offsetHeight;
      var videoRatio = videoHeight / videoWidth * 100 + '%';

      // create wraper per video and add some styles
      var videoWrapper = document.createElement('div');
      videoWrapper.style.position = 'relative';
      videoWrapper.style.paddingBottom = videoRatio;

      // insert each video inside new wrapper
      elm[i].parentNode.insertBefore(videoWrapper, elm[i]);
      videoWrapper.appendChild(elm[i]);

      // and add some styling to video
      elm[i].style.position = 'absolute';
      elm[i].style.width = '100%';
      elm[i].style.height = '100%';
    }
  }

  global['LiquidVideo'] = LiquidVideo;
})(this);
