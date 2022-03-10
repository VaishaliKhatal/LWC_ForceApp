import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track
    cityList=['Pune','Mumbai','Nagpur','Delhi']

   // @track
    showdiv=false

    showCitiesHandler(evt){
        this.showdiv=evt.target.checked;
    }
}