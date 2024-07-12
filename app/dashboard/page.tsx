import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

export default function page(){
  return (
    <>
    <div className='flex'>
        <div>
            <SideNav />
        </div>
        <div className='px-5 py-10'>Dashboard Page</div>
    </div>
    </>
  )
}



// export default function page() {
//     return <p>Dashboard Page</p>
// }