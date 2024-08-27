import Header from '../../components/Header/index'
import AboutUs from '../../components/AboutUs/index'
import Footer from '../../components/Footer/index'
import BannerHome from '../../components/BannerHome/index'
import ServicesHome from '../../components/ServicesHome/index'
import './home.page.css'

const HomePage = () => {
  return (
  <>
    <Header />
    <AboutUs/>
    <BannerHome/>
    <ServicesHome/>
    <Footer/>
  </>
  )
}

export default HomePage;