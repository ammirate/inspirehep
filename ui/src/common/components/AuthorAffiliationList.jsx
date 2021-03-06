import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import InlineList from './InlineList';

class AuthorAffiliationList extends Component {
  static renderAffiliation(affiliation) {
    return (
      <span>{affiliation}</span>
    );
  }

  render() {
    const { affiliations } = this.props;
    if (affiliations) {
      return (
        <InlineList
          wrapperClassName="di"
          separateItemsClassName="separate-items-with-and"
          items={affiliations}
          renderItem={AuthorAffiliationList.renderAffiliation}
        />
      );
    }
    return null;
  }
}

AuthorAffiliationList.propTypes = {
  affiliations: PropTypes.instanceOf(List),
};

AuthorAffiliationList.defaultProps = {
  affiliations: null,
};

export default AuthorAffiliationList;
