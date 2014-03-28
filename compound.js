// Compound 1.0.0
// more on //github.com/haggen/compound
;(function($) {

  'use strict';

  function Compound(element, options) {
    var that = this;

    this.element = $(element);

    if(this.element.length < 1) {
      return false;
    }

    if('children' in options) {
      $.each(options.children, function(key, value) {
        that[key] = $(value);
      });

      delete options.children;
    }

    if('events' in options) {
      $.each(options.events, function(key, value) {
        var args = key.split(' ');

        that.on(args[0], that[args[1]].selector, function(e) {
          if(typeof value === 'function') {
            value.call(that, e);
          } else {
            that[value](e);
          }
        });
      });

      delete options.events;
    }

    $.each(options, function(key, value) {
      that[key] = value;
    });

    if('ready' in this) {
      this.ready();
    }
  }

  Compound.prototype = {
    on: function() {
      this.element.on.apply(this, arguments);
    },

    off: function() {
      this.element.off.apply(this, arguments);
    },

    trigger: function() {
      this.element.trigger.apply(this, arguments);
    }
  };

  $.fn.compound = function(options) {
    return this.each(function() {
      return new Compound(this, options);
    });
  };

})(this.jQuery);
