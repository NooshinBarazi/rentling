import { useForm } from "react-hook-form";

interface IFormProps{
    children: any;
    onSubmit: (value: any) => void;
}

 export const Form = ({children, onSubmit}: IFormProps) => {
    const {handleSubmit, formState: {errors}} = useForm()
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            {children}
            {errors}
        </form>
     );
}

 
