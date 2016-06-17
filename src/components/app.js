import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
//materail-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Album from 'material-ui/svg-icons/av/album';
import NavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component {
  historyBack(){
    history.back();
  }
  render() {
    if(this.props.title=='List of Blog Post'){
      return (
        <div>
        <AppBar
        title={<span style={styles.title}>{this.props.title}</span>}
        iconElementLeft={<IconButton><Album /></IconButton>}
        iconElementRight={<Link to="posts/new"><FlatButton label="New Post" labelStyle={{color:"white"}}/></Link>}
        />
        {this.props.children}
        </div>
      );
    }else{
      return(
        <div>
        <AppBar
        title={<span style={styles.title}>{this.props.title}</span>}
        iconElementLeft={<IconButton onTouchTap={()=>{this.historyBack()}}><NavigateBefore /></IconButton>}
        />
        {this.props.children}
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return{
    title:state.title.title
  }
}
export default connect(mapStateToProps)(App);
