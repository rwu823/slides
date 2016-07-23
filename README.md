

# Slides Boilerplate



```sh
$ git clone --depth 1 --branch boilerplate https://github.com/rwu823/slides.git
```



## Folder Structure

``` html
./
├── src/               # slide resources
│   ├── slide1/        # slide1 source
│   ├── slide2/        # slide2 source
│   ├── global.js      # slide resources
│   └── index.html     # index html template
├── scripts/           # npm scripts
├── webpack.config.js  
├── package.json
└── ...
```



## Commands

The commands is `npm scripts`, you can check it in `package.json`

### dev [slideName]

```sh
$ npm run dev simple-slide
```



### build [slideName]

```sh
$ npm run build simple-slide
```



