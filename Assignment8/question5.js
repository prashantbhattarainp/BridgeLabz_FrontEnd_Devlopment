class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance provided!");
        }
        return this.distance * 15; // ₹15 per km
    }
}

try {
    const trip1 = new Trip("Bhopal", "Indore", 200);
    console.log(`Fare: ₹${trip1.calculateFare()}`);

    const trip2 = new Trip("Delhi", "Gurgaon", -5);
    console.log(trip2.calculateFare());
} catch (err) {
    console.error("Error:", err.message);
}