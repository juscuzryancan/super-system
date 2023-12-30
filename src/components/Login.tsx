import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
      className="flex flex-col items-center"
    >
      <h1>Login</h1>
      <div>
        <label className={errors.password && 'text-red-500'}>Username</label>
        <Input
          {...register('username', { required: true })}
        />
      </div>
      <div>
        <label className={errors.password && 'text-red-500'}>Password</label>
        <Input {...register('password', { required: true })} />
      </div>
      <Button>Log in</Button>
    </form>
  );
};

export default Login;
