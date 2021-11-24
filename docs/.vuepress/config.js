module.exports = {
  lang: 'zh-CN',
  title: '你好， Press ！',
  description: '这是我的第一个 Press 站点',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],

  themeConfig: {
    logo: '/images/logo_1.png',
    home: '/',
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
    repo:'https://github.com/zericsong/growupwiki.git',
    sidebar:'auto',
  },
}
