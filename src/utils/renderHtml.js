import ReactHtmlParser from 'react-html-parser'

export const renderHtml = text => (typeof text == 'string' ? ReactHtmlParser(text) : '')
