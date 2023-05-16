import { Button, Form } from '@rentling/fr-shared';
import styles from './LoginForm.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export const LoginForm = () => {
  const [isSigninIn, setIsLogin] = useState(false);

  const onSubmit = async (data: any) => {
    const response = await window.fetch("http://localhost:8080/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()
  };

  return (
    <section className={styles.login_form}>
      <div className={`${styles.image} ${isSigninIn ? `${styles.signin_img} ${styles.right_panel_active}` : styles.signup_img}`} >
        {isSigninIn ? <h4>Don’t have an account?</h4> : <h4>Already have an account?</h4>}
        <Button text={isSigninIn ? 'Sign Up' : 'Sign In'} newStyle={styles.signup_button} onClick={() => setIsLogin(!isSigninIn)} />
      </div>
      <div className={`${styles.signin_form} ${isSigninIn ? styles.left_panel_active : ''}`}>
        <h3>{isSigninIn ? 'Sign In' : 'Sign Up'}</h3>
        <Form onSubmit={onSubmit} isLogin={isSigninIn} />
        <div><Link href={'#'}>{isSigninIn ? <p>Forgot password?</p> : ''}</Link></div>
      </div>
    </section>
  );
}

