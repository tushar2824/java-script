const placeorder = (callback) => {
    setTimeout(()=> {
        console.log("Order placed");
        callback();
    }, 2000);
}

const startProduction= (callback) => {
    setTimeout(()=> {
        console.log("Production started");
        callback();
    }, 5000);
}
const Printingstarted= (callback) => {
    setTimeout(()=> {
        console.log("printID");
        callback();
    }, 5000);
}
const printID= (callback) => {
    setTimeout(()=> {
        console.log("ID printed");
        callback();
    }, 5000);
}
const productName= (callback) => {
    setTimeout(()=> {
        console.log("Name Printed");
        callback();
    }, 5000);
}
const productDesc= (callback) => {
    setTimeout(()=> {
        console.log("Description Printed");
        callback();
    }, 5000);
}
 

console.log("Ordering Product.........");
placeorder(()=> {

    console.log("In Production");
    startProduction(()=>{

        console.log("Printing started");
        printID(()=> {
            productName(()=> {
                 productDesc(()=>{

                console.log("Day Ended");
                });
                
            });
        });
    });
});