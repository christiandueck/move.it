import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  const route = useRouter();

  const [username, setUsername] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  const toggleButtonActive = useEffect(() => {
    if (username != '') {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [username])

  function signIn() {
    if (buttonActive) {
      route.push('/home')
    }
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>

      <div className={styles.main}>

        <div className={styles.loginContainer}>
          <div className={styles.loginLogo}>
            <img src="./logoLogin.svg" alt="move.it logo" />
          </div>

          <h2>Bem-vindo</h2>

          <div className={styles.text}>
            <img src="./icons/Github.svg" alt="logo github" />
            <p>Faça login com seu GitHub para começar</p>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu username"
              onChange={e => setUsername(e.target.value)}
            />
            <button
              type="button"
              className={`${styles.button} ${buttonActive && styles.active}`}
              onClick={signIn}
            >
              <img src="./icons/arrow.svg" alt="sign-in button" />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}