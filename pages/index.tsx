import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadeInUp, fadeIn, routeAnimation, stagger } from "../animations";

const Home = () => {
  return (
    <motion.section
      className="flex flex-col px-4 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h1 variants={fadeIn} className="my-3 font-light">
          Hello world,
          <br />I have been a professional Front-End Developer at established
          software companies for the past few years, using JavaScript frameworks
          like React, and Vue. On the backend, I have worked using languages
          like NodeJS, PHP, and Golang.
        </motion.h1>
        <motion.h1 variants={fadeIn} className="my-3 font-light">
          With over 10+ years of development experience, I am proficient in all
          aspects of the development cycle, from discovery, requirements
          gathering, planning, and coding to deployment, maintenance, and
          support. I possess experience working with a large agile team to
          develop scalable products in various programming languages. I can
          comprehend existing code quite well. Hence, fixing bugs, refactor- ing
          flawed code, or adding enhanced features are my primary strengths, but
          they are not limited to them.
        </motion.h1>
      </motion.div>
      <article className="pb-5 mt-5">
        <h6 className="my-3 text-xl font-bold">What I Offer ?</h6>
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-black "
            >
              <ServiceCard key={service.title} service={service} />
            </motion.div>
          ))}
        </motion.div>
      </article>
    </motion.section>
  );
};

export default Home;

// import Head from 'next/head'
/* <Head>
        <title>Next Portfolio App</title>
        <meta name="description" content="Next JS app with tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */

// This will pre-render this page on each request
// import type { GetServerSidePropsContext, GetStaticPropsContext, NextPage } from 'next'
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
