import React from 'react'

const ShimmerButton = ({title,icon,position,handleClick,otherClasses}:{
    title:string,icon:React.ReactNode,position:string;handleClick?:()=>void;otherClasses?:string;
}) => {
  return (
        <button className="gap-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg p-[1px] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {position === 'left' &&icon}
          {title}
          {position === 'right' &&icon}

        </button>   
  )
}

export default ShimmerButton