import {
  Button,
  Input,
  PasswordIcon,
  RootState,
  UserSigninIcon,
} from '@rentling/fr-shared';
import styles from './SignIn.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { signIn } from 'libs/fr-shared/src/store/features/authSlice';
import { colors } from 'react-select/dist/declarations/src/theme';

export const SignIN = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    dispatch(signIn(data));
  };

  return (
    <section className={styles.form}>
      <div
        className={`${
          styles.image
        } ${`${styles.signin_img} ${styles.right_panel_active}`}`}
      >
        <h4>Don’t have an account?</h4>
        <Button
          text="Sign Up"
          newStyle={styles.signup_button}
          onClick={() => router.push('/auth/sign-up')}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.signin_form} ${styles.left_panel_active}`}
      >
        <h3> Sign In</h3>
        <div className={styles.input_form}>
          <Input
            type="text"
            name="username"
            register={register}
            Icon={<UserSigninIcon style={{ width: '3rem', height: '3rem' }} />}
            id={'username'}
            placeholder={'Username'}
            error={errors?.name?.message}
            validation={{ required: 'Name is required.' }}
          />
          <Input
            type="password"
            name="password"
            register={register}
            Icon={<PasswordIcon style={{ width: '3rem', height: '3rem' }} />}
            id={'password'}
            placeholder={'Password'}
            error={errors?.password?.message}
            validation={{
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.',
              },
            }}
          />
          <button
            type="submit"
            className={styles.submit_button}
            disabled={!isValid}
          >
            <p>Login</p>
          </button>
        </div>
        <Link href={'#'}>
          <p>Forgot password?</p>
        </Link>
      </form>
    </section>
  );
};
