import React from 'react';
import { Grid, Button } from 'react-bootstrap';
import NewStopwatchButton from '../components/new-stopwatch-button.jsx';

const HomePage = () => (
  <Grid>
    <h1 className="page-header">Shared Stopwatch</h1>
    <p className="lead">Click the button below to create a new Stopwatch</p>
    <NewStopwatchButton />
  </Grid>
);

export default HomePage;
