chrome = chrome || {};
chrome.runtime = chrome.runtime || {};
chrome.notifications = chrome.notifications || {
		onClicked: {
			addListener: function () {
			}
		},
		onClosed: {
			addListener: function () {
			}
		},
		create: function (notificationId, options, callback) {
			if (Notification.permission !== "granted")
				Notification.requestPermission();

			new Notification(options.title, options);

			callback(notificationId || new Date().getTime());
		}
	};
chrome.storage = chrome.storage || {};
chrome.storage.local = chrome.storage.local || {
		get: function (keys, callback) {
			callback(localStorage.getItem("storage"));
		},
		set: function (objects, callback) {
			localStorage.setItem("storage", objects);
			callback();
		}
	};
