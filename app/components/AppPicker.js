import React, { useState } from 'react'
import { StyleSheet, View, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"
import AppText from './AppText'
import Screen from "./Screen"
import PickerList from './PickerList'

export default function AppPicker({ icon, items, numberOfColumns = 1, onSelectCategory, PickerItemComponent = PickerList, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={25} color={defaultStyles.colors.medium} />}

                    {selectedItem ? 
                        <AppText style={styles.text}>{selectedItem.label}</AppText> : 
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }

                    <MaterialCommunityIcons name="chevron-down" size={25} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => 
                        <PickerItemComponent item={item} onPress={() => {
                            setModalVisible(false)
                            onSelectCategory(item)
                        }} />}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        borderRadius: 25,
        padding: 15,
        backgroundColor: defaultStyles.colors.light,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium
    }
})
