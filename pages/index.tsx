import type { GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import ServiceCard from '../components/ServiceCard';
 import { services } from '../data'


const Home = () => {
  return (
    <section className='flex flex-col px-6 pt-1'>
      {/* <Head>
        <title>Next Portfolio App</title>
        <meta name="description" content="Next JS app with tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <h5 className='my-3 font-medium'>I like to introduce myself as an experienced Sr. Front End Developer (UI/UX) dedicated to build state-of-the-art, easy to use, user-friendly websites and applications are truly a passion of mine.</h5>
      <article className='pb-5 mt-5'>
        <h6 className='my-3 text-xl font-bold'>What I Offer ?</h6>
        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map(service => ( 
            <div key={service.title} className='bg-gray-200 rounded-lg lg:col-span-1 dark:bg-black '>
            <ServiceCard key={service.title} service={service}/> 
            </div>
          ))}
          </div>
      </article>
    </section>
  )
}

export default Home



// This will pre-render this page on each request 
/*
export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  // logic goes here

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  console.log('SSR', services)

  
  return{
    props : {
      services: data.services
    }
  }
  
}
*/



// will pre-render a page at build time using the props returned from the function
/* export const getStaticProps = async (context: GetStaticPropsContext) => {

  // logic goes here

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return{
    props : {
      services: data.services
    }
  }
  
}
*/