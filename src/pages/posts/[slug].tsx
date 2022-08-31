import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from './post.module.scss'
import * as prismicHelper from '@prismicio/helpers'

interface Post {
  slug: string,
  title: string,
  content: string,
  updateAt: string
}

interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time><br />
          <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </article>
      </main>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const { slug } = params;

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false
      }
    }
  }

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', slug as string);
  const post = {
    slug: response.uid,
    title: prismicHelper.asText(response.data.title),
    content: prismicHelper.asHTML(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post: post
    },
  }
}
