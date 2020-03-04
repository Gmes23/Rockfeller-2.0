import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import EventListItem from 'containers/EventListItem';

function EventsList({ loading, error, listresults }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="We couldn't find any results, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (listresults !== false) {
    return <List items={listresults} component={EventListItem} />;
  }

  return null;
}

export default EventsList;