import { useForm } from 'react-hook-form';
import { UserSigninIcon, Input, PrimaryButtonIcon, MailIcon } from '@rentling/fr-shared';
import styles from './Form.module.scss';

export const Form = ({onSubmit, isLogin }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {!isLogin ? (
        <>
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
        </>
      ) : (
        ''
      )}

      <Input
        type="text"
        name="name"
        register={register}
        Icon={<UserSigninIcon style={{ width: '3rem', height: '3rem' }} />}
        id={'name'}
        placeholder={'Username'}
        error={errors?.name?.message}
        validation={{ required: 'Name is required.' }}
      />
      <Input
        type="password"
        name="password"
        register={register}
        Icon={<PrimaryButtonIcon style={{ width: '3rem', height: '3rem' }} />}
        id={'password'}
        placeholder={'password'}
        error={errors?.email?.message}
        validation={{
          required: 'Password is required.',
          minLength: {
            value: 6,
            message: 'Password should be at-least 6 characters.',
          },
        }}
      />

      <button type="submit" className={styles.submit_btn}>
        <p>{isLogin ? 'Login' : 'Sign up'}</p>
      </button>
    </form>
  );
};
