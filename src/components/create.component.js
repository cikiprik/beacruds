import React, {Component} from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number: ''
        }
    }

    onChangePersonName(e) {
        this.setState(
            {
                person_name: e.target.value
            }
        );
    }

    onChangeBusinessName(e) {
        this.setState(
            {
                business_name: e.target.value
            }
        );
    }

    onChangeGstNumber(e) {
        this.setState(
            {
                business_gst_number: e.target.value
            }
        );
    }

    onSubmit(e) {
        e.preventDefault();
        alert('The Values are : ' + (this.state.person_name)+ ' ' +(this.state.business_name ) + ' ' + (this.state.business_gst_number) )
        this.setState({
                person_name: '',
                business_name: '',
            business_gst_number: ''
            }
        );

    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className='form-group'>
                        <label>Add person name: </label>
                        <input type='text' value={this.state.person_name}
                               onChange={this.onChangePersonName} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Add business name: </label>
                        <input type='text' value={this.state.business_name}
                               onChange={this.onChangeBusinessName} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Add phone number: </label>
                        <input type='text' value={this.state.business_gst_number}
                               onChange={this.onChangeGstNumber} className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Register'
                               onClick={this.onSubmit} className='btn btn-info'/>
                    </div>
                </form>
            </div>
        )
    }

}