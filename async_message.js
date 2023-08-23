function delay (time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
async function messagesend(){
    await delay(3000);
    console.log("message has been sended");
}
async function messagerecievebyserver(){
    await delay(3000);
    console.log("message was recieved by server");
}
async function messagesendtoreciever(){
    await delay(3000);
    console.log("message has been sent to the reciever");
}
async function messagerecievebyreciever(){
    await delay(3000);
    console.log("message was recieved by reciever");
}

async function main(){
    console.log("User send message...");
    await messagesend();

    console.log("message is sending to the server...");
    await messagerecievebyserver();

    console.log("message is sending to the reciever...");
    await messagesendtoreciever();
    
    console.log("message is recieving by the reciever...")
    await messagerecievebyreciever();

}
main();