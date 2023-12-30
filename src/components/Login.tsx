import { useForm, SubmitHandler } from 'react-hook-form';
import clsx from 'clsx';

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  //console.log(watch("username"));
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col border-black border"
    >
      <h1>Login</h1>
      <div>
        <label className={errors.password && 'text-red-500'}>Username</label>
        <input
          defaultValue="hello"
          {...register('username', { required: true })}
        />
      </div>
      <div>
        <label className={errors.password && 'text-red-500'}>Password</label>
        <input {...register('password', { required: true })} />
      </div>
      <button>Log In</button>
    </form>
  );
};

export default Login;
