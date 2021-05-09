export function getEffective(distance, calories, weight) {
    const targetCalories = distance * (weight + 2) / 1000;
    const effective = (calories * 100) / targetCalories;
    return Math.round(effective);
}

export function getMostEffective(objectWithData) {
    let effective = 0;
    let effectiveKey = null;
    let effectiveTime = null;
    for (const key in objectWithData) {
        if (objectWithData[key]["effective"] > effective) {
            effective = objectWithData[key]["effective"]
            effectiveTime = objectWithData[key]["time"]
            effectiveKey = key
        }
        if (objectWithData[key]["effective"] === effective && objectWithData[key]["time"] < effectiveTime) {
            effective = objectWithData[key]["effective"]
            effectiveTime = objectWithData[key]["time"]
            effectiveKey = key
        }
    }
    return objectWithData[effectiveKey]
}