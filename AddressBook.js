//"use strict";
const prompt = require("prompt-sync")(); //For Accept Input Command Line Arguments


class AddressBook
{
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){return this._firstName;}
    set firstName(firstName)
    {
        let firstnameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(firstnameRegex.test(firstName))
               this._firstName = firstName;   
        else        
        {   console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect First Name !!! \n> Check First Aplhabet Should be Chapital .\n> Check More than 2 Alphabets is requied . ";
        }
    }

    get lastName(){return this._lastName}
    set lastName(lastName)
    {
        let lastRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(lastRegex.test(lastName))
            this._lastName = lastName;
        else 
        {
            console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect Last Name !!! \n> Check First Aplhabet Should be Chapital .\n> Check More than 2 Alphabets is requied . ";
        }
    }

    get address(){return this._address}
    set address(address)
    {
        let addressRegex = RegExp('[A-Z,a-z,0-9]{4,}$');
        if(addressRegex.test(address))
            this._address = address;
        else 
        {   console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect Address !!! \n> Check Minimum 4 Alphabets is requied . ";
        }
    }

    get city(){return this._city}
    set city(city)
    {
        let cityRegex = RegExp('[A-Z,a-z,0-9]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else 
        {   console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect City!!! \n> Check Minimum 4 Alphabets is requied . ";
        }
    }
    
    get state(){return this._state}
    set state(state)
    {
        let stateRegex = RegExp('[A-Z,a-z,0-9]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else
        {
            console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect State !!! \n> Check Minimum 4 Alphabets is requied . "; 
        }
    }
    get zip(){return this._zip}
    set zip(zip)
    {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}')
        if(zipRegex.test(zip))
            this._zip = zip;
        else 
        {
            console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect Zip Code  !!! \n> Check Zip Code First Number is Not be Zero .\n> Check Zip Code Should be exact 6 numbers . ";
        }
    }
 
    get phoneNumber(){return this._phoneNumber}
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp('^[0-9]{2}[: :][0-9]{10}')
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else 
        {    console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect Phone Number  !!! \n> Check Phone Number have Country Code .\n> Check Phone Number should be exact 10 digit  .\n> Space Required between Country code And Phone Number . ";
        }
    }

    get email(){return this._email}
    set email(email)
    {
        let emailRegex = RegExp('^[a-zA-Z0-9.+-]*@[a-z0-9]*[.][a-z]{2,5}[.,a-z]*$')
        if(emailRegex.test(email))
            {this._email = email;}
        else 
        {
            console.log("------------------------------------------------------------------------------------------------");
            throw "\t !!! Incorrect Email Address  !!! \n  Sample Email : abc@gmail.com\n> Your Email Similar like  Sample Email .\n> @ Sign is mandatory .\n> After Host (.) sign madatory .\n> After (.) Domain Name is madatory .";
        }    
    }
    toString()
    {
        return "\nAddressBook Conatct :- \n"+
        "-------------------------------------------"+
        "\nFirst Name = "+ this.firstName +
        ", \nLast Name = "+ this.lastName+
        ", \nAddress = "+ this.address +
        ", \nCity = "+ this.city +
        ", \nState = "+ this.state +
        ", \nZip = "+ this.zip +
        ", \nPhone Number = "+ this.phoneNumber +
        ", \nEmail ID = "+ this.email +
        "\n-------------------------------------------\n\n";
    }
}

try 
{
    let newAddressBook = new AddressBook("Dnyanesh","Gawade","Pune","Pune","Maharastra",411060,"91 1234567890","dnyanesh@gmail.com");
    console.log(newAddressBook.toString());
} 
catch (e) 
{
    console.error(e)
}

let addressBookArray = new Array();
try 
{ 
    const  numOfData1  = prompt(' \nHow Many Data You Want to add in Address Book ');
    let numOfData = Number(numOfData1) // Parse String to Number Format
    
    for(let i = 1; i <= numOfData; i++)
    {
        firstName = prompt("Enter First Name: ");
        lastName = prompt("Enter Last Name: ");
        address = prompt("Enter Address: ");
        city = prompt("Enter City: ");
        state = prompt("Enter State: ");
        zip = prompt("Enter Zip: ");
        phoneNumber = prompt("Enter Phone Number: ");
        email = prompt("Enter Email Address: ");
        let newaddressBook = new AddressBook(firstName,lastName,address,city,state,zip,phoneNumber,email);
        addressBookArray.push(newaddressBook.toString());
    }
    console.log("Addressbook Contacts : "+addressBookArray);
}
catch (exception) 
{
    console.error(exception)
}