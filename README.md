pureModal.js
==================
Pure JavaScript plugin for creating modal windows with support for multiple independent windows

Installation
--------------------

You can install [pureModal.js](https://www.npmjs.com/package/pureModal) with npm:

    npm install pureModal
and/or include files:

```html
<!-- CSS -->
<link rel="stylesheet" href="<your_way>/pureModal.css">

<!-- JavaScript -->
<script src="<your_way>/pureModal.js"></script>
 ```
 
  Usage
--------------------
Call plugin with your parametrs or without parametrs (default):

```javascript
var modal = new pureModal();
```
    
and add `modal.open()` event on your page. 

Example:

```javascript
	var modal = new pureModal({
		autoOpen: true,
		content: "Your content or link on html tag",
		titleText: "It's modal title"
	});
	
	var button = document.querySelector('.openLink');

	button.addEventListener('click', function() {
		modal.open();
	});
   ```
	

API Methods
-------
Public methods are called from the pureModal.js object:

`.open()` - open current window
`.close()` - close current window

Options
-------
 - `className` - css class for your animation. Type `String`. Default value `fade-and-drop`. You can change animation by adding your classes or choice existing in pureModal.css.
 -  `closeButton` - type `Boolean`. Default value `true`.
 -  `content` - type `String`. Default value none.  This can be string or html.
 - `maxWidth` and `minWidth` - type `Number`. Default `600` and `280`.
 - `overlay` - type `Boolean`. Default value `true`.
 -  `title` - type `Boolean`. Default value `true`.
 - `titleText` - type `String`. Default value none.
 - `autoOpen` - type `Boolean`. Default value `true`.

Features
--------

 - More options and methods
 - Add events
 - Handles loading errors intelligently
 - More customization in js without edit css
 - New default animations or usage `animate.css`
 - Send your proposals