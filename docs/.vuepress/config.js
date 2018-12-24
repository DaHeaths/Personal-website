module.exports = {
  title: 'Brown Hu',
  description: 'Replace the stars and rivers in the body with unlimited methods for the future.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        items: [
          { text: 'JavaScript', link: '/JavaScript/' },
          { text: 'CSS', link: '/CSS/' },
          { text: 'HTTP', link: '/HTTP/' },
          { text: 'Library', link: '/Library/' },
          { text: 'Wheel', link: '/Wheel/' },
        ]
      },
      { text: 'Project', link: '/Project/' },
      { text: 'Resume', link: '/Resume/' },
      { text: 'GitHub', link: 'https://github.com/hubingliang' },
    ],
    sidebar: {
      '/JavaScript/': [
        '',
        'shallow-copy',
        'sort',
        'event-model',
        'inherit',
        'this',
        'event-commission',
        'let&const',
        'qqq',
        'requestAnimationFrame',
        'Browser'
      ],
      '/CSS/': [
        '',
        '47css-trick',
        'rem',
        'clear-float'
      ],
      '/HTTP/': [
        '',
        'security',
        'caching',
        'status-code'
      ],
      '/Library/': [
        '',
        'emoji'
      ],
      '/Wheel/': [
        ''
      ]
    }
  },
  base: '/'
}