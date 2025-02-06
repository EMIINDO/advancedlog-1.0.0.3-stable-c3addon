// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
cr.plugins_.wackytoaster_advancedLog = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var pluginProto = cr.plugins_.wackytoaster_advancedLog.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		this.loggingActive = true;
		
		// Initialise object properties
		
		this.logTypes = {};
		this.iconTypes = {};
	};
	
	var instanceProto = pluginProto.Instance.prototype;
	
	instanceProto.onCreate = function()
	{
		// Read properties set in C3
		this.loggingActive = this.properties[0];
	};
	
	instanceProto.saveToJSON = function ()
	{
		return {};
	};
	
	instanceProto.loadFromJSON = function (o)
	{
	};
	
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};
	
	pluginProto.cnds = new Cnds();

	//////////////////////////////////////
	// Actions
	function Acts() {};

	Acts.prototype.setLogType = function (type, css, icon)
	{
		this.logTypes[type] = css;
		this.iconTypes[type] = icon;
	};
	
	Acts.prototype.doLog = function (log, type, force)
	{
		if (force === 0){
			if (!this.loggingActive) return;
		}
		
		console.log("%c" + this.iconTypes[type] + " " + log, this.logTypes[type]);
		
	};
	
	Acts.prototype.setActive = function (set)
	{
		let s;
		set == 1 ? s = true : s = false;
		
		this.loggingActive = s;	
	};
	
	pluginProto.acts = new Acts();

	//////////////////////////////////////
	// Expressions
	function Exps() {};
	
	pluginProto.exps = new Exps();
	
	Exps.prototype.isActive = function (ret)
	{
		ret.set_int(this.loggingActive == true ? 1 : 0);
	};

}());