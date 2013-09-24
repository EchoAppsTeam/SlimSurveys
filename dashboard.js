(function(jQuery) {
"use strict";

var $ = jQuery;

if (Echo.AppServer.Dashboard.isDefined("SlimSurveys.Apps.Surveys.Dashboard")) return;

var dashboard = Echo.AppServer.Dashboard.manifest("SlimSurveys.Apps.Surveys.Dashboard");

dashboard.inherits = Echo.Utils.getComponent("Echo.AppServer.Dashboards.AppSettings");

dashboard.labels = {
	"surveyId": "Survey Id"
};

dashboard.init = function() {
	this.set("data", this.config.get("instance.config"));
	this.parent();
};

dashboard.templates.main =
	'<div class="{class:container}">' +
		'<span class="{class:title}">{label:surveyId}</span>' +
		'<input type="text" class="input-small input-block-level {class:input}">' +
	'</div>';

dashboard.renderers.input = function(element) {
	var self = this;
	return element.val(this.get("data.surveyId"))
		.blur(function() {
			self.setValue(element.val());
		}).keypress(function(event) {
			if (event.which === 13) { // "Enter" == 13
				self.setValue(element.val());
			}
		});
};

dashboard.methods.setValue = function(value) {
	if (value !== this.get("data.surveyId")) {
		this.set("data.surveyId", value);
		this.update(this.get("data"));
	}
};

dashboard.css =
	'.echo-sdk-ui .{class:input}[type="text"] { min-height: 25px; font: 12px Arial; color: #787878; margin-bottom: 0; }' +
	'.echo-sdk-ui .{class:title} { color: #787878; font: bold 12px/12px Arial; display: block; margin-bottom: 3px; }';

Echo.AppServer.Dashboard.create(dashboard);

})(Echo.jQuery);
