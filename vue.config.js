module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/scss/_variables.scss";
                  @import "@/scss/_mixins.scss";
                `
            }
        }
    },
    pwa: {
        name: 'Saucebox',
        themeColor: '#000000',
        msTitleColor: '#ffffff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'GenerateSW',
        iconPaths: {
            appleTouchIcon: 'img/icons/icon-152x152.png',
            msTileImage: 'img/icons/icon-144x144.png'
        }
    }
};
