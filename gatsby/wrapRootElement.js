import React from 'react'
// const Layout = require("./src/components/layout")

import { ThemeProvider } from 'styled-components'

import light from '../src/styles/themes/light'

// Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
//   setBodyAttributes({
//     className: "my-body-class",
//   })
// }

// Wraps every page in a component
export function wrapRootElement({ element, props }) {
  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}