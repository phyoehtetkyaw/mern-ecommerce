import { Link } from 'react-router-dom'
import profile from '../../assets/img/profile.jpg'

function Sidebar() {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <figure className='w-3/12'>
                    <img src={profile} alt="profile" className='w-full rounded-full' />
                </figure>
                <div className='w-8/12'>
                    <p className='font-bold'>Phyoe Htet Kyaw</p>
                    <span>Web Developer</span>
                </div>
            </div>
            <nav className='mt-5'>
                <ul>
                    <li><Link to="/" className='py-3 rounded-md pl-5 block hover:bg-violet-500'>Home</Link></li>
                    <li><Link to="/category" className='py-3 rounded-md pl-5 block hover:bg-violet-500'>Category</Link></li>
                    <li><Link to="/tag" className='py-3 rounded-md pl-5 block hover:bg-violet-500'>Tag</Link></li>
                    <li><Link to="/product" className='py-3 rounded-md pl-5 block hover:bg-violet-500'>Product</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar