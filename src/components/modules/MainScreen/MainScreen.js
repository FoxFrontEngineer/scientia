import React from "react";

import Logout from "../Logout/Logout";
import ComposeCharts from "components/ui/charts/ComposeCharts";

export default function MainScreen() {

    return (
        <>
            <h1>This is Main Screen after Login</h1>
            <ComposeCharts />
            <p>«Важно помнить, что если вы не профессиональный спортсмен, то за одну тренировку можно сжечь от 500 до 800 калорий».</p>
            <p>500 килокалорий - это норма, на которую врачи рекомендуют снижать свою калорийность питания людям, которые хотят снизить массу своего тела.<br />
            Так же есть рекомендация заниматься фитнесом хотя бы на 500 килокалорий в день.</p>
            <Logout />
        </>
    )
}