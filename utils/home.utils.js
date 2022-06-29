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


export const getProductsArrayInRequiredFormat = (products) => {
    return products.map((productObject,i) => {
        const {image,title,status,inventory,type,vendor} = {...productObject,...additionalProductsData[i]};
        return [image,title,status,inventory,type,vendor];
    });
}

