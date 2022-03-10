import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {

    //default trackable property
    value='red';

    onChangeHandler(evt){
        
        this.value=evt.target.value;
    }

    onClickHandler()
    { 
// get the value from input
// find checkgroup
        const childComp= this.template.querySelector('c-publi-method-child');
       const msg= childComp.selctCheckBox(this.value);
       console.log('REturned Message :'+msg);

// invoke selectCheckbox method of chkboxgroup



    }
}