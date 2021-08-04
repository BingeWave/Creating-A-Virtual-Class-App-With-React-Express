import React from 'react';

import AuthControl from '../components/AuthControl';

import CohortItem from '../components/CohortItem';

import API from '../util/Api';

class ListCohortsPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      cohorts: [],
      errors: null,
    };

  }

  componentDidMount() {

    API.getCohorts((data) => {

      this.setState({ cohorts: data })

    }, (errors) => {
      this.setState({ errors: errors.message });
    });
  }

  render() {
    return (
      <AuthControl authRequired={false} >
        <div className="container">
          <h1>Cohorts</h1>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {this.state.cohorts.map((cohort, index) => {
              return (
                <div className="col" key={index}>
                  <CohortItem cohort={cohort} />
                </div>
              )
            })}

          </div>

        </div>
      </AuthControl>
    );
  }
}

export default ListCohortsPage;
