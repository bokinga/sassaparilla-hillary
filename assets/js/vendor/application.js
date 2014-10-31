/**
 * Our project namespace.
 */

project.init = function() 
{

	/* Globally cache the jQuery reference to the document to avoid repeated lookups.
	* This should be used as the base of all document-wide
	* searches where a closer context isn't available e.g.
	* var $someElement = $.root.find(someSelector);
	*/
	$.root = $(document.body);

	/*=====================================
	Call modularised setup functions
	*/
	
	// Speed things up on mobile
	project.setupFastclick();
	
};



/* Call the project init function
 * This syntax is equivalant to calling $(document).ready();
 */
$(function() {project.init();});
