import { View, Image } from 'react-native'
import React from 'react'
import images from '../../assets/images'
import colors from '../../assets/colors'

const SplashScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary
        }}>
            <Image source={images.logo} style={{
                width: 200,
                height: 200
            }} />
        </View>
    )
}

export default SplashScreen