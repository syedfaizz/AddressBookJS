class contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.email = params[6];
        this.phoneNumber = params[7];
        
    }

    toString()
    {
        return "AddressBook Conatct \n[ "+
        "First Name = "+ this.firstName +
        ", Last Name = "+ this.lastName+
        ", Address = "+ this.address +
        ", City = "+ this.city +
        ", State = "+ this.state +
        ", Zip = "+ this.zip +
        ", Email ID = "+ this.email + 
        ", Phone Number = "+ this.phoneNumber +" ] ";
    }
}

let newConatct = new contact("Dnyanesh","Gawade","Pune","Pune","Maharastra",411060,"dnyanesh@gmail.com",1234567890);
console.log(newConatct.toString());