import customSoftwareDevelopment from  '../assets/img/Services/jpg/Custom.png'
import webDevelopment from  '../assets/img/Services/jpg/Web.png'
import ecommerceDevelopment from  '../assets/img/Services/jpg/Ecommerce.png'
import mobileDevelopment from  '../assets/img/Services/jpg/Mobile.png'
import uiuxDevelopment from  '../assets/img/Services/jpg/UI-UX.png'
import businessConsulting from  '../assets/img/Services/jpg/Consulting.png'

const services = [
    {
        id: 1,
        icon: "fal fa-cubes",
        image: customSoftwareDevelopment,
        url: "/servicedetail/Custom Software Development",
        name: 'Custom Software Development',
        description: 'Sed persicia unde omnis'
    },
    {
        id: 2,
        image: webDevelopment,
        url: "/servicedetail/Web Development",
        icon: "fal fa-laptop-code",
        name: 'Web Development',
        description: 'Sed perspicia unde omnis'
    },
    {
        id: 3,
        icon: "fal fa-cart-arrow-down",
        image: ecommerceDevelopment,
        url: "/servicedetail/E-Commerce Development",
        name: 'E-Commerce Development',
        description: 'Quis autem velrepres hend'
    }, 
    {
        id: 4,
        icon: "fal fa-mobile",
        image: mobileDevelopment,
        url: "/servicedetail/Mobile App Development",
        name: 'Mobile App Development',
        description: 'Quis autem velrepres hend'
    },
    {
        id: 5,
        icon: "fal fa-object-group",
        image: uiuxDevelopment,
        url: "/servicedetail/UI-UX Design",
        name: 'UI-UX Design',
        description: 'Sed perspicia unde omnis'
    },
    {
        id: 6,
        icon: "fal fa-handshake",
        image: businessConsulting,
        url: "/servicedetail/Business consulting",
        name: 'Business consulting',
        description: 'Sed persicia unde omnis'
    }
]

export default services