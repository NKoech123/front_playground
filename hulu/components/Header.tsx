import Image from 'next/image'

const huluLogo = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg'
const Header = () => {
  return (
    <header className=''>
        <h1>This is a header</h1>
        <Image 
        src={huluLogo} 
        width={200} 
        height={100} 
        alt={''}/>
    </header>
  )
}

export default Header