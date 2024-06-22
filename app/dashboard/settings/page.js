import NavigationButton from '@/app/components/NavigationButton';
import React, { Suspense } from 'react'
import { Lorem } from '@/app/components/lorem';

const Settings = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
      <p>Analytic page</p>
      <div>
        <NavigationButton path="/dashboard/analytics">Go to analytics</NavigationButton>
        <Suspense fallback={<p>Loading lorem...........</p>}>
       <Lorem></Lorem>
        </Suspense>
      </div>
    </div>
  )
}
export default Settings;






















{/* <layout>
<error>
  <page>
  </page>
</error>
</layout> */}
