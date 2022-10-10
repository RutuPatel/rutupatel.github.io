import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Preloader
import Preloader from './components/layouts/Preloader'
// Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Portfoliodetail from './components/pages/Portfoliodetail'
import Statistics from './components/pages/Statistic'
import Service from './components/pages/Service'
import Servicedetail from './components/pages/Servicedetail'
import Pagenotfound from './components/pages/Pagenotfound'
import Contact from './components/pages/Contact'
//component
import Backtotop from './components/layouts/Backtotop';
//Context
import { GlobalContextProvider } from './contexts/GlobalContext';

const App = () => {
	return (
		<GlobalContextProvider>
			<Preloader />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/services" element={<Service />} />
				<Route exact path="/servicedetail/:service" element={<Servicedetail />}>
					<Route exact path=":subservice" element={<Servicedetail />} />
				</Route>
				<Route exact path="/portfolio" element={<Portfolio />} />
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
