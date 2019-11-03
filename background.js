chrome.runtime.onMessage.addListener(function(message, { tab }, sendResponse) {
    if (message.type === '__TAB_ID__' && !!tab) {
        sendResponse({ tabId: tab.id });
    }
});
