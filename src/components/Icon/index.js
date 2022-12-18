import React from 'react'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Icon = ({
    name,
    size,
    color,
    ...props
}) => <MaterialCommunityIcons name={name} size={size} color={color} {...props} />

export default Icon

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
}