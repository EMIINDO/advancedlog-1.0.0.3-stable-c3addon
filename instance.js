"use strict";

{
	const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.wackytoaster_advancedLog;
	
	PLUGIN_CLASS.Instance = class advancedLogInstance extends SDK.IInstanceBase
	{
		constructor(sdkType, inst)
		{
			super(sdkType, inst);
		}
		
		Release()
		{
		}
		
		OnCreate()
		{
		}
		
		OnPropertyChanged(id, value)
		{
		}
		
		LoadC2Property(name, valueString)
		{
			return false;		// not handled
		}
	};
}