import { useState, useMemo } from 'react';
import { set, get, concat } from 'lodash/fp';
import cn from 'clsx';

import {
  Switch,
  withStyles,
  Paper,
  Box,
  Container,
  Typography,
} from '@material-ui/core';

import { parseState, findMissingNumbers, scrollBottom } from './helpers';
import styles from './styles';

const INITIAL_STATE = [0, 0, 0, 0, 0, 0, 0, 0];

const App = ({ classes }) => {
  const [switches, setSwitches] = useState(INITIAL_STATE);
  const [foundNumbers, setFoundNumbers] = useState([0]);
  const [duplicateNumbers, setDuplicateNumbers] = useState([]);

  const handleChange = (i) => () => {
    const before = get(i, switches);
    const after = set(i, before ^ 1, switches);

    const decimalState = parseState(after);
    if (foundNumbers.includes(decimalState)) {
      setDuplicateNumbers(concat(duplicateNumbers, decimalState));
    } else {
      setFoundNumbers(concat(foundNumbers, decimalState));
    }

    setSwitches(after);
  };

  const missingNumbers = useMemo(() => {
    return findMissingNumbers(foundNumbers);
  }, [foundNumbers]);

  return (
    <Container maxWidth={'md'} className={classes.container}>
      <div className={classes.topContainer}>
        <Paper className={classes.section} ref={scrollBottom()}>
          {foundNumbers.map((num, i) => (
            <Typography key={i} component={'div'}>
              {num}
            </Typography>
          ))}
        </Paper>

        <Paper className={classes.section} ref={scrollBottom()}>
          {missingNumbers.map((num, i) => (
            <Typography key={i} component={'div'} color={'error'}>
              {num}
            </Typography>
          ))}
        </Paper>
      </div>

      <Box clone p={2}>
        <Paper>
          {switches.map((on, i) => (
            <Switch key={i} checked={!!on} onChange={handleChange(i)} />
          ))}
        </Paper>
      </Box>

      <Box clone mt={4} p={2}>
        <Paper
          className={cn(classes.section, classes.bottomSection)}
          ref={scrollBottom()}
        >
          {duplicateNumbers.map((num, i) => (
            <Typography key={i} component={'div'} color={'error'}>
              {num}
            </Typography>
          ))}
        </Paper>
      </Box>
    </Container>
  );
};

export default withStyles(styles)(App);
