import { NavigationContainer } from '@react-navigation/native'
import React, { Suspense } from 'react'
import SplashScreen from './src/components/splashScreen'

const MyLazyTabs = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(
      import('./src/navigation')
    ), 3000)
  }
  )
}
)

const App = () => {
  return (
    <NavigationContainer>
      <Suspense fallback={<SplashScreen />}>
        <MyLazyTabs />
      </Suspense>
    </NavigationContainer>
  )
}

export default App