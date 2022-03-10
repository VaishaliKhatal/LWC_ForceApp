import { api, LightningElement } from 'lwc';

export default class HotelRoom extends LightningElement {


    @api
    hotelRoomInfo={roomName:'Default Name', capacity:2}

    @api
    showRoomInfo=false;

}