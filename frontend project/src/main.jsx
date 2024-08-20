// import Banner from '@/components/Banner';
import Header from './components/Header';
// import AboutUs from '@/components/AboutUs';
// import Footer from '@/components/Footer';
// import ServicesHome from '@/components/ServiciosHome';
import  { useState, useEffect } from 'react';
 

const HomePage = () => {

  const App = () => {
    const [isClient, setIsClient] = useState(false)
   
    useEffect(() => {
      setIsClient(true)
    }, [])
   
    return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
  }

  return (
    <>
      <Head>
        <title>Guardian Security</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Header />
          {/* <AboutUs />
          <Banner />
          <ServicesHome />
        <Footer /> */}
      </div>
    </> 
  )
}

export default HomePage;
