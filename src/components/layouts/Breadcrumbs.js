import React from "react"
import { Link, useParams } from "react-router-dom"
import breadcrumbimg from "../../assets/img/breadcrumb.jpg"

const GetBreadcrumbs = (pagename) => {
	const { service, subservice, portfolio } = useParams()
	if (service) {
		let breadcrumb = {
			pagename: subservice ? subservice : service,
			items: [{ name: "Services", url: "/services" }],
		}
		if (subservice) {
			breadcrumb.items.push({ name: service, url: `/servicedetail/${service}` })
			breadcrumb.items.push({ name: subservice })
		} else {
			breadcrumb.items.push({ name: service })
		}
		return breadcrumb
	} else if (portfolio) {
		let breadcrumb = {
			pagename: portfolio,
			items: [{ name: "Portfolio", url: "/portfolio" }, { name: portfolio }],
		}
		return breadcrumb
	} else {
		let breadcrumb = {
			pagename: pagename,
			items: [{ name: "Home", url: "/" }, { name: pagename }],
		}
		return breadcrumb
	}
}

const Breadcrumbs = ({ pagename }) => {
	const breadcrumb = GetBreadcrumbs(pagename)
	return (
		<section className='breadcrumb-section bg-img-c' style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
			<div className='container'>
				<div className='breadcrumb-text'>
					<ul>
						{breadcrumb.items.map((item, i) => {
							if (item.url) {
								return (
									<li key={i}>
										<Link to={item.url}>{item.name}</Link>
									</li>
								)
							} else {
								return <li key={i}>{item.name}</li>
							}
						})}
					</ul>
					<h1 className='page-title active'>{breadcrumb.pagename}</h1>
				</div>
			</div>
		</section>
	)
}

export default Breadcrumbs
