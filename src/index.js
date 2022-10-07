import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

// Css
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-circular-progressbar/dist/styles.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/style.css'
import 'react-modal-video/css/modal-video.css'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)