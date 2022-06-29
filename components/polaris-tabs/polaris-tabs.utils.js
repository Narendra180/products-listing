export const tabs = [
    {
        id: "all-products-1",
        content: "All",
        accessibilityLabel: "All Products",
        panelID: "all-products-content-1",
    },
    {
        id: "active-status-products-1",
        content: "Active",
        panelID: "active-status-products-content-1",
    },
    {
        id: "draft-status-products-1",
        content: "Draft",
        panelID: "draft-status-products-content-1",
    },
    {
        id: "archive-status-products-1",
        content: "Archived",
        panelID: "archive-status-products-content-1",
    },
];

export const getTabValue = (tabIndex) => {
    return tabs[tabIndex].content;
}

// export const filterProductsBasedOnTabsState = (tabIndex, productsArray) => {
//     switch(tabs[tabIndex].content) {
//         case "All":
//             return productsArray;
//         case "Active":
//             return productsArray.filter(product => product[2] === "Active");
//         case "Draft":
//             return productsArray.filter(product => product[2] === "Draft");
//         case "Archived":
//             return productsArray.filter(product => product[2] === "Archived");
//         default: 
//     }
//     return [];
// }