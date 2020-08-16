import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from "yup"

import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import { AppForm, AppFormField, FormSubmitButton, FormAppPicker, FormImagePicker } from "../components/forms"
import useLocation from '../hooks/useLocation';
import productsApi from "../api/product_list";
import UploadProgress from './UploadProgress';

const validationSchema = Yup.object().shape({
    images: Yup.array().min(1, "Please select atleast 1 image").max(5, "You can't add more than 5 images"),
    title: Yup.string().required().min(3).label("Title"),
    price: Yup.number().required().min(1).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

const items = [
    { label: "Furniture", value: "furniture", backgroundColor: "red", icon: "email" },
    { label: "Cameras", value: "camera", backgroundColor: "green", icon: "apps" },
    { label: "Laptop", value: "laptop", backgroundColor: "blue", icon: "account" },
    { label: "Fitness", value: "fitness", backgroundColor: "yellow", icon: "lock" } 
]
export default function PostItemScreen() {
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0)
    const [uploadComplete, setUploadComplete] = useState(false)

    const location = useLocation();

    const handleSubmit = async (product, { resetForm }) => {
        setProgress(0)
        setUploadComplete(false)
        setUploadVisible(true)
        const result = await productsApi.postProducts({...product, location },
            (progress) => setProgress(progress)
        );
        setUploadComplete(true);
        
        
        if(!result.ok) {
            setUploadVisible(false)
            return alert("Error posting product");
        }

        resetForm();
    }
    return (
        <Screen style={styles.container}>
            <UploadProgress onDone={() => setUploadVisible(false)} visible={uploadVisible} uploadComplete={uploadComplete}/>
        <AppForm
            initialValues={{ images: [], title: '', price: '', category: null, description: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <FormImagePicker
                name="images"
            />
            <AppFormField
                maxLength={255}
                name="title"
                placeholder="Title"
            />
            <AppFormField
                keyboardType="numeric"
                name="price"
                placeholder="Price"
            />
            <FormAppPicker
                items={items}
                name="category"
                numberOfColumns={3}
                PickerItemComponent = {CategoryPickerItem}
                placeholder="Category"
            />
            <AppFormField
                maxLength={255}
                multiline
                name="description"
                placeholder="Description"
                numberOfLines = {3}
            />
            <FormSubmitButton title="Post" />
        </AppForm>
    </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})
