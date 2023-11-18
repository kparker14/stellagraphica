var min_w = 300; // minimum video width allowed
var vid_w_orig;  // original video dimensions
var vid_h_orig;

jQuery(function() { // runs after DOM has loaded
    
    
    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery('video').attr('height'));
    $('#debug').append("<p>DOM loaded</p>");
    
    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');
});

function resizeToCover() {
    
    
    // set the video viewport to the window size
    jQuery('#video-wrapper').width(jQuery(window).width());
    jQuery('#video-wrapper').height(jQuery(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#video-wrapper').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
    jQuery('#video-wrapper').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
};

  /* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); */

        /* document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }); */

       // window.scrollTo(0, 130);

        //alert(window.scrollX + "," + window.scrollY);
        /* if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 100);
          } */
   /*  });
});   */

// The function actually applying the offset
/* function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
  }
   */
  // Captures click events of all <a> elements with href starting with #
  /* $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0); */