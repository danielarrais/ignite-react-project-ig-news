import styles from './styles.module.scss';
import Image from 'next/image'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headContent}>
        <Image src="/images/logo.svg" alt="ig.news" width='100' height='100'/>
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  )
}
