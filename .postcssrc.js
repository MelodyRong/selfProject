// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    //添加各种浏览器前缀
    "autoprefixer": {},
    //将px转化为rem
    "postcss-pxtorem": {
      //UI图片的基准值 750px就是75,640px就是64,默认为75
      remUnit: 37.5,
      remPrecision: 6, //准换成rem后的小数点精确数位 默认为6
      baseDpr: 2, //基准device pixel ratio值 默认为2
      //当然npm上还有很多options 按需求配置
      exclude: /node_modules/,
      selectorBlackList: [], // 忽略的样式, 正则
      propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部，正则
    },
  }
}
