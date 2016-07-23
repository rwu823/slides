require('browser-sync').create()
  .init({
    open: false,
    files: ['gh-pages/**'],
    server: {
      index: 'index.html',
      baseDir: 'gh-pages',
      routes: {
        '/slides': 'gh-pages'
      }
    },
  })


