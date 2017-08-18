const pweSettings = {};

pweSettings.defaultSettings = {
    resizeImage: true,
};

pweSettings.get = async function(key) {
    const settings = await browser.storage.local.get(key);
    return (settings[key] !== undefined) ? settings[key] : defaultSettings[key];
};

pweSettings.getAll = async function() {
    const settings = await browser.storage.local.get();
    return Object.assign({}, pweSettings.defaultSettings, settings);
};

pweSettings.set = async function(key, value) {
    return browser.storage.local.set({
        [key]: value
    });
}