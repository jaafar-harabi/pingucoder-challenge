import { Typography } from "@material-tailwind/react";


const ApiStatus = ({ loading, error }) => {
  if (loading) {
    return <Typography className="text-center text-blue-gray-100 font-bold mt-36">Loading...</Typography>;
  }

  if (error) {
    return <Typography className="text-center text-blue-gray-100 font-bold mt-36">Error: {error.message}</Typography>;
  }

  return null;
};

export default ApiStatus;