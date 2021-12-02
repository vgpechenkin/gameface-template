(function() {
	if (window.engine) {
		CSSStyleDeclaration.prototype.setProperty = function(property, value, priority) {
			// Convert dash-separated property to camelCase
			const key = property.replace(/-([a-z])/gi, (s, group) => group.toUpperCase());
			this[key] = value;
		};
	}
})();
