// import React from 'react'
// import { useRouter } from 'next/router'

// /**
//  * Returns Element Modal content
//  * @returns {JSX}
//  */
// function ElementModal()  {

//     const router = useRouter()

//     const handleClick = () => {
//         router.push({ pathname: "/table" });
        
//     }

//     return (
//         <div  className='relative top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full text-black'>
//             <h1 className='text-3xl pb-2 font-latoBold text-red-400'>Employee created!</h1>
//             <button onClick={handleClick} className='bg-red-400 text-white px-4 py-2 rounded-md font-latoBold w-full'>Go to table Page</button>
//         </div>
//     )
// }

// export default ElementModal