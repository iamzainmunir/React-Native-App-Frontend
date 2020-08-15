import React from 'react'
import { useFormikContext } from "formik"

import ImageInputList from '../ImageInputList'
import AppErrorMessage from './AppErrorMessage'

export default function FormImagePicker({ name }) {
    const { errors, setFieldValue, values, touched } = useFormikContext();
    const imageUris = values[name];

    handleDeleteImage = deleteImageUri => {
        setFieldValue(name, imageUris.filter(uri => uri !== deleteImageUri ))
      }
    
      handleAddImage = imageUri => {
        setFieldValue(name, [...imageUris, imageUri])
      }

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAddImage}
                onDeleteImage={handleDeleteImage}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

