import { LightningElement, track } from 'lwc';

import profileImage from '@salesforce/resourceUrl/profilePic'

export default class HelloWorld extends LightningElement {

    // model 

    // private trackable property
   ///@track - number string  tracking primitive types is optional
    message="This is Default Message";

    profileImg= profileImage;
    city=""

    @track  // tracking reference type is needed 
    cities =['Pune',"Mumbai","Nagpur"]
    //controller 

    addCityHandler(evt){
     this.city=evt.target.value;  
    }

    changeHandler(evt){
        this.message=evt.target.value;
    }

    addCity(){
        this.cities.push(this.city);
    }


}