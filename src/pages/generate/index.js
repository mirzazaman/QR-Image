import { View } from 'react-native'
import React from 'react'
import Layout from '../../components/layout'
import SecondaryButton from '../../components/secondaryButton'
import { launchCamera, launchLibrary } from '../../utils/imagePicker'

const Generate = () => {

    return (
        <Layout title="Generate QR for image" styles={{
            paddingHorizontal: 16,
        }}>
            <View style={{
                justifyContent: 'space-between',
                flex: 1
            }}>
                <SecondaryButton title='Open Camera' iconName="camera-iris"
                    styles={{
                        flex: 1,
                    }}
                    onPress={() => {
                        launchCamera((res) => {
                            console.log("Camera", JSON.stringify(res, null, 2));
                        })
                    }}
                />
                <View style={{ padding: 5 }} />
                <SecondaryButton title='Select from gallery' iconName="image-multiple" styles={{
                    flex: 1,
                }}
                    onPress={() => {
                        launchLibrary((res) => {
                            console.log("Library", JSON.stringify(res, null, 2));
                        })
                    }} />
            </View>
        </Layout>
    )
}

export default Generate