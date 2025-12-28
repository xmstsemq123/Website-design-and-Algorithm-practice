// cars.js (標準解答)

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    introduce() {
        return `這是一台 ${this.brand}`;
    }
}

class SportsCar extends Car {
    constructor(brand) {
        super(brand);
        this.topSpeed = 300; // 必須 > 250
    }
}

class FamilyVan extends Car {
    constructor(brand) {
        super(brand);
        this.seatCount = 7; // 必須 >= 7
    }
}

class HeavyTruck extends Car {
    constructor(brand) {
        super(brand);
        this.cargoCapacity = 2000; // 必須 > 1000
    }
}