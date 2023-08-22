const ticketbooked = (callback) => {
    setTimeout(()=> {
        console.log("ticket booked");
        callback();
    }, 3000);
}
const AirportReached = (callback) => {
    setTimeout(()=> {
        console.log("airport reached");
        callback();
    }, 3000);
}
const BaggageChecking = (callback) => {
    setTimeout(()=> {
        console.log("Baggage Checked");
        callback();
    }, 3000);
}
const SecurityChecked = (callback) => {
    setTimeout(()=> {
        console.log("Security Checked");
        callback();
    }, 3000);
}
const SelfChecked = (callback) => {
    setTimeout(()=> {
        console.log("Self Checked");
        callback();
    }, 3000);
}
const BoardingPass = (callback) => {
    setTimeout(()=> {
        console.log("Boarding Pass");
        callback();
    }, 3000);
}
const FlyingInAirplane = (callback) => {
    setTimeout(()=> {
        console.log("Flying In Airplane");
        callback();
    }, 3000);
}






console.log("Ticket Booking.....");
ticketbooked(()=> {

    console.log("going to the airport");
    AirportReached(()=> {

        BaggageChecking(()=> {

            SecurityChecked(()=> {
 
                SelfChecked(()=> {
                    
                    BoardingPass(()=> {

                        FlyingInAirplane(()=> {

                            console.log("Destination Reached");

                        });
                    });
                });
            });
        });
    });
});