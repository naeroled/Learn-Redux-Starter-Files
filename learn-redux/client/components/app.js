import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import actions
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

//create app component. Surfaces data and functions via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;