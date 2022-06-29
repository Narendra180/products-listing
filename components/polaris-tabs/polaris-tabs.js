import { useState,useCallback,useEffect } from "react";
import { Card, Tabs } from "@shopify/polaris";
import { tabs,filterProductsBasedOnTabsState } from './polaris-tabs.utils';
import PolarisFiltersDataTable from "../polaris-filters-data-table/polaris-filters-data-table";
import styles from './PolarisTabs.module.scss';

function PolarisTabs({selectedTabIndex,onSelect,productsArray}) {
    return (
        <Card>
            <Tabs tabs={tabs} selected={selectedTabIndex} onSelect={onSelect}>
                <PolarisFiltersDataTable 
                    productsArray={productsArray}
                />
            </Tabs>
        </Card>
    );
}

export default PolarisTabs;