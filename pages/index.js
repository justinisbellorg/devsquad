import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          Devsquad is a site dedicated to helping software developers with
          skills they need in order to further their careers. Whether you are
          just starting out or are a seasoned professional DevSquad exists to
          help you. This is an open source project as well so you can contribute
          to it to get introduced to contributing to OSS
        </p>
        <p>
          While we could wind up going in any direction initially the vision for
          this project is to start working on things from a conceptual and an
          approach level. Hopefully at the end of the project you will understand
          how a binary tree search works, when to use it, and a few examples of
          how it can be implemented.
        </p>
      </section>
      <section className="container m-auto">
        <h2 className="text-center">I want to help people with:</h2>
        <div className="container">
          <ul>
            <li>
              Key Algorithms - conceptually how they work and implementations
            </li>
            <li>
              Interview Kit - mock interview tools, sample questions, prep steps
            </li>
            <li>
              Resume Tips - ways to help yourself honestly represent yourself
              and get a job where you can succeed
            </li>
            <li>
              Sample Career Paths - What are some common paths you can take
            </li>
            <li>
              How to grow your career - Regardless of your path, how can you
              keep growing?
            </li>
          </ul>
        </div>
        <div>
          <h2>Current Needs:</h2>
          <ul>
            <li>* Designer to help with look and Feel</li>
            <li>* Start work on building Algorithm module components</li>
            <li>* Any other areas you feel like contributing! Check out our open Issues <a href='https://github.com/justinisbellorg/devsquad/issues'>Here</a></li>
            <li>* You can check out the contribution guide <a href='https://github.com/justinisbellorg/devsquad/blob/trunk/docs/contributing.md'>Here</a> for how to add your own issues</li>
          </ul>
        </div>
        <div className="text-center">
          <p>
            For now to get involved check out the {"\u00A0"}
            <a href="https://github.com/justinisbellorg/devsquad">
              Github Repo
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
