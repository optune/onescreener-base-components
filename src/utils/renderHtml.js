// Copied from here: https://github.com/kkfor/for-editor/blob/da5beef808997fbf68a421b62a84c36522f591dd/src/helpers/marked.js
import marked from 'marked'
import ReactHtmlParser from 'react-html-parser'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
})

const renderer = new marked.Renderer()

const paragraphParse = text => `<p>${text}</p>`

const linkParse = (href, title, text) => {
  return `<a href=${href}
      title=${title || href}
      target='_blank'
      }>${text}</a>`
}

renderer.paragraph = paragraphParse
renderer.link = linkParse

export const renderHtml = text =>
  typeof text == 'string' ? ReactHtmlParser(marked(text, { renderer })) : ''
