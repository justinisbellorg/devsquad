import Head from 'next/head'
import Link from 'next/link'

const name = 'Dev Squad'
export const siteTitle = 'Dev Squad - Devs Helping Devs'

export default function Layout ({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <>
          <h1 className="text-center">{name}</h1>
        </>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
