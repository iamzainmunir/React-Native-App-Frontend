import client from "./client";

const END_POINT = "/products"

const fetchProducts = () => client.get(END_POINT);

const postProducts = (product, onUploadProgress) => {
    const data = new FormData();

    data.append("title", product.title);
    data.append("description", product.description);
    data.append("price", product.price);
    data.append("category", product.category.value);

    for(let index = 0; index < product.images.length; index ++){
        data.append("image"+(index+1), {
            name: "image-" + (index+1) + Date.now(),
            type: "image/jpeg",
            uri: product.images[index]
        })
    }
    
    if(product.location) {
        data.append("latitude", product.location.latitude);
        data.append("longitude", product.location.longitude);
    }

    //console.log(data)
    return client.post(END_POINT, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    })
}

export default{
    fetchProducts,
    postProducts
}