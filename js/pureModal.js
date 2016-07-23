;(function() {

	this.pureModal = function() {

		this.closeButton = null;
		this.modal = null;
		this.ovelay = null;
		this.titleArea = null;

		this.transitionEnd = transitionSelect();

		var defaults = {
			className: 'fade-and-drop',
			closeButton: true,
			content: "",
			maxWidth: 600,
			minWidth: 280,
			overlay: true,
			title: true,
			titleText: "",
			autoOpen: false
		};

		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}
		else {
			this.options = defaults;
		}
		
		if(this.options.autoOpen === true) this.open();

	}

	// Public Methods 

	pureModal.prototype.open = function() {
				
		buildModal.call(this);

		initEvent.call(this);

		// Recognize the element in browser for showing transition
		window.getComputedStyle(this.modal).height;

		this.modal.className = this.modal.className +
		(this.modal.offsetHeight > window.innerHeight ? " pureModal-open pureModal-anchored" : " pureModal-open");

		this.overlay.className = this.overlay.className + " pureModal-open";

	};

	pureModal.prototype.close = function() {

		var _ = this;

		// Remove the open class name
		this.modal.className = this.modal.className.replace(' pureModal-open', '');
		this.overlay.className = this.overlay.className.replace(' pureModal-open', '');

		// Remove modal and overlay from DOM after event "transitionend"
		this.modal.addEventListener(this.transitionEnd, function() {
			_.modal.parentNode.removeChild(_.modal);
		});
		this.overlay.addEventListener(this.transitionEnd, function() {
			if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
		});
		
	};

	// Private Methods

	function buildModal() {

		var content, contentArea, tmpNode;

		// Identify content type (HTML or String)
		if(typeof this.options.content === 'string') {
			content = this.options.content;
		}
		else {
			content = this.options.content.innerHTML;
		}

		// Create Document Fragment for modal window
		tmpNode = document.createDocumentFragment();

		// Create modal window
		this.modal = document.createElement('div');
		this.modal.className = 'pureModal ' + this.options.className;
		this.modal.style.minWidth = this.options.minWidth + 'px';
		this.modal.style.maxWidth = this.options.maxWidth + 'px';

		// Add title area
		if(this.options.title === true) {
			this.titleArea = document.createElement('div');
			this.titleArea.className = 'titleArea';
			this.titleArea.innerHTML = this.options.titleText;
			this.modal.appendChild(this.titleArea);
		}

		// Add close button
		if(this.options.closeButton === true) {
			this.closeButton = document.createElement('a');
			this.closeButton.className = 'closeButton';
			this.modal.appendChild(this.closeButton);
		}

		// Add overlay layout
		if(this.options.overlay === true) {
			this.overlay = document.createElement('div');
			this.overlay.className = 'modalOverlay';
			tmpNode.appendChild(this.overlay);
		}

		// Add content area
		contentArea = document.createElement('div');
		contentArea.className = 'content';
		contentArea.innerHTML = content;
		this.modal.appendChild(contentArea);

		if(this.options.title === true) {
			contentArea.style.paddingTop = "54px";
		}

		tmpNode.appendChild(this.modal);
		document.body.appendChild(tmpNode);

	}

	function initEvent() {

		if(this.closeButton) {
			this.closeButton.addEventListener('click', this.close.bind(this));
		}

		if(this.overlay) {
			this.overlay.addEventListener('click', this.close.bind(this));
		}
		
	}

	function transitionSelect() {
		var el = document.createElement("div");
		if (el.style.WebkitTransition) return "webkitTransitionEnd";
		if (el.style.OTransition) return "oTransitionEnd";
		return 'transitionend';
	}

	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

}());
