const pweSettings = {};

pweSettings.defaultSettings = {
    showFloor: true,
    countPushStatistics: true,
    highlightPosterUserid: true,
    resizeImage: true,
    clickToDownloadImage: false,
    navbarAutohide: true,
    detectThread: false,
};

pweSettings.get = async function(key) {
    const items = {[key]: this.defaultSettings[key]};
    try {
        return (await browser.storage.sync.get(items))[key];
    } catch(ex) {
        return (await browser.storage.local.get(items))[key];
    }
};

pweSettings.getAll = async function() {
    const items = this.defaultSettings;
    try {
        return await browser.storage.sync.get(items);
    } catch(ex) {
        return await browser.storage.local.get(items);
    }
};

pweSettings.set = async function(key, value) {
    const items = {[key]: value};
    try {
        return await browser.storage.sync.set(items);
    } catch(ex) {
        return await browser.storage.local.set(items);
    }
};

pweSettings.reset = async function() {
    try {
        return await browser.storage.sync.clear();
    } catch(ex) {
        return await browser.storage.local.clear();
    }
};
