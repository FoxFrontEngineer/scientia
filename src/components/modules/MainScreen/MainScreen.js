import React from "react";

import ComposeCharts from "components/ui/charts/ComposeCharts";
import MenuSidebar from "components/ui/MenuSidebar";

export default function MainScreen() {

    return (
        <>
            <h1>This is Main Screen after Login</h1>
            <ComposeCharts />
            <MenuSidebar />
        </>
    )
}