kaishi
================================
Mandarin (开始) or Japanese (開始) for start, or to begin.

##Description

An extremely minimal template for getting projects started. Includes a basic CSS reset and prelinked style.css and scripts.js files.

kaishi is meant for rapid prototyping and experiments, and does not have IE fallbacks or styles.

##Version History
* 1.4 Reorganization + Compass
	* Use compass by default
	* Added partials for variables and defaults
	* Swiched to page based css, _style => _index
	* css/scss => scss
	* Stripped out typekit code by default
* 1.3 Minor updates for 2015
	* Giving index some love after almost 2 years of no updates
	* Added .gitignore rules for codekit
* 1.2 Moved to compass
    * style.css => screen.css
    * Use codekit or other sass compiler to compile scss files (or just delete the scss folder and use screen.css)
* 1.1 Minor Adjustments
	* Commented out jQuery
		* Not all projects require jQuery, and it is useless to load something you are not using.
		* Simply uncomment line 23 to activate it.
	* Stripped [.clearfix] out of css. Was not being used enough to justify a place in the base css.
* 1.0 Release Version: *Added primary files, stripped comments and added readme*