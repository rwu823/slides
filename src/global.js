window.React = require('react')
window.ReactDOM = require('react-dom')

import 'spectacle/lib/themes/default/index.css'
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from 'spectacle'


window.Appear = Appear
window.BlockQuote = BlockQuote
window.Cite = Cite
window.CodePane = CodePane
window.Deck = Deck
window.Fill = Fill
window.Heading = Heading
//window.Image = Image
window.Layout = Layout
window.Link = Link
window.ListItem = ListItem
window.List = List
window.Markdown = Markdown
window.Quote = Quote
window.Slide = Slide
window.Spectacle = Spectacle
window.Text = Text

if (__isDev) {
  const script = document.createElement('script')

  script.src = `//${location.hostname}:3000/browser-sync/browser-sync-client.${__bsVer}.js`
  script.async = true

  document.head.appendChild(script)
}