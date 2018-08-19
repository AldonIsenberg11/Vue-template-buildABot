module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console'           : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger'          : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle"         : ["error", "never"],
    "semi"                 : ["error", "never"],
    "no-multi-spaces"      : "off",
    "no-param-reassign"    : 0,
    "object-curly-spacing" : 0,
    "key-spacing"          : "off"

  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
