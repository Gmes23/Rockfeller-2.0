import React from 'react';
import Helmet from 'react-helmet';


class Booking extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 
  render() {

    return (
      <div>
        <Helmet
          title="Booking"
          meta={[
            { name: 'description', content: 'Booking for upcoming concerts by your favorite Artist' },
          ]}
        />

      </div>
    );
  }
}


// Wrap the component to inject dispatch and state into it
export default Booking;

