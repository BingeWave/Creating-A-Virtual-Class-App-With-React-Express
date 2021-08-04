import React from 'react';


class BasePage extends React.Component {

    handleInputField(event, field_key) {

        let data = {};

        data[field_key] = event.target.value;

        this.setState(data);
    }

    handleDateField(date, field_key) {

        let data = {};

        data[field_key] = date;

        this.setState(data);
    }

    handleFileField(event, field_key) {

        let data = {};

        data[field_key] = event.target.files[0];

        this.setState(data);
    }

}

export default BasePage;