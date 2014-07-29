Github soft-wrap
================

This is a [Greasemonkey](https://addons.mozilla.org/pt-br/firefox/addon/greasemonkey/) script that adds a "Soft wrap" button for every file and diff shown on page. This way, you can toggle soft-wrap for any type of file, either disabling soft-wrap for prose diffs (which are [enabled by default](https://github.com/blog/1707-soft-wrapping-on-prose-diffs)) or enabling them for any other diff or file.

Chrome users
------------

Download the script, open Google Chrome, open the Extensions page (chrome://extensions) the drag and drop the script into the page. This will install the script without the need of any other extension.

Gotcha
------

You may need to reload the page if you navigated from another Github page. Github uses JavaScript to make navigation between pages faster, but the scripts executes on page load. Therefore, this script will only add the button on code that is already on the page when it loads.
