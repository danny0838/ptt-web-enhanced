export default {
    sourceDir: 'src',
    artifactsDir: 'dist',
    build: {
        filename: '{name}-{version}.xpi',
        overwriteDest: true,
    },
    run: {
        startUrl: [
            'https://www.ptt.cc/bbs/index.html',
        ],
    },
};
