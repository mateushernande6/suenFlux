/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },

      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),

          crypto: require.resolve('crypto-browserify'),
          bson: require.resolve('bson'),
          // 'crypto-browserify': require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
        },
      },
    }),
  },
};
