import { LightningElement, track  } from 'lwc';
 
export default class LearnLWC extends LightningElement {

    @track firstName = '';
    @track lastName = '';

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
     }
     get uppercasedFullName() {
         //var name = this.firstName + this.lastName;
        return (this.firstName +' '+ this.lastName).toUpperCase();
    }
}