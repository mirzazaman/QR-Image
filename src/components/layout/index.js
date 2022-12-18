import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import colors from '../../assets/colors'

function Layout({
    children,
    title = 'QR Image Generator',
    headerStyles,
    styles
}) {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <View style={[
                {
                    backgroundColor: colors.primary,
                    padding: 16,
                    shadowColor: colors.black,
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
                headerStyles,
            ]}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colors.white,
                }} numberOfLines={1}>{title}</Text>
            </View>
            <View style={[
                {
                    flex: 1,
                    paddingVertical: 8,
                    backgroundColor: colors.white,
                },
                styles,
            ]}>
                {children}
            </View>
        </>
    )
}

export default Layout