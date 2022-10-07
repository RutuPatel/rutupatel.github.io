import React from 'react'
import { useGlobalContext } from '../../helper/GlobalContext'

const Preloader = () => {
	
	const { showPreloader } = useGlobalContext()

	const preloaderload = showPreloader ? '' : 'd-none'
	return (
		<div id="preloader" className={`${preloaderload}`}>
			<div className="loader-cubes">
				<div className="loader-cube1 loader-cube"></div>
				<div className="loader-cube2 loader-cube"></div>
				<div className="loader-cube4 loader-cube"></div>
				<div className="loader-cube3 loader-cube"></div>
			</div>
		</div>
	)
}

export default Preloader