import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import SearchBar from 'material-ui-search-bar';
import Particles from 'react-particles-js';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ButtonAppBar from './components/ButtonAppBar';
import ParticlesBackground from './components/ParticlesBackground';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="appbar">
          <ButtonAppBar/>
        </div>
        <div id="divID_particles" className="particles">
          <ParticlesBackground canvasClassName="canvas"/>
        </div>
      </div>
    );
  }
}

export default App;









/* MIGRATION??? */

// const styles = theme => ({
//   root: {
//     //marginTop: theme.spacing.unit,
//     width: '100%',
//   },
//   flex: {
//     flex: 1,
//   },
//   appBar: {
//     padding: 20,
//     boxShadow: "none",
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   searchBar: {
//     //
//   },
//   flatButton: {
//     marginLeft: 20,
//     marginRight: -12,
//   },
// });
//
// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.appBar} position="static">
//         <Toolbar>
//
//       {/* Hamburger Menu in AppBar */}
//           <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//
//       {/* Material-UI SearchBar */}
//           <SearchBar
//             className={classes.searchBar}
//             onChange={() => console.log('onChange')}
//             onRequestSearch={() => console.log('onRequestSearch')}
//             autoFocus
//             style={{
//               margin: 'auto',
//               width: '90%',
//             }}
//           />
//
//       {/* Explore button */}
//           <Button className={classes.flatButton} color="contrast">Explore</Button>
//         </Toolbar>
//       </AppBar>
//
//       {/* Particle background */}
//       <Particles
//         params={{
//           "particles": {
//             "number": {
//               "value": 50,
//               "density": {
//                 "enable": true,
//                 "value_area": 800
//               }
//             },
//             "color": {
//               "value": "#444b54"
//             },
//             "shape": {
//               "type": "circle",
//               "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//               },
//               "polygon": {
//                 "nb_sides": 5
//               },
//               "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//               }
//             },
//             "opacity": {
//               "value": 0.5,
//               "random": false,
//               "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//               }
//             },
//             "size": {
//               "value": 3,
//               "random": true,
//               "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//               }
//             },
//             "line_linked": {
//               "enable": true,
//               "distance": 220,
//               "color": "#444b54",
//               "opacity": 0.4,
//               "width": 1
//             },
//             "move": {
//               "enable": true,
//               "speed": 1,
//               "direction": "none",
//               "random": false,
//               "straight": false,
//               "out_mode": "bounce",
//               "bounce": false,
//               "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//               }
//             }
//           },
//           "interactivity": {
//             "detect_on": "canvas",
//             "events": {
//               "onhover": {
//                 "enable": false,
//                 "mode": "repulse"
//               },
//               "onclick": {
//                 "enable": true,
//                 "mode": "push"
//               },
//               "resize": true
//             },
//             "modes": {
//               "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                   "opacity": 1
//                 }
//               },
//               "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//               },
//               "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//               },
//               "push": {
//                 "particles_nb": 4
//               },
//               "remove": {
//                 "particles_nb": 2
//               }
//             }
//           },
//           "retina_detect": true
//         }}
//         style={{
//           //height: '50%',
//           // style options go here
//         }}
//       />
//     </div>
//   );
// }
//
// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(ButtonAppBar);
