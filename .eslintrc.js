module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  globals: {
    API: false,
    Vue: false,
    process: false
  },
  rules: {
    'no-var': 2,
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-dupe-args': 2, // 函数参数不能重复
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-multi-spaces': 1, // 不能用多余的空格
    'no-multiple-empty-lines': [1, { max: 2 }], // 空行最多不能超过2行
    'no-redeclare': 2, // 禁止重复声明变量
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'no-undef': 1, // 不能有未定义的变量
    "camelcase": 2, // 强制驼峰法命名
    "eqeqeq": 2, // 必须使用全等
    'accessor-pairs': 2, // 逗号后面加空格
    'spaced-comment': 2, // 注释后面加空
    'no-unreachable': 2, // 不能有无法执行的代码
    'no-use-before-define': 2, // 未定义前不能使用
    'no-unused-expressions': 2, // 禁止无用的表达式
    'no-unused-vars': 2 // 禁止出现未使用过的变量
  }
};