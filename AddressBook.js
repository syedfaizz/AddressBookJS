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
        return "\n-------------------------------------------"+
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

console.log("\n|****************************************************************************|");
console.log("|                     Welcome To Address Book System                         |");
console.log("|****************************************************************************|");
let addressBookFlag = true;
var addressBookArray = []
while(addressBookFlag == true)
{
    let bookChoice;
   
    console.log("\n|-----------------------------------------------|");
    console.log("|       * Address Book Choice *                 |");
    console.log("|-----------------------------------------------|");
    console.log("| 1  -> Add New Contact In AddreessBook         |");
    console.log("| 2  -> View All Contacts In AddreessBook       |");
    console.log("| 3  -> Modify Exsiting Contact In AddreessBook |");
    console.log("| 4  -> Delete Contact Data From AddreessBook   |");
    console.log("| 5  -> Show Size of AddressBook                |");
    console.log("| 6  -> Exit From AddressBook System            |");
    console.log("|-----------------------------------------------|");

    console.log(">>> Enter Your Choice  >>>");
    bookChoice = Number(prompt( bookChoice));
    switch(bookChoice)
    {
        case 1:
            addData(addressBookArray);
            break;
        case 2:
            viewData(addressBookArray);
            break;
        case 3:
            updateData(addressBookArray);
            break;
        case 4:
            deleteData(addressBookArray);
            break;
        case 5:
            sizeOfAddressBook(addressBookArray);
            break
        case 6:
            addressBookFlag = false;
            console.log(" !! Thank You For Using Address Book System !! ");
            break;
        default:
                console.log(" !! Invalid Input !! \n> Type Valid Input. ");
    }
}


function addData(addressBookArray)
{
    let numOfData,numOfData1;
    try 
    { 
        try
        {
            numOfData1  = prompt(' > How Many Data You Want to add in Address Book :-');
            numOfData = Number(numOfData1) // Parse String to Number Format
        }
        catch(exception)
        {
            console.exception(" !! Alert !!\n>Type only Numeric Value .");
        }
        for(let i = 1; i <= numOfData; i++)
        {   
            var flag = true;
            let addfirstName = prompt("Enter First Name:- ");
            const found = addressBookArray.forEach(element => 
            {
                if(element.firstName == addfirstName)
                {
                    flag =false;
                } 
            });          
            if(flag == true)
            {
                
                addlastName = prompt("Enter Last Name:- ");
                addaddress = prompt("Enter Address:- ");
                addcity = prompt("Enter City:- ");
                addstate = prompt("Enter State:- ");
                addzip = prompt("Enter Zip:- ");
                addphoneNumber = prompt("Enter Phone Number:- ");
                addemail = prompt("Enter Email Address:- ");
                let newaddressBook = new AddressBook(addfirstName,addlastName,addaddress,addcity,addstate,addzip,addphoneNumber,addemail);
            
                addressBookArray.push(newaddressBook);
                console.log("\n * Person Contact SuccessFully Added . *");
            }
            else
            {
                console.log(" Contact is already in Address Book System ");
            }           
        }
    }
    catch (exception) 
    {
        console.error(exception)
    }
}

function viewData(addressBookArray)
{
    console.log("\n|--------------------------------------------- -|");
    console.log("|       * Address Book Contact DataBase *       |");
    console.log("|-----------------------------------------------|");   
    console.log(addressBookArray.toString());
}
function updateData(addressBookArray)
{
    const updateName = prompt("Enter Name To Search: ")
    addressBookArray.forEach(element => {
        try {
            if(element.firstName===updateName){
                console.log(" ********* For Modify Data ********");
                element.firstName = prompt(" New First Name :- ")
            }
            else{
                console.log(" Name  Not Found in DataBase ");
                console.log(" > Make Sure You Type Validate First Name. ");
            }
        } catch (exception) {
            console.error(exception)
        }
    
    });
    console.log(" * Person Data SuccessFully Updated/Modified/Edited . *");
}

function deleteData(addressBookArray)
{
    const deleteName = prompt("Enter Name To Search: ")
    addressBookArray.forEach(element => {
        try {
            if(element.firstName===deleteName){
                console.log("\n ********* For Delete Data ********");
                addressBookArray.pop(element);
            }
            else{
                console.log(" Name  Not Found in DataBase ");
                console.log(" > Make Sure You Type Validate First Name. ");
            }
        } catch (exception) {
            console.error(exception)
        }
    
    });
    console.log("\n * Person Data SuccessFully Deleted . *");
}
function sizeOfAddressBook(addressBookArray)
{
    
    const count = () => addressBookArray.length;

    console.log("---------------------------------------------------------------");
    console.log("     *** Show Total Number of Contacts in AddressBook ***      ");
    console.log("---------------------------------------------------------------");
    console.log("Total Number of Contacts in AddressBook is :- "+addressBookArray.reduce( count,0 ));
    console.log("---------------------------------------------------------------");
}