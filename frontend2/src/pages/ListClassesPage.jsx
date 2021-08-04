import React from 'react';

import AuthControl from '../components/AuthControl';

import API from '../util/Api';

import ClassItem from '../components/ClassItem';

class ListClassesPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      classes: [],
      errors: null,
    };

  }

  componentDidMount() {

    API.getClasses((data) => {

      this.setState({ classes: data })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }

  render() {
    return (
      <AuthControl authRequired={false} >
        <div className="container">
          <h1>My Classes</h1>

          {this.state.classes.map( (data, index) => {
            return (
              <ClassItem data={data} key={index} />
            )
          })}

        </div>
      </AuthControl>
    );
  }
}

export default ListClassesPage;
