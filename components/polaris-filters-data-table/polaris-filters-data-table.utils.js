import React from 'react';

export function disambiguateLabel(key, value) {
    switch (key) {
        case "vendor":
            return value.join(", ");
        case "availability":
            return value.map((val) => `Available on ${val}`).join(", ");
        case "productType":
            return value.join(", ");
        default:
            return value;
    }
}

export function isEmpty(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    } else {
        return value === "" || value == null;
    }
}

export function getRowsFromArray(productObjectsArray) {
    return productObjectsArray.map(productObject => {
        const {image,title,status,inventory,type,vendor} = productObject;
        const imgElement = React.createElement("img",{src: image,alt: title, className: "data-table-product-img"},null);
        const shortenedTitle = title.slice(0,10)+'...';
        return [imgElement,shortenedTitle,status,inventory,type,vendor];
    });
}

