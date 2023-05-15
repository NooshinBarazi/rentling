import { useForm } from 'react-hook-form';
import styles from './PersonalInfo.module.scss';
import { useState } from 'react';
import {
  CommentIcon,
  WarnIcon,
  CheckIcon,
  CancelIcon,
} from '@rentling/fr-shared';

export const PersonalInfo = () => {
  const [editableField, setEditableField] = useState<string>('');

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: 'John Doe 1 2 3',
      email: 'JohnDoe@gmail.com',
      PhoneNumber: '+1 234 567 8910',
      govermentId: '',
      emergencyContact: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setEditableField('');
  };
  const onCancel = () => {
    reset({
      fullName: 'John Doe 1 2 3',
      email: 'JohnDoe@gmail.com',
      PhoneNumber: '+1 234 567 8910',
      govermentId: '',
      emergencyContact: '',
    });
    setEditableField('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header_content}>
        <h2>PERSONAL INFORMATION</h2>
      </div>
      <div className={styles.personal_info}>
        <InputInfo
          name={'fullName'}
          label={'Full Name'}
          type="text"
          editableField={editableField}
          validation={{ required: 'Name is required.' }}
          error={errors?.fullName?.message}
          onSubmit={handleSubmit(onSubmit)}
          onCancel={onCancel}
          onEdit={() => setEditableField('fullName')}
          register={register}
        />

        <InputInfo
          name={'email'}
          label={'E-mail Address'}
          type={'email'}
          editableField={editableField}
          error={errors?.email?.message}
          onSubmit={handleSubmit(onSubmit)}
          onCancel={onCancel}
          onEdit={() => setEditableField('email')}
          register={register}
          validation={{
            required: 'Email is required.',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid.',
            },
          }}
        />
        <InputInfo
          name={'PhoneNumber'}
          label={'Phone Number'}
          type={'text'}
          editableField={editableField}
          validation={undefined}
          error={undefined}
          onSubmit={handleSubmit(onSubmit)}
          onCancel={onCancel}
          onEdit={() => setEditableField('PhoneNumber')}
          register={register}
        />
        <hr />
        <div className={styles.warn_icon}>
          <InputInfo
            name={'govermentId'}
            label={'Government ID'}
            type={'text'}
            editableField={undefined}
            validation={undefined}
            error={undefined}
            onSubmit={handleSubmit(onSubmit)}
            onCancel={onCancel}
            onEdit={() => setEditableField('govermentId')}
            register={register}
          />
          <span>
            <WarnIcon />
          </span>
        </div>
        <div className={styles.warn_icon}>
          <InputInfo
            name={'emergencyContact'}
            label={'Emergency contact'}
            type={'texxt'}
            editableField={editableField}
            validation={undefined}
            error={undefined}
            onSubmit={handleSubmit(onSubmit)}
            onCancel={onCancel}
            onEdit={() => setEditableField('emergencyContact')}
            register={register}
          />
          <span>
            <WarnIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

interface InputProps {
  name: string;
  label: string;
  type: string;
  editableField: any;
  validation: any;
  error: any;
  onSubmit: any;
  onCancel: any;
  onEdit: any;
  register: any;
}

export const InputInfo = ({
  name,
  editableField,
  label,
  type,
  validation,
  error,
  register,
  onSubmit,
  onCancel,
  onEdit,
}: InputProps) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <label>
        {label}
        <div className={styles.personal_input}>
          <input
            type={type}
            {...register(name, validation)}
            disabled={editableField !== name}
          />
          {editableField === name ? (
            <EditInfo onSubmit={onSubmit} onCancel={onCancel} />
          ) : (
            <button onClick={onEdit}>
              <CommentIcon />
            </button>
          )}
        </div>
        <span className={styles.error_msg}>
          {errors[name]?.message || error}
        </span>
      </label>
    </>
  );
};

export const EditInfo = ({ onSubmit, onCancel }: any) => {
  return (
    <div className={styles.edit_icon}>
      <button onClick={onSubmit}>
        <CheckIcon />
      </button>
      <button onClick={onCancel}>
        <CancelIcon />
      </button>
    </div>
  );
};
