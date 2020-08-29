import Head from 'next/head'
import Layout from '../components/layout'

export default function MoreInfo () {
    return (
      <Layout >
        <Head>
          <title >More About DevSquad</title>
        </Head>
        <section className='container'>
            <h2 className='text-center'>I want to help people with:</h2>
          <p>
              Key Algorithms - conceptually how they work and implementations<br />
              Interview Kit - mock interview tools, sample questions, prep steps<br />
              Resume Tips - ways to help yourself honestly represent yourself and get a job where you can succeed<br />
              Sample Career Paths - What are some common paths you can take<br />
              How to grow your career - Regardless of your path, how can you keep growing?<br />

          </p>
 
        </section>

      </Layout>
    )
  }