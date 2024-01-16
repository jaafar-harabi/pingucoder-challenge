import {Link} from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          

          <Typography variant="h6"  color='black' >
            <Link to="/"  className='mx-10'>
                  Home
            </Link>
            <Link to="/input" className='mx-10' >
                  Input
            </Link>
            <Link to="/view" className='mx-10' >
                  View
            </Link>

          </Typography>
    </ul>
  );
}

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    

<Navbar className="mx-auto max-w-screen-xl px-6 py-3">
    <div className="flex items-center justify-between text-blue-gray-900">
    <Typography variant="h6" sx={{ flexGrow: 1,textAlign:'left'}} >
              PinguCoder-Challenge
          </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
  <IconButton
    variant="text"
    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    ripple={false}
    onClick={() => setOpenNav(!openNav)}
  >
    {openNav ? (
      <XMarkIcon className="h-6 w-6" strokeWidth={2} />
    ) : (
      <Bars3Icon className="h-6 w-6" strokeWidth={2} />
    )}
  </IconButton>
</div>
<Collapse open={openNav}>
        <NavList />
      </Collapse>

</Navbar>
  )
}

export default Nav




