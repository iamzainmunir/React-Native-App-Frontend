import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

export default function ImageInputList({ imageUris = [], onDeleteImage, onAddImage }) {
    const scrollView = useRef()
    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                        {imageUris.map(uri => 
                            <View style={styles.imageInput} key={uri}>
                                <ImageInput
                                    imageUri = {uri}
                                    onChangeImage = {() => onDeleteImage(uri)}
                                />
                            </View>
                        )}
                    <ImageInput
                        onChangeImage = {uri => onAddImage(uri)}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    imageInput: {
        marginRight: 10
    }
})
