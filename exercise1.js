let address = {
    street : "Nakhalpara",
    city : "Dhaka",
    zipCode : 1215
};
function showAddress(address){
    for (let key in address) {
       console.log(key,address[key]);
    }
}
showAddress(address);


