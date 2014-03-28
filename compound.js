// Compound 1.0.1
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
        key = key.split(' ');

        that.on(key[0], key[1], function(e) {
          this[value](e);
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
      var args, action;

      args = [].slice.call(arguments);
      action = args.pop();

      console.log(args, action);

      args.push($.proxy(action, this));

      this.element.on.apply(this.element, args);
    },

    off: function() {
      this.element.off.apply(this.element, arguments);
    },

    trigger: function() {
      this.element.trigger.apply(this.element, arguments);
    }
  };

  $.fn.compound = function(options) {
    return this.each(function() {
      return new Compound(this, options);
    });
  };

})(this.jQuery);
