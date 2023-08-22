function delay (time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function placeorder(){
    await delay(2000);
    console.log("order taken");
}
async function startProduction(){
    await delay(2000);
    console.log("Production started");
}
async function printID(){
    await delay(2000);
    console.log("ID Printed");
}
async function printName(){
    await delay(2000);
    console.log("Name Printed");
}
async function printDescription(){
    await delay(2000);
    console.log("Description Printed");
}


 async function main(){
    console.log("Order is going to taken");
    await placeorder();
    console.log("Order is in Production");
    await startProduction();
    console.log("ID Printing started");
    await printID();
    console.log("Name Printing started");
    await printName();
    console.log("Product Description Printing started");
    await printDescription();

 }
 main();