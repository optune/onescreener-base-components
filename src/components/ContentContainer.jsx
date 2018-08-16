import Button from './Button.jsx'
import CenterContainer from './CenterContainer.jsx'

const ContentContainer = CenterContainer.extend`
  flex-flow: column;
  width: 100%;
  height: auto;

  > ${Button} {
    margin: 2em auto;
  }

  > p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    margin: 1.2em;
  }

  margin-bottom: 120px; /* height of bottom subnavigation bar */
`

export default ContentContainer
