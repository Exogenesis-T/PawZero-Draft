document.getElementById('calculate-btn').addEventListener('click', function () {
    const travelEmissions = calculateTravelEmissions();
    const homeEmissions = calculateHomeEmissions();
    const foodEmissions = calculateFoodEmissions();
    const purchasesEmissions = calculatePurchasesEmissions();
    const wasteEmissions = calculateWasteEmissions();

    const totalEmissions = travelEmissions + homeEmissions + foodEmissions + purchasesEmissions + wasteEmissions;
    document.getElementById('total-emissions').textContent = `${totalEmissions.toFixed(2)} kg CO2`;
});

function calculateTravelEmissions() {
    const carHours = parseFloat(document.getElementById('car-hours').value) || 0;
    const trainHours = parseFloat(document.getElementById('train-hours').value) || 0;
    const busHours = parseFloat(document.getElementById('bus-hours').value) || 0;
    const shortHaul = parseFloat(document.getElementById('short-haul').value) || 0;
    const longHaul = parseFloat(document.getElementById('long-haul').value) || 0;

    const carEmissions = carHours * 2.31; // Example emission factor for cars
    const trainEmissions = trainHours * 0.41; // Example emission factor for trains
    const busEmissions = busHours * 0.27; // Example emission factor for buses
    const shortHaulEmissions = shortHaul * 89; // Example emission factor for short-haul flights
    const longHaulEmissions = longHaul * 110; // Example emission factor for long-haul flights

    return carEmissions + trainEmissions + busEmissions + shortHaulEmissions + longHaulEmissions;
}

function calculateHomeEmissions() {
    const occupants = parseFloat(document.getElementById('occupants').value) || 0;
    const electricityBill = parseFloat(document.getElementById('electricity-bill').value) || 0;
    const waterBill = parseFloat(document.getElementById('water-bill').value) || 0;

    const electricityEmissions = electricityBill * 0.233; // Example emission factor for electricity
    const waterEmissions = waterBill * 0.1; // Example emission factor for water

    return (electricityEmissions + waterEmissions) * occupants;
}

function calculateFoodEmissions() {
    const diet = document.getElementById('diet').value.toLowerCase();
    const beefFrequency = parseFloat(document.getElementById('beef-frequency').value) || 0;
    const takeawayFrequency = parseFloat(document.getElementById('takeaway-frequency').value) || 0;
    const stoveType = document.getElementById('stove-type').value.toLowerCase();
    const gasCookingHours = parseFloat(document.getElementById('gas-cooking-hours').value) || 0;
    const foodWaste = parseFloat(document.getElementById('food-waste').value) || 0;

    let dietEmissions = 0;
    if (diet === 'vegan') {
        dietEmissions = 2;
    } else if (diet === 'vegetarian') {
        dietEmissions = 3;
    } else {
        dietEmissions = 5;
    }

    const beefEmissions = beefFrequency * 27; // Example emission factor for beef
    const takeawayEmissions = takeawayFrequency * 3; // Example emission factor for takeaway
    const gasStoveEmissions = gasCookingHours * 2.91; // Example emission factor for gas stove
    const foodWasteEmissions = foodWaste * 2.5; // Example emission factor for food waste

    return dietEmissions + beefEmissions + takeawayEmissions + gasStoveEmissions + foodWasteEmissions;
}

function calculatePurchasesEmissions() {
    const tvLaptopPc = parseInt(document.getElementById('tv-laptop-pc').value) || 0;
    const furniture = parseInt(document.getElementById('furniture').value) || 0;
    const mobileTablet = parseInt(document.getElementById('mobile-tablet').value) || 0;
    const clothesFootwear = parseInt(document.getElementById('clothes-footwear').value) || 0;

    const tvLaptopPcEmissions = tvLaptopPc * 200; // Example emission factor for TV/laptop/PC
    const furnitureEmissions = furniture * 100; // Example emission factor for furniture
    const mobileTabletEmissions = mobileTablet * 50; // Example emission factor for mobile/tablet
    const clothesFootwearEmissions = clothesFootwear * 10; // Example emission factor for clothes/footwear

    return tvLaptopPcEmissions + furnitureEmissions + mobileTabletEmissions + clothesFootwearEmissions;
}

function calculateWasteEmissions() {
    const recycledWaste = parseFloat(document.getElementById('recycled-waste').value) || 0;
    const generalWaste = parseFloat(document.getElementById('general-waste').value) || 0;

    const recycledEmissions = recycledWaste * 0.21; // Example emission factor for recycled waste
    const generalEmissions = generalWaste * 2.1; // Example emission factor for general waste

    return recycledEmissions + generalEmissions;
}