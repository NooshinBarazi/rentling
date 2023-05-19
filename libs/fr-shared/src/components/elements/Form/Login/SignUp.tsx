import { useForm } from 'react-hook-form';
import {
  UserSigninIcon,
  Input,
  MailIcon,
  PasswordIcon,
  Button,
} from '@rentling/fr-shared';
import styles from './SignIn.module.scss';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signUp } from 'libs/fr-shared/src/store/features/authSlice';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async(data: any) => {
   await dispatch(signUp(data))
  }
  return (
    <section className={styles.form}>
      <div className={`${styles.image} ${`${styles.signup_img} `}`}>
        <h4>Already have an account?</h4>
        <Button
          text="Sign In"
          newStyle={styles.signup_button}
          onClick={() => router.push('/auth/sign-in')}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.signin_form} `}
      >
        <h3>SIGNUP FREE</h3>
        <div className={styles.input_form}>
          <Input
            type="email"
            name="email"
            register={register}
            Icon={<MailIcon style={{ width: '3rem', height: '3rem' }} />}
            id={'email'}
            placeholder={'Your E-mail'}
            error={errors?.email?.message}
            validation={{
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            }}
          />

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
            <p>SIGN UP</p>
          </button>
        </div>
      </form>
    </section>
  );
};
