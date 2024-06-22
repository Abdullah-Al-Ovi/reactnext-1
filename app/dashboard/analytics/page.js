import NavigationButton from '@/app/components/NavigationButton';
import React from 'react'

 const Settings = () => {
  
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <p>Analytic page</p>
       <div>
       <NavigationButton path="/dashboard/settings">Go to settings</NavigationButton>
       </div>
    </div>
  )
}
export default Settings;
