import { api, LightningElement } from 'lwc';

export default class PubliMethodChild extends LightningElement {
    // this shows the value of currently selected checkboxes
    value=['red']

    // array of checkboxes
    options=[
        {label:'Red Marker',value:'red'},
        {label:'Blue Marker',value:'blue'},
        {label:'Green Marker',value:'green'},
        {label:'Black Marker',value:'black'},
    ]

    //method to select checkbox

    // public method
    @api
    selctCheckBox(value){

      const selectedMarker=  this.options.find(cb=>{
          return  cb.value===value
        })

        if(selectedMarker){
            this.value=selectedMarker.value;
            return "Marker found and Checked!";
        }
        return "We do not have this marker";
    }


}