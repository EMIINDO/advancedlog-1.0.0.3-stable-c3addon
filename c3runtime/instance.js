"use strict";

{
	globalThis.C3.Plugins.wackytoaster_advancedLog.Instance = class advancedLogInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();
			
			// Initialise object properties
			this._loggingActive = true;
			this.logTypes = {};
			this.iconTypes = {};
			
			if (properties)		// note properties may be null in some cases
			{
				this._loggingActive = properties[0] == true ? 1 : 0;
			}
		}
		
		_release()
		{
			super._release();
		}
		
		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}
		
		_loadFromJson(o)
		{
			// load state for savegames
		}
	};
}