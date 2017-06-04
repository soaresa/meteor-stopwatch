import React from 'react';
import { Grid } from 'react-bootstrap';

const AppLayout = ({content}) => (
  <div>
    <header></header>
    <main>
      {content}
    </main>
    <footer></footer>    
  </div>
);

export default AppLayout;