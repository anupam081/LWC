// import module elements
import {
    LightningElement,
    wire,
    track
} from 'lwc';
 
//import method from the Apex Class
import fetchAccounts from '@salesforce/apex/lwcUtilityClass.fetchAccounts';
 
// Declaring the columns in the datatable
const columns = [{
        label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'View'
        }
    },
    {
        label: 'Name',
        fieldName: 'Name'
    },
    {
        label: 'Phone',
        fieldName: 'Phone'
    },
    {
        label: 'Type',
        fieldName: 'Type'
    }
];
 
// declare class to expose the component
export default class dataTableLwc extends LightningElement {
    @track columns = columns;
    @track record = {};
    @track rowOffset = 0;
    @track data = {};
    @track bShowModal = false;
    @track msg = '';
    @wire(fetchAccounts) parameters;
 
    // Row Action event to show the details of the record
    handleRowAction(event) {
        const row = event.detail.row;
        this.record = row;
        this.bShowModal = true; // display modal window
    }
 
    // to close modal window set 'bShowModal' tarck value as false
    closeModal() {
        this.bShowModal = false;
    }

    handleClick(){
        this.msg = 'lightning web component';
        window.alert('Check msg value here===> ' + this.msg);
        console.log('Check msg value here===> ' + this.msg);   
        console.error('error example');           
    }
}