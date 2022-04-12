module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials','@storybook/addon-postcss',
    {
    /**
     * Fix Storybook issue with PostCSS@8
     * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
     */
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  },],
};
