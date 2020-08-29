import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Devsquad is a site dedicated to helping software developers with skills they 
          need in order to further their careers. Whether you are just starting out or are a seasoned
          professional DevSquad exists to help you. This is an open source project as well so you can contribute to it to
          get introduced to contributing to OSS
        </p>
      </section>
      <section className='container m-auto'>
            <h2 className='text-center'>I want to help people with:</h2>
            <div className='container'>
          <ul >
              <li>Key Algorithms - conceptually how they work and implementations</li>
              <li>Interview Kit - mock interview tools, sample questions, prep steps</li>
              <li>Resume Tips - ways to help yourself honestly represent yourself and get a job where you can succeed</li>
              <li>Sample Career Paths - What are some common paths you can take</li>
              <li>How to grow your career - Regardless of your path, how can you keep growing?</li>
          </ul>
          </div>
          
 
        </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>{title}</a>
  </Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
