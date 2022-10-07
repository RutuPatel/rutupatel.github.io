import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Preloader
import Preloader from './components/layouts/Preloader'
// Pages
import Hometwo from './components/pages/Hometwo'
import About from './components/pages/About'
import Portfoliotwo from './components/pages/Portfoliotwo'
import Portfoliodetail from './components/pages/Portfoliodetail'
import Statistics from './components/pages/Statistic'
import Service from './components/pages/Service'
import Servicedetail from './components/pages/Servicedetail'
import Pagenotfound from './components/pages/Pagenotfound'
import Contact from './components/pages/Contact'

import Backtotop from './components/layouts/Backtotop';
import { GlobalContextProvider } from './helper/GlobalContext';

const App = () => {
	return (
		<GlobalContextProvider>
			<Preloader />
			<Routes>
				<Route exact path="/" element={<Hometwo />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/services" element={<Service />} />
				<Route exact path="/servicedetail/:service" element={<Servicedetail />}>
					<Route exact path=":subservice" element={<Servicedetail />} />
				</Route>
				<Route exact path="/portfolio" element={<Portfoliotwo />} />
				<Route exact path="/portfoliodetail/:portfolio" element={<Portfoliodetail />} />
				<Route exact path="/statistics" element={<Statistics />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route path="*" element={<Pagenotfound />} />
			</Routes >
			<Backtotop />
		</GlobalContextProvider >
	)
}

export default App
