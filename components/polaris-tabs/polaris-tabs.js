import { useState,useCallback,useEffect } from "react";
import { Card, Tabs } from "@shopify/polaris";
import { tabs,filterProductsBasedOnTabsState } from './polaris-tabs.utils';
import PolarisFiltersDataTable from "../polaris-filters-data-table/polaris-filters-data-table";
import styles from './PolarisTabs.module.scss';

function PolarisTabs({filtersState,filtersChange,productsArray,isProductsLoading,handleDataTableRowClick}) {
    return (
        <Card>
            <Tabs tabs={tabs} selected={filtersState.selectedTabIndex} onSelect={filtersChange("selectedTabIndex")}>
                <PolarisFiltersDataTable
                    filtersState={filtersState} 
                    filtersChange={filtersChange}
                    productsArray={productsArray}
                    isProductsLoading={isProductsLoading}
                    handleDataTableRowClick={handleDataTableRowClick}
                />
            </Tabs>
        </Card>
    );
}

export default PolarisTabs;