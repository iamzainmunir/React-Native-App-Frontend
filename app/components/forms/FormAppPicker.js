import React from 'react'
import { useFormikContext } from "formik"

import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";

export default function FormAppPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder }) {
    const { errors, setFieldValue, values, touched } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectCategory={(item) => setFieldValue(name, item)}
                PickerItemComponent = {PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>

    )
}

