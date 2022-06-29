import { useCallback } from "react";
import { ChoiceList, Card, Filters, DataTable, Spinner, EmptySearchResult } from "@shopify/polaris";
import { isEmpty, disambiguateLabel, getRowsFromArray } from "./polaris-filters-data-table.utils";
import styles from './PolarisFiltersDataTable.module.scss';

function PolarisFiltersDataTable({ productsArray, filtersState, filtersChange, isProductsLoading, handleDataTableRowClick }) {
    const { availability, productType, vendor, queryValue } = filtersState;

    const handleAvailabilityRemove = () => filtersChange("availability", { value: null });
    const handleProductTypeRemove = () => filtersChange("productType", { value: null });
    const handleVendorRemove = () => filtersChange("vendor", { value: null });
    const handleQueryValueRemove = () => filtersChange("queryValue", { value: '' });

    const handleFiltersClearAll = useCallback(() => {
        handleAvailabilityRemove();
        handleProductTypeRemove();
        handleVendorRemove();
        handleQueryValueRemove();
    }, [
        handleAvailabilityRemove,
        handleQueryValueRemove,
        handleProductTypeRemove,
        handleVendorRemove,
    ]);

    const filters = [
        {
            key: "availability",
            label: "Purchase Availability",
            filter: (
                <ChoiceList
                    title="Availability"
                    titleHidden
                    choices={[
                        { label: "Online Store", value: "Online Store" },
                        { label: "Point of Sale", value: "Point of Sale" },
                        { label: "Buy Button", value: "Buy Button" },
                    ]}
                    selected={availability || []}
                    onChange={filtersChange("availability")}
                    allowMultiple
                />
            ),
            shortcut: true,
        },
        {
            key: "productType",
            label: "Product type",
            filter: (
                <ChoiceList
                    title="Product type"
                    titleHidden
                    choices={[
                        { label: "T-Shirt", value: "T-Shirt" },
                        { label: "Accessory", value: "Accessory" },
                        { label: "Gift card", value: "Gift card" },
                    ]}
                    selected={productType || []}
                    onChange={filtersChange("productType")}
                    allowMultiple
                />
            ),
            shortcut: true,
        },
        {
            key: "vendor",
            label: "Vendor",
            filter: (
                <ChoiceList
                    title="Vendor"
                    titleHidden
                    choices={[
                        { label: "Company 123", value: "Company 123" },
                        { label: "Boring Rock", value: "Boring Rock" },
                        { label: "Rustic LTD", value: "Rustic LTD" },
                        { label: "partners-demo", value: "partners-demo" },
                    ]}
                    selected={vendor || []}
                    onChange={filtersChange("vendor")}
                    allowMultiple
                />
            ),
        },
    ];

    const appliedFilters = [];
    if (!isEmpty(availability)) {
        const key = "availability";
        appliedFilters.push({
            key,
            label: disambiguateLabel(key, availability),
            onRemove: handleAvailabilityRemove,
        });
    }
    if (!isEmpty(productType)) {
        const key = "productType";
        appliedFilters.push({
            key,
            label: disambiguateLabel(key, productType),
            onRemove: handleProductTypeRemove,
        });
    }
    if (!isEmpty(vendor)) {
        const key = "vendor";
        appliedFilters.push({
            key,
            label: disambiguateLabel(key, vendor),
            onRemove: handleVendorRemove,
        });
    }

    return (
        <div
        // style={{ height: "568px" }}
            className={styles['data-table-container']}
        >
            <Card>
                <Card.Section>
                    <Filters
                        instanceId="PolarisTextField1Label"
                        queryValue={queryValue}
                        filters={filters}
                        appliedFilters={appliedFilters}
                        onQueryChange={filtersChange("queryValue")}
                        onQueryClear={handleQueryValueRemove}
                        onClearAll={handleFiltersClearAll}
                    />
                </Card.Section>
                {
                    isProductsLoading
                        ?
                        <div className={styles['spinner-container']}>
                            <Spinner />
                            <p>Loading...</p>
                        </div>
                        :
                        (
                            productsArray.length === 0
                                ?
                                <div className={styles['empty-search-result-container']}>
                                    <EmptySearchResult
                                        className="Hello" 
                                        title={"No Products Found"}
                                        description={"Try changing the filters or search term"}
                                        withIllustration
                                    />
                                </div>                               
                                :
                                <DataTable
                                    columnContentTypes={[
                                        "text",
                                        "text",
                                        "text",
                                        "text",
                                        "text",
                                        "text",
                                        "text"
                                    ]}
                                    headings={[
                                        "",
                                        "Product",
                                        "Status",
                                        "Inventory",
                                        "Type",
                                        "Vendor",
                                        ""
                                    ]}
                                    rows={getRowsFromArray(productsArray, handleDataTableRowClick)}
                                />
                        )
                        
                }
            </Card>
        </div>
    );
}

export default PolarisFiltersDataTable;