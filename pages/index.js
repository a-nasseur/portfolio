import Hero from '../components/Hero'
import Meta from '../utils/Meta'

import Section from '../components/Section';
import Projects from '../components/Projects';
import { projectsData } from '../database/projectsDB';
import AboutMe from '../components/AboutMe';





export default function Home() {

  

  return (
    <>
      <Meta />

      <Hero />

      <Section maxWidth='lg'>
        <Projects data={projectsData} />
      </Section> 

      <Section maxWidth='lg'>
          <AboutMe />
      </Section>   
    </>
  )
}
