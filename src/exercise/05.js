// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box({backgroundColor, size, text}) {
  return (
      <div className={`box box--${size}`} style={{backgroundColor, fontStyle: 'italic'}}>
        {text}
      </div>
  )
}

function App() {
  return (
    <div>
      <Box backgroundColor="lightblue" size="small" text="small lightblue box"/>
      <Box backgroundColor="pink" size="medium" text="medium pink box"/>
      <Box backgroundColor="orange" size="large" text="large orange box"/>
    </div>
  )
}

export default App
