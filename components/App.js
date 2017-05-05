import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    background: 'linear-gradient(180deg, #FAFAFA 35%, #FFF 35%)',
    height: '100vh'
  },
  card: {
    minWidth: '420px',
    minHeight: '50vh',
    marginTop: '10vh',
    marginBottom: '80px',
    padding: '10px'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
};

class App extends Component {

  render () {
    return (

      <MuiThemeProvider>
        <div style={styles.root}>
          <Card style={styles.card} containerStyle={styles.cardContainer}>
            <h1>Afazeres</h1>
            <TodoInput addTodo={this.props.actions.addTodo} />
            <TodoList actions={this.props.actions} todos={this.props.todos} />
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
