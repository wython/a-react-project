import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as React from 'react'
import { render } from 'react-dom'
import App from './layouts/app'

const root = document.createElement('div')
root.setAttribute('id', 'app')
document.body.appendChild(root)

render(<App />, root)