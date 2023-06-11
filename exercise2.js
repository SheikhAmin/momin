let address = showAddress("Tejkunipara", "Dhaka", 1215);

 function showAddress(street, city, zipCode){
   return {
    street,
    city,
    zipCode
   };
 };

let ShowAddress = new ShowAddress("Tejkunipara", "Dhaka", 1215);
 function ShowAddress(street, city, zipCode){
    this.street = street;
    this.address = city;
    this.zipCode = zipCode;
    for(let key in address){
        console.log(key,address[key]);
    }
 };

 console.log(showAddress(address));
 ShowAddress(address);