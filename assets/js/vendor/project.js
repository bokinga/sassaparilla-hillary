/**
 * @file project setup functions.
 */

// Create our only global object with the project namespace
var project = project || {};

/*=====================================
	project vars
*/

// debounce plugin
(function(e){e.extend({debounce:function(e,t,n,r){if(arguments.length==3&&typeof n!="boolean"){r=n;n=false}var i;return function(){var s=arguments;r=r||this;n&&!i&&e.apply(r,s);clearTimeout(i);i=setTimeout(function(){!n&&e.apply(r,s);i=null},t)}},throttle:function(e,t,n){var r,i,s;return function(){i=arguments;s=true;n=n||this;if(!r){(function(){if(s){e.apply(n,i);s=false;r=setTimeout(arguments.callee,t)}else{r=null}})()}}}})})(jQuery)


/*=====================================
	Setup fastclick https://github.com/ftlabs/fastclick
*/
project.setupFastclick = function()
{
	FastClick.attach(document.body);
};