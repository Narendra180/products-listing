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

export function getRowsFromArray(productObjectsArray, handleDataTableRowClick) {
    return productObjectsArray.map(productObject => {
        const {image,title,status,inventory,type,vendor,id} = productObject;
        const imgElement = React.createElement("img",{src: image,alt: title, className: "data-table-product-img"},null);
        const shortenedTitle = title.slice(0,10)+'...';
        const statusSpan = React.createElement("span",{className: "status-span"}, status);
        const inventorySpan = React.createElement("span",{className: `inventory-span ${inventory[0]==="-"?"negative":""}`}, inventory);
        const clickableRowOverlay = React.createElement("div",{className: "clickable-row-overlay", "data-id": id, onClick: handleDataTableRowClick},null);
        return [imgElement,shortenedTitle,statusSpan,inventorySpan,type,vendor,clickableRowOverlay];
    });
}

