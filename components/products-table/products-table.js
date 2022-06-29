import { Card, Tabs } from "@shopify/polaris";
import PolarisFiltersDataTable from "../polaris-filters-data-table/polaris-filters-data-table";
import { useState, useCallback } from "react";
import styles from './ProductsTable.module.scss';

function ProductsTable() {

    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        []
    );

    const tabs = [
        {
            id: "all-customers-1",
            content: "All",
            accessibilityLabel: "All customers",
            panelID: "all-customers-content-1",
        },
        {
            id: "accepts-marketing-1",
            content: "Accepts marketing",
            panelID: "accepts-marketing-content-1",
        },
        {
            id: "repeat-customers-1",
            content: "Repeat customers",
            panelID: "repeat-customers-content-1",
        },
        {
            id: "prospects-1",
            content: "Prospects",
            panelID: "prospects-content-1",
        },
    ];

    return (
        <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                <PolarisFiltersDataTable />
            </Tabs>
        </Card>
    )
}

export default ProductsTable;