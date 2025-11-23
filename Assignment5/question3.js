const user = {
    name: "Ayush",
    showName: () => {
        console.log("Inside arrow function:", this.name);
    }
};

user.showName();

const userFixed = {
    name: "Ayush",
    showName() {
        console.log("Inside normal function:", this.name);
    }
};

userFixed.showName();