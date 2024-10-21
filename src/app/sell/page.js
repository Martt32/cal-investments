import Link from 'next/link'
import { Switch, TextField, Button } from '@mui/material';

export default function Sell() {
  return (
    <div className="">
      <div  className="hero flex flex-col bg-orange-500 p-12 justify-center items-center">
        <input style={{ width:'50vw', height:'6vh' }} className="p-3 font-bold text-orange-600 rounded-lg" placeholder="Search Items"/>
        <div className="flex space-x-6 font-bold text-white text-sm p-6 md:text-2xl ">
        <Link href='/'>
          <p className="text-white cursor-pointer">Buy</p>
        </Link>
          <Link href='/sell'>
          <p className="hover:text-white cursor-pointer">Sell</p>
          </Link>
          <Link href='/gift_cards'>
            <p className="hover:text-white cursor-pointer">Gift Cards</p>
          </Link>
          <p className="hover:text-white cursor-pointer">Contact us</p>
        </div>
      </div>
      <form  className='flex flex-col justify-center items-center space-y-5 p-6'>
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Product Name' />
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Description' />
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Price' />
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Available Quantity' />
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Location' />
      <div className='flex space-y-2'>
      <Switch/>
      <p className='text-sm font-bold text-gray'>Discount</p>
      </div>
      <TextField style={{ width:'30vw' }} variant='standard' id='purpose' name='purpose' label='Discount Amount' />  
      <Button variant='contained'>Submit</Button>
      </form>
    </div>
  );
}
