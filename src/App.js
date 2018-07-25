import React, { Component } from 'react';
import { Grid, Button, Paper } from '@material-ui/core';
import { SketchPicker } from 'react-color';
import deepEqual from 'deep-equal';

class App extends Component {
  defaultColors = {
    backgroundTop: '#0cb5ad',
    backgroundBottom: '#b6ffdf',
    buttonsFormDark: '#565656',
    buttonsFormLight: '#6f6f6f',
    buttonSignIn: '#66ff99',
    buttonRegister: '#66ff99',
    buttonsBottom: '#6589ff',
    fontLogo: '#fff',
    fontButtons: '#fff'
  };

  state = this.defaultColors;

  handleChange = (color, event, element) => {
    this.setState({ [element]: color.hex });
  };

  handleReset = element => {
    this.setState({ [element]: this.defaultColors[element] });
  };

  handleResetAll = () => {
    this.setState(this.defaultColors);
  };

  render() {
    const stylesMaterial = {
      main: {
        minWidth: 1400
      },
      backgroundTop: {
        backgroundColor: this.state.backgroundTop,
        color: this.state.fontLogo,
        padding: '0 40px'
      },
      backgroundBottom: {
        display: 'flex',
        minWidth: 1400,
        height: 80,
        padding: '0 40px',
        backgroundColor: this.state.backgroundBottom
      },
      buttonForm: {
        height: 48,
        background: this.state.buttonsFormLight,
        borderRadius: 0,
        color: this.state.fontButtons,
        textTransform: 'capitalize'
      },
      buttonFormLight: {
        height: 48,
        float: 'right',
        margin: '0 5px',
        border: 0,
        color: this.state.fontButtons,
        textTransform: 'capitalize'
      },
      buttonFormFirst: {
        height: 48,
        borderRadius: '3px 0 0 3px',
        backgroundColor: this.state.buttonsFormDark,
        color: this.state.fontButtons,
        textTransform: 'capitalize'
      },
      buttonFormLast: {
        height: 48,
        borderRadius: '0 3px 3px 0',
        backgroundColor: this.state.buttonsFormDark,
        color: this.state.fontButtons,
        textTransform: 'capitalize'
      },
      textField: {
        width: '44vw',
        height: 44,
        paddingLeft: 10,
        boxShadow: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: `1px solid ${this.state.buttonsFormDark}`,
        borderBottom: `1px solid ${this.state.buttonsFormDark}`
      },
      buttonBottom: {
        width: 160,
        height: 56,
        background: this.state.buttonsBottom,
        padding: '0 20px',
        borderRadius: 0,
        color: this.state.fontButtons,
        textTransform: 'capitalize'
      }
    };

    const stylesPicker = {
      main: {
        margin: 30
      },
      card: {
        float: 'left',
        margin: '20px 20px 0 20px',
        header: {
          marginBottom: 5
        }
      },
      resetAll: {
        width: '100vw',
        float: 'left',
        margin: '40px 0 100px 50px',
        button: {
          width: 100,
          height: 40,
          backgroundColor: deepEqual(this.defaultColors, this.state)
            ? 'gray'
            : 'red',
          color: 'white'
        }
      }
    };

    return (
      <div style={stylesMaterial.main}>
        <header>
          <Paper square style={stylesMaterial.backgroundTop}>
            <Grid container alignItems='center' justify='space-around'>
              <Grid item xs={2}>
                <h1>RecipeShare</h1>
              </Grid>
              <Grid item xs={8}>
                <form>
                  <Button style={stylesMaterial.buttonFormFirst}>
                    recipe
                  </Button>
                  <Button style={stylesMaterial.buttonForm}>
                    ingredient
                  </Button>
                  <input
                    type='text'
                    placeholder='find a recipe...'
                    style={stylesMaterial.textField}
                  />
                  <Button style={stylesMaterial.buttonFormLast}>
                    search
                  </Button>
                </form>
              </Grid>
              <Grid item xs={2}>
                <Button
                  style={{
                    ...stylesMaterial.buttonFormLight,
                    backgroundColor: this.state.buttonRegister
                  }}
                >
                  Register
                </Button>
                <Button
                  style={{
                    ...stylesMaterial.buttonFormLight,
                    backgroundColor: this.state.buttonSignIn
                  }}
                >
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper square style={stylesMaterial.backgroundBottom}>
            <Grid container alignItems='center' justify='space-around'>
              {[
                'Quick & Easy',
                'Dinner',
                'Appetiser',
                'Vegetarian',
                'Gluten Free',
                'More Options...'
              ].map(element => {
                return (
                  <Button style={stylesMaterial.buttonBottom}>
                    {element}
                  </Button>
                );
              })}
            </Grid>
          </Paper>
        </header>

        <div style={stylesPicker.main}>
          {[
            { title: 'Top Background', name: 'backgroundTop' },
            { title: 'Bottom Background', name: 'backgroundBottom' },
            { title: 'Buttons Form Dark', name: 'buttonsFormDark' },
            { title: 'Button Form Light', name: 'buttonsFormLight' },
            { title: 'Button Sign In', name: 'buttonSignIn' },
            { title: 'Button Register', name: 'buttonRegister' },
            { title: 'Buttons Bottom', name: 'buttonsBottom' },
            { title: 'Logo Font Color', name: 'fontLogo' },
            { title: 'Button Font Color', name: 'fontButtons' }
          ].map(element => {
            return (
              <div style={stylesPicker.card}>
                <h3 style={stylesPicker.card.header}>{element.title}:</h3>
                <SketchPicker
                  color={this.state[element.name]}
                  onChange={(color, event) => {
                    this.handleChange(color, event, element.name);
                  }}
                />
                <button onClick={() => this.handleReset(element.name)}>
                  Reset
                </button>
              </div>
            );
          })}
        </div>

        <div style={stylesPicker.resetAll}>
          <button
            style={stylesPicker.resetAll.button}
            onClick={this.handleResetAll}
            disabled={deepEqual(this.defaultColors, this.state)}
          >
            RESET ALL
          </button>
        </div>
      </div>
    );
  }
}

export default App;
