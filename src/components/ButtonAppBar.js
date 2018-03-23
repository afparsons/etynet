import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SearchBar from 'material-ui-search-bar';

{/* styles specifies look of AppBar -- TODO: split into theme file? */}
const styles = theme => ({
  root: {
    //marginTop: theme.spacing.unit,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  appBar: {
    padding: 10,
    boxShadow: "none",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  searchBar: {
    //
  },
  flatButton: {
    marginLeft: 20,
    marginRight: -12,
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      {/* AppBar serves as top nav-bar */}
      <AppBar className={classes.appBar} position="static">

      {/* Toolar holds components */}
        <Toolbar>

      {/* Hamburger Menu in AppBar */}
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>

      {/* Material-UI SearchBar */}
          <SearchBar
            className={classes.searchBar}
            onChange={() => console.log('onChange')}
            /* Particles-js div disappears on search. TODO: yield to D3 SVG component upon search? */
            onRequestSearch={() => document.getElementById('divID_particles').style.display = 'none' /* console.log('onRequestSearch') */}
            autoFocus
            style={{
              margin: 'auto',
              width: '90%',
            }}
          />

      {/* Explore button */}
          <Button className={classes.flatButton} color="contrast">Explore</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
