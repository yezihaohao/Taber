chrome.runtime.sendMessage({ type: '__TAB_ID__' }, ({ tabId }) => {
    window.sessionStorage.setItem('__TAB_ID__', tabId);
});
