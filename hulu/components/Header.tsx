import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon, CheckBadgeIcon, BoltIcon, MagnifyingGlassIcon, UserIcon, FolderIcon} from '@heroicons/react/24/outline';


const huluLogo = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon}/>
            <HeaderItem title='TRENDING' Icon={BoltIcon}/>
            <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
            <HeaderItem title='COLLECTIONS' Icon={FolderIcon}/>
            <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
            <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
        </div>
        <Image 
            className='object-contain'
            src={huluLogo} 
            width={100} 
            height={50} 
            alt={''}
       />
    </header>
  )
}

export default Header