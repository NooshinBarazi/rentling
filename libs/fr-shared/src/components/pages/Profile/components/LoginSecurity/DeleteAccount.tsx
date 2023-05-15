import Link from 'next/link';
import styles from './DeleteAccount.module.scss';
import { useRouter } from 'next/router';

export const DeleteAccount = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header_content}>
        <h4>Login & security</h4>
      </div>
      <div className={styles.main_content}>
        <div className={styles.reset_password}>
          <h4>Forget Your Password?</h4>
          <Link href={'/reset'}>
            <p>Click here to Reset your password</p>
          </Link>
        </div>
        <div className={styles.delete_account}>
          <div className={styles.delete_button}>
            <h4>Delete Your Account</h4>
            <button
              onClick={() =>
                router.push('/profile/delete-account-confirmation/1')
              }
            >
              Click here to delete your account
            </button>
          </div>
          <p>
            Please be aware that when you delete your account, your profile will
            be permanently removed and no longer visible to others. However,
            your identity, including your name, last name, and possible behavior
            records, may be restored in the event of re-joining
          </p>
        </div>
      </div>
    </div>
  );
};
