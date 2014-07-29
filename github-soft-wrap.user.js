// ==UserScript==
// @name        Github soft-wrap toggler
// @namespace   http://luiz.github.io
// @description Adds a button "Soft-wrap" that toggles soft wrap on files and diffs shown on Github
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==
(function($) {
	function toggleOnDiff(container) {
		container.toggleClass("soft-wrap");
	}
	function toggleOnFile(container) {
		var $pre = container.find("pre"),
		$lines = $pre.find(".line");
		if ($pre.css("white-space") == "pre") {
			$pre.css("white-space", "pre-wrap");
			$lines.css("height", "auto");
		} else {
			$pre.css("white-space", "pre");
		}
		$lines.each(function() {
			var $line = $(this),
			correspondingSpanId = "#" + $line.attr("id").replace("LC", "L");
			$(correspondingSpanId).css("height", $line.css("height"));
		});
	}
	$("<button>")
	.addClass("minibutton", "soft-wrap")
	.text("Soft wrap")
	.prependTo(".file:has(.file-code) .actions")
	.click(function() {
		var $this = $(this),
		$fileContainer = $this.closest(".file");
		if ($fileContainer.has("pre").length == 0) {
			toggleOnDiff($fileContainer);
		} else {
			toggleOnFile($fileContainer);
		}
		$this.toggleClass("selected");
	})
	.each(function() {
		var $this = $(this);
		if ($this.closest(".file").is(".soft-wrap")) {
			$this.addClass("selected");
		}
	});
}(jQuery));
