import Link from 'next/link'
import { ShoppingCart } from '@mui/icons-material'
export default function Home() {
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
      <div className="p-16 grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="product shadow-md p-6 rounded-lg  space-y-2 hover:bg-orange-100 cursor-pointer">
          <img className="p-4" src='https://m.media-amazon.com/images/I/81bXaqIbWlL._AC_SX679_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Logitech 720p Webcam Pro 9000</p>
          <p className="font-bold text-gray-600 text-sm">Ultra-smooth AutoFocus with Carl Zeiss lens system for sharper, fluid video</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$45.14</p>
            <strike>
            <p className="font-bold text-gray-600 ">$65.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available:47 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SX425_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">HP 14 Laptop, Intel Celeron N4020, 4 GB RAM</p>
          <p className="font-bold text-gray-600 text-sm">4K READY – Smoothly stream 4K content and play your favorite next-gen games with Intel UHD Graphics 600 (4) (5)</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$180.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$209.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 21 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/71Z05qTBxRL._AC_SX425_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Lenovo Tab M11, 11” Display</p>
          <p className="font-bold text-gray-600 text-sm">MULTITASKING MASTER: The Lenovo Tab M11 combines robust performance with portability in a sleek design</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$208.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$229.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 8 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/61xhRLouFTL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Govee Smart Light Bulbs, WiFi & Bluetooth</p>
          <p className="font-bold text-gray-600 text-sm">Smart Control: Govee color-changing light bulbs make it possible to control your bulbs with simple voice commands</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$15.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$21.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 79 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/61Du7b9kpxL._SX466_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Kasa Smart Light Switch HS200P3</p>
          <p className="font-bold text-gray-600 text-sm">Easy Guided Install: Neutral Wire is required, standard wall plate size. No need to understand complex switch wiring</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$33.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$44.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 67 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>

        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/61iBtxCUabL._AC_SX466_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Apple AirPods 4 Wireless Earbuds</p>
          <p className="font-bold text-gray-600 text-sm"> REBUILT FOR COMFORT — AirPods 4 have been redesigned for exceptional all-day comfort</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$109.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$140.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 94 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/51VpABY-b6L.__AC_SX300_SY300_QL70_FMwebp_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Logitech G305 LIGHTSPEED Wireless Gaming Mouse</p>
          <p className="font-bold text-gray-600 text-sm">HERO Gaming Sensor: Next-gen HERO mouse sensor delivers up to 10x the power efficiency</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$29.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$42.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 67 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/71tjdZg28vL.__AC_SY445_SX342_QL70_FMwebp_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Govee RGBIC LED Strip Lights, Smart LED Lights for Bedroom</p>
          <p className="font-bold text-gray-600 text-sm">Smart RGBIC Effects: RGBIC LED lights for bedroom display</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$15.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$20.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 16 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/51xl+EaXPAL._AC_SY300_SX300_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">Hydro Flask Stainless Steel Wide Mouth Bottle</p>
          <p className="font-bold text-gray-600 text-sm">TempShield double-wall vacuum insulation, Leakproof-flex sip lid is leakproof when closed</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$18.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$30.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 9 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
        <div className="product shadow-md p-6 rounded-lg hover:bg-orange-100 cursor-pointer space-y-2">
          <img className="p-4" src='https://m.media-amazon.com/images/I/61oGAG5r7cL._AC_SX425_.jpg' alt='Product img'/>
          <p className="font-bold text-orange-600 text-2xl">JBL Tune 510BT: Wireless</p>
          <p className="font-bold text-gray-600 text-sm">The Tune 510BT wireless headphones feature renowned JBL Pure Bass sound</p>
          <div className="flex justify-between">
            <p className="font-bold text-green-700 ">$26.99</p>
            <strike>
            <p className="font-bold text-gray-600 ">$44.99</p>
            </strike>
          </div>
          <p className='font-bold text-sm'>Available: 44 in stock</p>
          <p className='font-bold text-sm text-gray-500'>Location: United States</p>
          <div className='flex space-x-2'>
            <button className="font-bold bg-orange-600 hover:bg-white hover:text-orange-600 text-white p-2 rounded-lg">
              <ShoppingCart/>
            </button>
            <p style={{ border:'1px solid gray' }} className='p-2 hover:bg-gray-600 hover:text-white rounded-lg'>
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
