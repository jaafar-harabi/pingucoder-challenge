import { Typography } from "@material-tailwind/react";

const Foot = () => {
  return (
    <footer className=" border-t-2 border-t-white foot-res bg-blue-gray-100 ">
    <Typography color="black" className=" mt-2 text-center text-black  font-bold">
      &copy; {new Date().getFullYear()} PincuCoder-Challenge
    </Typography>

    </footer>
  )
}

export default Foot