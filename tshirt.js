function deliveryCost(shirtNumber) {
    const firstTshirtCost = 100;
    const secondTshirtCost = 80;
    const thirdTshirtCost = 50;

    if (shirtNumber <= 100) {
        const cost = shirtNumber * firstTshirtCost;
        return cost;
    } else if (shirtNumber <= 200) {
        const first100 = 100 * firstTshirtCost;
        const restShirt = shirtNumber - 100;
        const second100 = restShirt * secondTshirtCost;
        const totalCost = first100 + second100;
        return totalCost;
    } else {
        const first100 = 100 * firstTshirtCost;
        const second100 = 100 * secondTshirtCost;
        restShirt = shirtNumber - 200;
        const restTshirts = restShirt * thirdTshirtCost;
        const totalTshirtCost = first100 + second100 + restTshirts;
        return totalTshirtCost;


    }


}
const myTshirt = deliveryCost(144);
console.log(myTshirt);