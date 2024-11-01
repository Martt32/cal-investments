import Link from 'next/link'
import { ShoppingCart, Dashboard } from '@mui/icons-material'

const Sidebar = ({ children }) =>{
    return(
        <div className='flex flex-col'>
        <div className='sidebar text-initClr font-bold flex justify-between space-x-6 shadow-md p-4'>
            <div>
                {
                    //Logo
                }
                <p className=' md:text-3xl text-orange-500'><span className='text-black'>C.A.L</span> Investments</p>
            </div>
            <div>
                {
                    //Menu
                }
                <ul className=' flex space-x-4 text-sm text-orange-500 '>
                    <Link href='dashboard' className='flex highlight rounded-lg p-2'>
                    <li className='flex justify-center items-center hover:text-orange-800 cursor-pointer space-x-2'>
                        <Dashboard/>
                        <p>Dashboard</p>
                    </li>
                    </Link>
                </ul>
            </div>
            </div>
            <main className='flex min-h-screen w-full flex-col '>
                {children}
            </main>
        </div>
    )
}
export default Sidebar