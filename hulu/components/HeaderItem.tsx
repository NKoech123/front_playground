import { ReactNode } from "react";

type HeaderItemProps = {
    title: string;
    Icon: any;
}

const HeaderItem = ({ title, Icon}: HeaderItemProps) => {
  return (
    <div className="flex flex-col items-center cursor-point group
        w-12 sm:w-20 hover:text-white" >
        <Icon className='h-8 mb-1 group-hover:animate-bounce' />
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
            {title}
        </p>
    </div>
    
  )
}

export default HeaderItem