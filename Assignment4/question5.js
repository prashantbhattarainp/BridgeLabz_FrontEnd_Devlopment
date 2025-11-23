function validateBooking(name, email, seats) {
    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatReg = /^(10|[1-9])$/;

    if (!nameReg.test(name)) return "Invalid Name";
    if (!emailReg.test(email)) return "Invalid Email";
    if (!seatReg.test(seats)) return "Seats must be 1-10";

    const booking = { name, email, seats };
    console.log("Ticket Confirmed:", booking);
    return booking;
}

validateBooking("Prashant", "Prashant@gmail.com", "3");