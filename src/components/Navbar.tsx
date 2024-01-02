import { useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { PropsWithChildren } from 'react';

const Link = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  const navigate = useNavigate();

  return (
    <NavigationMenuLink
      className={navigationMenuTriggerStyle()}
      onClick={() => navigate(to)}
    >
      {children}
    </NavigationMenuLink>
  );
};

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">Mach Typer</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/login">Login</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/register">Register</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
