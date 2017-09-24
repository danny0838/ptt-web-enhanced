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
    return (await browser.storage.sync.get({[key]: this.defaultSettings[key]}))[key];
};

pweSettings.getAll = async function() {
    return await browser.storage.sync.get(this.defaultSettings);
};

pweSettings.set = async function(key, value) {
    return await browser.storage.sync.set({[key]: value});
};

pweSettings.reset = async function() {
    return await browser.storage.sync.clear();
};
