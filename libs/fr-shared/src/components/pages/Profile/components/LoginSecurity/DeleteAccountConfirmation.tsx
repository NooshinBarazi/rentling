import styles from './DeleteAccountConfirmation.module.scss';
import {useForm} from 'react-hook-form';
import { Button, FindHomeIcon, PasswordIcon , Input } from '@rentling/fr-shared';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
    firstName: string;
    lastName: string;
  }
  
  export const DeleteAccountConfirmation = ({ firstName, lastName }: IProps) => {
    const { register } = useForm();
    const router = useRouter();
    return (
      <div className={styles.container}>
        <div className={styles.delete_text}>
          <h2>
            Dear {firstName} {lastName},
          </h2>
          <p>
            Dear John Doe, We are sorry to see you go. We have received a request
            to delete your account on our rental house website. If you still wish
            to proceed with the deletion of your account, please confirm your
            request by clicking on the Button below.
          </p>
          <div className={styles.text_warn}>
            <span>NOTE:</span>{' '}
            <p>
              Please note that this action will permanently delete all your saved
              searches, favorite listings, and personal information associated
              with your account. Once deleted, we will not be able to recover any
              of your data.
            </p>
          </div>
        </div>
  
        <div className={styles.remove_account}>
          <Input
            Icon={<PasswordIcon />}
            name={'password'}
            type={'password'}
            id={'password'}
            validation={undefined}
            placeholder={'type your password to delete your account'}
            error={undefined}
            register={register}
          />
          <button className={styles.delete_btn}>DELETE MY ACCOUNT</button>
          </div>
            <div className={styles.reset_pass}>
              <p>Forget your password?</p>
              <Link href="">
                <span>Click here to Reset your password</span>
              </Link>
            </div>
            <Button
              Icon={<FindHomeIcon />}
              text={'Back to main menu'}
              newStyle={''}
              onClick={() => router.push('/profile')}
            />
      </div>
    );
  };
  