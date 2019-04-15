chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
		console.log("Blocking web socket connection");
		return {cancel: true};
	},
    {
		urls: [
			"<all_urls>"
		],
		types: [
			"websocket"
		]
	},
    ["blocking"]
);
		
