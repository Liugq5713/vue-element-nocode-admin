module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-console": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/no-confusing-v-for-v-if":"off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
