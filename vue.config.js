module.exports = {
  publicPath: '././',
  pwa: {
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'public/sw.js',
      importWorkboxFrom: 'local'
    }
  },
};
