import Link from 'next/link'
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
      <div className='grid grid-cols-2 gap-4 p-6'>
        <div className='product hover:bg-orange-200 cursor-pointer p-4 rounded-lg shadow-md justify-center flex flex-col items-center'>
          <img src='https://imgs.search.brave.com/L2VFxG74dUfWiCgo2hdMEHewuWbhko7LMRP3ZbDU_zk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXlnaWZ0Y2FyZHN1/cHBseS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/UmF6ZXItZ29sZC1n/aWZ0LWNhcmQtb25s/aW5lLTM1MXgyNDEu/cG5n' alt='giftcard pic'/>
          <p className='font-bold text-2xl text-orange-700'>
          Razor Gold
          </p>
          </div>
          <div className='product hover:bg-orange-200 cursor-pointer p-4 rounded-lg shadow-md justify-center flex flex-col items-center'>
          <img src='https://imgs.search.brave.com/jPp24YDEKogyWk5Z692NRJBRXgVDcrTTJVZTrzA-ffo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTErd2ZCQlJsMUwu/anBn' alt='giftcard pic'/>
          <p className='font-bold text-2xl text-orange-700'>
          Steam
          </p>
          </div>
          <div className='product hover:bg-orange-200 cursor-pointer p-4 rounded-lg shadow-md justify-center flex flex-col items-center'>
          <img src='https://imgs.search.brave.com/nAfJmRjYxfEGOovGROng-1mDo1YxGfbOGIhPNpMOi7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZmF2cG5nLmNvbS8y/Mi82LzIxL2dvb2ds/ZS1wbGF5LWdpZnQt/Y2FyZC1hbmRyb2lk/LWRlbGl2ZXJ5LWdh/bWUtcG5nLWZhdnBu/Zy1jYjgyY2FEakxW/SzlSY3NudDJUTDA3/RE54X3QuanBn' alt='giftcard pic'/>
          <p className='font-bold text-2xl text-orange-700'>
          Google Play
          </p>
          </div>
          <div className='product hover:bg-orange-200 cursor-pointer p-4 rounded-lg shadow-md justify-center flex flex-col items-center'>
          <img src='https://imgs.search.brave.com/3T4kAA1gw0egw1cHnulSIzbW_ivI9nwImcQotyAgW8k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ3lmdC5jb20v/bWVyY2hhbnRzL2kt/MTg4LTEzNDY4NDQ5/NzEyMDEtNjBfaGQu/cG5n' alt='giftcard pic'/>
          <p className='font-bold text-2xl text-orange-700'>
          Ebay
          </p>
          </div>
      </div>
      </div>
    );
  }
  