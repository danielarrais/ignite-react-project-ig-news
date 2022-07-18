import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useSession, signIn, signOut } from "next-auth/react"

export const SingInButton = () => {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.singInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#84d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.singInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  )
}
