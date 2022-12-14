import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Works from '../components/Works.jsx'
import Footer from '../components/Footer'
import Certifications from '../components/Certifications'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MANI. | SOFTWARE DEVELOPER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href= '/favicon.png'/>
      </Head>
      
      <Main />
      <About />
      <Skills/>
      <Works />
      <Certifications />
      <Contact/>

      <Footer/>
    </div>
  )
}
