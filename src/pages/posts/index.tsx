import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from './index.module.scss'

export default function Post({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
          </a>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
          </a>
          <a href="">
            <time>11 de Nov de 2020</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Conforme podemos observar na animação acima, quando o usuário digita o endereço, sugestões de locais semelhantes começam a aparecer no autocomplete. Quando algum endereço é selecionado, o pin aparece centralizado no mapa, mostrando a localidade escolhida.</p>
          </a>
        </div>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType('post', {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  return {
    props: {

    }
  }
}
