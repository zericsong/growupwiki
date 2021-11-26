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
        text: 'poo',
        link: '/g2.md',
      },
      {
        text: 'Group',
        children: [
          { text: 'Chinese', link: '/guide/g.md' },
          { text: 'Japanese', link: '/guide2/2.md' }
        ],
      },
      {
        text: 'Group2',
        children: [
          { text: 'Chinese', link: '/guide/g.md' },
          { 
            text: 'Japanese', 
            children:[
              { text: 'Chinese', link: '/guide/g.md' },
              { text: 'Chinese', link: '/guide/g.md' },
              { text: 'Chinese', link: '/guide/g.md' }
            ] 
          }
        ],
      },
      '/guide2/2.md'
    ],
    repo:'https://github.com/zericsong/growupwiki.git',
    sidebar:'false',
  },
  
}
