import { useState, useCallback, useEffect } from "react";
import { ChoiceList, TextField, Card, Filters, DataTable, } from "@shopify/polaris";
import { isEmpty,disambiguateLabel } from "./polaris-filters-data-table.utils";
import styles from './PolarisFiltersDataTable.module.scss';

function PolarisFiltersDataTable({productsArray}) {
    const [availability, setAvailability] = useState(null);
    const [productType, setProductType] = useState(null);
    const [vendor, setVendor] = useState(null);
    const [queryValue, setQueryValue] = useState('');

    const handleAvailabilityChange = useCallback(
        (value) => setAvailability(value),
        []
    );
    const handleProductTypeChange = useCallback(
        (value) => setProductType(value),
        []
    );
    const handleVendorChange = useCallback(
        (value) => setVendor(value),
        []
    );
    const handleFiltersQueryChange = useCallback(
        (value) => {
            console.log(value);
            setQueryValue(value)
        },
        []
    );
    const handleAvailabilityRemove = useCallback(() => setAvailability(null), []);
    const handleProductTypeRemove = useCallback(() => setProductType(null), []);
    const handleVendorRemove = useCallback(() => setVendor(null), []);
    const handleQueryValueRemove = useCallback(() => setQueryValue(''), []);
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
                    onChange={handleAvailabilityChange}
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
                    onChange={handleProductTypeChange}
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
                    onChange={handleVendorChange}
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
        >
            <Card>
                <Card.Section>
                    <Filters
                        instanceId="PolarisTextField1Label"
                        queryValue={queryValue}
                        filters={filters}
                        appliedFilters={appliedFilters}
                        onQueryChange={handleFiltersQueryChange}
                        onQueryClear={handleQueryValueRemove}
                        onClearAll={handleFiltersClearAll}
                    />
                </Card.Section>
                <DataTable
                    columnContentTypes={[
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
                    ]}
                    rows={productsArray}
                    // totals={["", "", "", 255, "$155,830.00"]}
                />
            </Card>
        </div>
    );
}

export default PolarisFiltersDataTable;