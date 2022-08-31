import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../../services/prismic";
import styles from '../post.module.scss'
import * as prismicHelper from '@prismicio/helpers'
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if(session) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

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
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className={styles.continueReading}>
            Wanna Continue Reading?
            <Link href="/">
              <a href="">Subscribe Now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', slug as string);
  const post = {
    slug: response.uid,
    title: prismicHelper.asText(response.data.title),
    content: prismicHelper.asHTML(response.data.content.splice(0, 3)),
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
    revalidate: 60 * 30
  }
}
