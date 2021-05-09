import React from "react";
import { getEffective, getMostEffective } from "helpers/trainingEffective";

import CaloriesChart from "components/ui/charts/CaloriesChart";
import DistanceChart from "components/ui/charts/DistanceChart";
import TimeCharts from "components/ui/charts/TimeChart";

function ComposeCharts() {
    const caloriesData = [{name: 'Понедельник', calories: 200, max: 800}, {name: 'Вторник', calories: 300}, {name: 'Среда', calories: 112}, 
    {name: 'Четверг', calories: 112}, {name: 'Пятница', calories: 112}, {name: 'Суббота', calories: 112}, {name: 'Воскресенье', calories: 112}];

    const distanceData = [{name: 'Понедельник', distance: 1200, max: 15000}, {name: 'Вторник', distance: 1800}, {name: 'Среда', distance: 5300}, 
    {name: 'Четверг', distance: 4800}, {name: 'Пятница', distance: 2200}, {name: 'Суббота', distance: 3260}, {name: 'Воскресенье', distance: 4310}];

    const timeData = [{name: 'Понедельник', time: 20, max: 120}, {name: 'Вторник', time: 22}, {name: 'Среда', time: 25}, 
    {name: 'Четверг', time: 27}, {name: 'Пятница', time: 27}, {name: 'Суббота', time: 28}, {name: 'Воскресенье', time: 30}];

    const computeEffective = () => {
        const composeCaloriesWithDistance = [...caloriesData, ...distanceData, ...timeData];
        const result = composeCaloriesWithDistance.reduce((acc, el) => {
            if (el.name) {
              if (acc) {
                if (acc[el.name]) {
                  acc[el.name] = {...acc[el.name], ...el}
                } else {
                  acc[el.name] = el
                }
                
                return acc
              }
            }
            return acc;
          }, {})
          for (const key in result) {
              const {calories, distance} = result[key];
              const weight = 70;
              result[key]["effective"] = getEffective(distance, calories, weight)
          }
          const {name, effective} = getMostEffective(result)
          return {name, effective}
    }

    const renderEffective = computeEffective();

    return <div>
         <CaloriesChart data={caloriesData} />
         <DistanceChart data={distanceData} />
         <TimeCharts data={timeData} />
         <h1>Эффективная тренировка:</h1>
         <p>День: {renderEffective.name}</p>
         <p>Проценты: {renderEffective.effective}</p>
    </div>
}

export default ComposeCharts;