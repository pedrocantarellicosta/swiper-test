module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
  rules: {
    'length-zero-no-unit': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'no-descending-specificity': null,
    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: 'device-pixel-ratio' }],
    'media-feature-range-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-class-pattern': [/^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$/, { resolveNestedSelectors: true }]
  }
}
