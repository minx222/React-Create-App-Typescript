module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // require使用报错
    '@typescript-eslint/no-var-requires': 0,
    // 依赖自动注入React环境报错
    'react/react-in-jsx-scope': 0,
    // any 类型
    '@typescript-eslint/no-explicit-any': 0,
    // 定义未使用
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    // 关闭名称校验
    'vue/multi-word-component-names': 'off',
    //允许使用any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    // switch语句强制default分支，也可添加 // no default 注释取消此次警告
    'default-case': 2,
    'no-console': 1, //禁止使用console
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-constant-condition': 2, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-sparse-arrays': 2, //禁止稀疏数组， [1,,2]
    'no-var': 0, //禁用var，用let和const代替
    semi: 0, //语句强制分号结尾
    strict: 2 //使用严格模式
  }
}
