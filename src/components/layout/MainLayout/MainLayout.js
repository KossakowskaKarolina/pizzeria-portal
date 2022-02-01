import React from 'react';
import PropTypes from 'prop-types';

import PageNav from '../PageNav/PageNav';

const MainLayout = (props) => (
  <div>
    <PageNav />
    <main>
      {props.children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
