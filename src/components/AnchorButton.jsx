import Button from './Button.jsx'

const AnchorButton = Button.withComponent('a').extend`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`

export default AnchorButton

