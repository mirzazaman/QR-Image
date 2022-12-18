import { View } from 'react-native'
import React from 'react'
import Layout from '../../components/layout'
import Button from '../../components/button'

const Scan = () => {
    return (
        <Layout title='Scan QR' styles={{
            paddingHorizontal: 16,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Button title='Scan QR' styles={{
                    flex: 1,
                }} />
                <View style={{ padding: 5 }} />
                <Button title='Select from gallery' styles={{
                    flex: 1,
                }} />
            </View>
        </Layout>
    )
}

export default Scan