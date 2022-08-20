import styles from './styles.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import { SingInButton } from '../SinginButton';
import { ActiveLink } from './ActiveLink';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headContent}>
        <Image src="/images/logo.svg" alt="ig.news" width='100' height='100' />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}
