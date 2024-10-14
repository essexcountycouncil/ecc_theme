/**
 * @file JS file for scroll to facets form behavior.
 */

(function localgovScrollToFacetResultsScript(Drupal, $) {
  Drupal.behaviors.localgovScrollToFacetResults = {
    attach: function (context) {
      const isMobile = window.matchMedia('only screen and (max-width: 600px)').matches;

      if(isMobile) {
        $(document).ready(function() {
          if($('.view-localgov-directory-channel .views-row').length) {
            $("html, body").animate({ scrollTop: $(".view-localgov-directory-channel.view-display-id-node_embed").offset().top }, "slow");
          }
        })
      }
    }
  };
}(Drupal, jQuery));
