import React, { useEffect } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Screen from '../components/Screen'
import colors from "../config/colors"
import Card from "../components/Card"
import routes from "../navigation/routes"
import product_list_api from "../api/product_list"
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import LoadingAnimation from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'

// const listIems = [
//     {
//         id: 1,
//         title: "Jacket",
//         price: 100,
//         image: require("../assets/jacket.jpg")
//     },
//     {
//         id: 2,
//         title: "Sofa Set",
//         price: 300,
//         image: require("../assets/sofa.jpg")
//     }
// ]
export default function ListingItemsScreen({ navigation }) {
    const getProductsApi = useApi(product_list_api.fetchProducts);

    useEffect(() => {
        getProductsApi.request();
    }, []);
//console.log(getProductsApi)
    

    return (
        <Screen style={styles.screen}>
            {getProductsApi.error &&
                <View style={styles.errorMsgBlock}>
                    <AppText>Couldn't get product list !</AppText>
                    <AppButton title="Retry" onPress={getProductsApi.request} />
                </View>
            }
            <LoadingAnimation visible={getProductsApi.loading} />
            {!getProductsApi.loading && !getProductsApi.error && <FlatList
                data={getProductsApi.data}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"Rs. " + item.price}
                        imageURL={item.image[0].url}
                        onPress={() => navigation.navigate(routes.ITEM_DETAILS, item)}
                    />
                }
            />}
        </Screen>
    )
}

const styles = StyleSheet.create({
    errorMsgBlock: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    screen: {
        backgroundColor: colors.light,
        padding: 20,
    }
})
