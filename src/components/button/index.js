import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'

const Button = ({
    title = 'Button',
    styles,
    ...props
}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} {...props} style={[
            {
                backgroundColor: colors.primary,
                padding: 14,
                overflow: 'hidden',
                shadowColor: '#000',
                alignItems: 'center',
                borderRadius: 5,

                // Shadow
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            },
            styles,
        ]}>
            <Text style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: colors.white,
            }} numberOfLines={1}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button