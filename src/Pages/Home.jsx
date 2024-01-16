import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <Card className="w-96   mb-10  bg-blue-gray-100 mx-auto mt-36 ">
      
      <CardBody className="flex flex-col gap-4">
        <Typography className="text-center">
          Welcome to pingucoder-challenge 
        </Typography>

      </CardBody>
      <CardFooter className="flex pt-0 mx-auto">
        <Typography variant="h6"  color='black' className="text-center mx-2" >
          
            <Link to="/input"  >
              <Button>
                    Input
              </Button>
            </Link>
            
              
            
        </Typography>
        
        <Typography variant="h6"  color='black' className="text-center" >
            
              <Link to="/view"  >
                <Button>
                      View
                </Button>
              </Link>
            
              

        </Typography>
      </CardFooter>
  </Card>
  )
}

export default Home