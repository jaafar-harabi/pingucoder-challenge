import { Card, Typography } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteItem, getAllItems} from '../API/api'
import { useEffect, useState } from "react";
import {ApiStatus} from './'

const FormView = () => {

  const [data,setData]=useState([])
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

  const handleDelete = async (id)=>{
    try {
      await deleteItem(id)
      const updatedData = await getAllItems();
      setData(updatedData.data);
      
    } catch (err) {
      console.log(err)
    }
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await getAllItems();
        if (res.data) {
          setData(res.data);
        }
        

        setLoading(false); 

      } catch (err) {
        console.log(err);
        setError(err); 
        setLoading(false); 
      }
    };

    fetchData();
  },[]);


  return (
    <>
    <ApiStatus loading={loading} error={error} />
      {data.length >= 1 && !loading && error.length <=1 && <Card className="max-h-96 w-6/12  mt-20 mx-auto overflow-scroll ">
    <table className=" table-auto w-full min-w-max  text-center bg-blue-gray-100   ">
      <thead>
        { data.length >= 1 &&    <tr>
        
        <th  className="border-b  p-4">
          <Typography
            variant="small"
            color="black"
            className="font-bold leading-none opacity-70"
          >
            ID
          </Typography>
        </th>
        <th  className="border-b  p-4">
          <Typography
            variant="small"
            color="black"
            className="font-bold leading-none opacity-70"
          >
            Name
          </Typography>
        </th>
        <th  className="border-b  p-4">
          <Typography
            variant="small"
            color="black"
            className="font-bold leading-none opacity-70"
          >
            Email
          </Typography>
        </th>
        <th  className="border-b  p-4">
          <Typography
            variant="small"
            color="black"
            className="font-bold leading-none opacity-70"
          >
            Age
          </Typography>
        </th>
        <th  className="border-b  p-4">
          <Typography
            variant="small"
            color="black"
            className="font-bold leading-none opacity-70"
          >
            Options
          </Typography>
        </th>
      
    </tr>}
      
      </thead>
      <tbody className="bg-grey-light   w-full overflow-scroll" >
        {data.map((item,index)=>{
          return(
            <tr key={item.id}>
              <td>
                {index}
                
              </td>
              <td>
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
              <td>
                {item.age}
              </td>

              <td>
                <button className="mx-2" onClick={()=> handleDelete(item.id)} >
                  <MdDelete/>
                </button>

                <Link to={`/view/${item.id}`}>
                  <button>
                    <FaEdit />

                  </button>
                </Link>
                  
                
              </td>

            </tr>
          )
        })}
        
      </tbody>
    </table>
  </Card> }
    </>
  
    
  )
}

export default FormView