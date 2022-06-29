// import React from 'react';
import { getTabValue } from "../components/polaris-tabs/polaris-tabs.utils";

const additionalProductsData = [
    {
        data_id: 1,
        status: "Archived",
        inventory: "452",
        type: "Indoor",
        vendor: "partners-demo"
    },
    {
        data_id: 2,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "",
        vendor: "partners-demo"
    },
    {
        data_id: 3,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "Outdoor",
        vendor: "Boring Rock"
    },
    {
        data_id: 4,
        status: "Active",
        inventory: "1362",
        type: "",
        vendor: "Company 123"
    },
    {
        data_id: 5,
        status: "Active",
        inventory: "-63",
        type: "Outdoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 6,
        status: "Archived",
        inventory: "Inventory not tracked",
        type: "Indoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 7,
        status: "Archived",
        inventory: "-10",
        type: "",
        vendor: "Rustic LTD"
    },
    {
        data_id: 8,
        status: "Active",
        inventory: "-124",
        type: "",
        vendor: "partners-demo"
    },
    {
        data_id: 9,
        status: "Archived",
        inventory: "983",
        type: "outdoor",
        vendor: "Boring Rock"
    },
    {
        data_id: 10,
        status: "Active",
        inventory: "605",
        type: "Indoor",
        vendor: "partners-demo"
    },
    {
        data_id: 11,
        status: "Draft",
        inventory: "Inventory not tracked",
        type: "Indoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 12,
        status: "Draft",
        inventory: "Inventory not tracked",
        type: "",
        vendor: "Rustic LTD"
    },
    {
        data_id: 13,
        status: "Draft",
        inventory: "Inventory not tracked",
        type: "Outdoor",
        vendor: "partners-demo"
    },
    {
        data_id: 14,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "",
        vendor: "Company 123"
    },
    {
        data_id: 15,
        status: "Draft",
        inventory: "688",
        type: "Indoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 16,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "Indoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 17,
        status: "Draft",
        inventory: "Inventory not tracked",
        type: "Indoor",
        vendor: "Rustic LTD"
    },
    {
        data_id: 18,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "",
        vendor: "Rustic LTD"
    },
    {
        data_id: 19,
        status: "Draft",
        inventory: "1183",
        type: "Indoor",
        vendor: "Boring Rock"
    },
    {
        data_id: 20,
        status: "Active",
        inventory: "Inventory not tracked",
        type: "Outdoor",
        vendor: "partners-demo"
    },
]


export const getAdditionalData = (products) => {
    return products.map((productObject,i) => {
        return {
            ...productObject,
            ...additionalProductsData[i]
        }
    });
}

export const getFilteredProductsArray = (productsArray, filtersState) => {
    const { 
        selectedTabIndex, 
        availability, 
        productType, 
        vendor: filterStateVendorArray, 
        queryValue 
    } = filtersState;
    const selectedTabIndexValue = getTabValue(selectedTabIndex);
    return productsArray.filter(product => {
        const {
            title,
            status,
            vendor: productObjectVendor
        } = product;
        const selectedTabIndexCheck = (selectedTabIndexValue === "All"? true: (status === selectedTabIndexValue));
        const availabilityCheck = '';
        const productTypeCheck = '';
        const vendorCheck = (
                                (filterStateVendorArray&&filterStateVendorArray.length)
                                    ?
                                    filterStateVendorArray.includes(productObjectVendor)
                                    :
                                    true
                            );
        const queryValueCheck = (
                                    queryValue
                                    ?
                                    title.toLowerCase().includes(queryValue.toLowerCase())
                                    :true
                                );
        // console.log(selectedTabIndexCheck,vendorCheck,queryValueCheck)
        return (selectedTabIndexCheck) && (vendorCheck) && (queryValueCheck);
        // console.log(selectedTabIndexCheck)
        // return selectedTabIndexCheck;
        // return true;
    });
}

// export const getProductsArrayInRequiredFormat = (products) => {
//     return products.map((productObject,i) => {
//         const {image,title,status,inventory,type,vendor} = {...productObject,...additionalProductsData[i]};
//         const imgElement = React.createElement("img",{src: image,alt: title, className: "data-table-product-img"},null);
//         const shortenedTitle = title.slice(0,10)+'...';
//        return [imgElement,shortenedTitle,status,inventory,type,vendor];
//     });
// }

// export const getFilteredProductsArray = (productsArray, filtersState) => {
//     // console.log(filtersState)
//     // console.log(getTabValue(filtersState.selectedTabIndex))
//     const { selectedTabIndex, availability, productType, vendor, queryValue } = filtersState;
//     const selectedTabIndexValue = getTabValue(selectedTabIndex);
//     return productsArray.filter(product => {
//         const selectedTabIndexCheck = (selectedTabIndexValue === "All"? true: (product[2] === selectedTabIndexValue));
//         const availabilityCheck = '';
//         const productTypeCheck = '';
//         const vendorCheck = ((vendor&&vendor.length)?vendor.includes(product[5]):true);
//         const queryValueCheck = (queryValue?product[1].toLowerCase().includes(queryValue.toLowerCase()):true);
//         console.log(selectedTabIndexCheck,vendorCheck,queryValueCheck)
//         return (selectedTabIndexCheck) && (vendorCheck) && (queryValueCheck);
//         // return true;
//     });
// }