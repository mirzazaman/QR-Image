import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import Icon from '../Icon'

const SecondaryButton = ({
    title,
    styles,
    iconName,
    ...props
}) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style={[
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
        ]} {...props}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Icon name={iconName} size={80} color={colors.white} />
                <Text style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: colors.white,
                }} numberOfLines={1}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SecondaryButton