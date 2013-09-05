window.SlimSurveysAdapter = function(config) {
	this.config = config;
	if (config.surveyId) {
		var iframe = document.createElement("iframe");
		iframe.width = "300";
		iframe.height = "250";
		iframe.frameBorder = "0";
		iframe.scrolling = "no";
		iframe.allowTransparency = "true";
		iframe.async = "true";
		iframe.setAttribute("style", "max-width: 300px;");
		iframe.src = "https://slimsurveys.com/survey/" + config.surveyId + "/embed";
		config.target.get(0).appendChild(iframe);
	}
};
