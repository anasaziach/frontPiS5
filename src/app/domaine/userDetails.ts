export default class userDetails{
    id: number;
    firstName: String;
    lastName: String;
    phoneNumber: String;
    street: String;
    streetNumber: number;
    zipCode: number;
    locality: String;
    country: String;


    constructor(
        id: number,
        firstName: String,
        lastName: String
    ){
        this.id= id;
        this.firstName= firstName;
        this.lastName= lastName;
        this.phoneNumber= "0606060606";
        this.street= "agdal";
        this.streetNumber= 128;
        this.zipCode= 128;
        this.locality= "rabat";
        this.country= "morocco";

    }

}