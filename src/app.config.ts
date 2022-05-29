export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subpackages: [
    {
      root: 'shadowA', // 分包1
      pages: [
        'pages/index/index'
      ]
    },
    {
      root: 'shadowB', // 分包2
      pages: [
        'pages/index/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
