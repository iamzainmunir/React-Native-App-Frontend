import React from 'react'
import { useFormikContext } from "formik"

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
    const {setFieldValue, errors, setFieldTouched, touched, values} = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={text => setFieldValue(name, text)}
                value = {values[name]}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}
