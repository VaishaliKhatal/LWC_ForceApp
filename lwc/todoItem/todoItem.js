import { api, LightningElement, track } from 'lwc';

export default class TodoItem extends LightningElement {


    // private Reactive property - trackable
    // By Default trackable
   // @track
// public trackable property
    @api
    itemName='Default Todo';

    @api
    showTodo=false;

}