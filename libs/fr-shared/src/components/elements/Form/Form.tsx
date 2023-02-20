import { useForm } from 'react-hook-form';

interface IFormProps{
    children: any;
    style: string;
    onSubmit: (value: any) => void;
}

 export const Form = ({children,style, onSubmit}: IFormProps) => {
    const {handleSubmit, formState: {errors}} = useForm()
    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className={style}>
            {children}
            {errors}
        </form>
     );
}

 
