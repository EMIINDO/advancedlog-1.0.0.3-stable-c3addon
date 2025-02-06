"use strict";

{
	const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.wackytoaster_advancedLog;
	
	PLUGIN_CLASS.Type = class advancedLogType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}