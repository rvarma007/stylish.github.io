;
(function($, window, document, undefined) {
    'use strict';
    var pluginName = 'tipi',
        defaults = {
            text: 'Hello, World!',
            margin: 3
        };

    function Plugin(element, options) {
        this.$el = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            this.$tip = $('<div class="tipi" />').text(this.settings.text);
            $('body').append(this.$tip);
            return this.$el;
        },
        text: function(val) {
            if (!val) {
                return this.settings.text;
            }
            this.$tip.text(val);
            this.settings.text = val;
            return this.$el;
        },
        show: function() {
            this.$tip.css({
                top: this.$el.offset().top - this.$tip.outerHeight() - this.settings.margin,
                left: this.$el.offset().left
            });
            this.$tip.show();
            return this.$el;
        },
        hide: function() {
            this.$tip.hide();
            return this.$el;
        },
        center: function() {
            this.$tip.css({
                left: this.$el.offset().left + (this.$el.width() / 2) - (this.$tip.width() / 2)
            });
        }
    };
    $.fn[pluginName] = function(options) {
        var args = Array.prototype.slice.call(arguments);
        this.each(function() {
            var instance = $.data(this, 'plugin_' + pluginName),
                method;
            if (!instance) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            } else {
                method = args.shift();
                return instance[method].apply(instance, args);
            }
        });
        return this;
    };
})(jQuery, window, document);