module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: '/images/logo.jpg',

    navbar: [
      {
        text: 'Foo',
        link: '/',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
    ],
  },
}
