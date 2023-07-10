(function($) {
	// horizontal
    $.fn.hasHorizontalScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
	$.fn.hasVerticalScrollBar = function() {
		return this.get(0).scrollWidth > this.width();
	}
})(jQuery);


console.log($('#diff-in-labor').hasHorizontalScrollBar())
console.log($('#diff-in-labor').hasVerticalScrollBar())