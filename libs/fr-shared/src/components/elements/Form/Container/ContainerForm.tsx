import { Button, Form } from '@rentling/fr-shared';
import styles from './ContainerForm.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export const ContainerForm = () => {
 
    const [isLogin, setIsLogin] = useState(false)

    const onSubmit = (data: any) => {
        console.log (data);
      };

    return ( 
        <section className={styles.container_form}>
            <div className={`${styles.image} ${isLogin? `${styles.signin_img} ${styles.right_panel_active}` : styles.signup_img}`} >
                {isLogin? <h4>Don’t have an account?</h4>: <h4>Already have an account?</h4>}
                <Button Icon={undefined} text={isLogin? 'SignUP!' : 'Sign in'} newStyle={styles.signup_btn} onClick={()=> setIsLogin(!isLogin)} />
            </div>
            <div className={`${styles.signin_form} ${isLogin? styles.left_panel_active : ''}`}>
                <h3>{isLogin? 'Sign in' : 'sign up'}</h3>
              <Form onSubmit={onSubmit} isLogin={isLogin}/>
                <div><Link href={'#'}>{isLogin?<p>Forgot password?</p>: ''}</Link></div>
            </div>
        </section>
     );
}
 