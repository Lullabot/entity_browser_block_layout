/**
 * @file
 * Defines the behavior that decorates Entity Browser views.
 *
 * Highly inspired on the media_entity_browser contrib module.
 */

(function ($, Drupal) {

  "use strict";

  /**
   * Update the class of a col based on the status of a checkbox.
   *
   * @param {object} $col
   * @param {object} $input
   */
  function updateClasses($col, $input) {
    $col[$input.prop('checked') ? 'addClass' : 'removeClass']('checked');
  }

  /**
   * Attaches our custom behavior.
   */
  Drupal.behaviors.GaEntityBrowserDecorationBehavior = {
    attach: function (context, settings) {
      // Run through each col to add the default classes.
      $('.views-col', context).each(function () {
        var $col = $(this);
        var $input = $col.find('.views-field-entity-browser-select input');
        updateClasses($col, $input);
      });

      // Add a checked class when clicked.
      $('.views-col', context).once().click(function () {
        var $col = $(this);
        var $input = $col.find('.views-field-entity-browser-select input');
        $input.prop('checked', !$input.prop('checked'));
        updateClasses($col, $input);
      });

      // Select/unselect the row with a click anywhere inside the row.
      $('.view .views-table tr', context).once().click(function (e) {
        var $row = $(this);
        var $input = $row.find('.views-field-entity-browser-select input');
        // But only if the click wasn't right on the input, in which case our
        // code would make it unselected (after the browser selected it).
        if (e.target.tagName !== 'INPUT') {
          $input.prop('checked', !$input.prop('checked'));
        }
        updateClasses($row, $input);
      });
    }
  };

}(jQuery, Drupal));
