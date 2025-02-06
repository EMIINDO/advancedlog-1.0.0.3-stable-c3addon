"use strict";

{
	globalThis.C3.Plugins.wackytoaster_advancedLog.Acts =
	{
		doLog (log, type, force)
		{
			if (force === 0){
				if (this._loggingActive == 0) return;
			}
			
			console.log("%c" + this.iconTypes[type] + " " + log, this.logTypes[type]);
			
		},
		
		setLogType (type, css, icon)
		{
			this.logTypes[type] = css;
			this.iconTypes[type] = icon;
		},
		
		setActive (set)
		{
			this._loggingActive = set;
		}
	};
}