import Link from 'next/link';
import styles from './Security.module.scss';
import { style } from '@motionone/dom';

export const Security = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_content}>
        <h4>Login & security</h4>
      </div>
      <div className={styles.main_content}>
        <div className={styles.reset_password}>
          <h4>Forget Your Password?</h4>
          <Link href={'/reset'}><p>Click here to Reset your password</p></Link>
        </div>
        <div className={styles.delete_account}>
          <div className={styles.delete_button}>
            <h4>Delete Your Account</h4>
            <button>Click here to delete your account</button>
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
