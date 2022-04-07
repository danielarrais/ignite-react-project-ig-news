import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from 'react';

export const SingInButton = () => {
  const [isUserLoggedIn, setIisUserLoggedIn] = useState(true);

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.singInButton}
    >
      <FaGithub color="#84d361" />
      Sing in with GitHub
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.singInButton}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  )
}
