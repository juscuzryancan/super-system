import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterMutation } from '../api/apiSlice';
import * as z from 'zod';
import { useAppDispatch } from '@/redux/hooks';
import { setToken } from './userSlice';

const formSchema = z
  .object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  })
  .required();

const Register = () => {
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [register] = useRegisterMutation();

  const onSubmit = async (credentials: z.infer<typeof formSchema>) => {
    try {
      const { token } = await register(credentials).unwrap();
      dispatch(setToken(token));
      localStorage.setItem('token', token);
      console.log();
    } catch (e) {
      console.error(e);
      console.log('somehting went wrong');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
};

export default Register;
