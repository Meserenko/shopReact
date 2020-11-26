import { connect } from 'react-redux'
import App from '../App'

const mapStateToProps = (state) => {
    return {
        current: state.currentItem,
    };
};

export default connect(mapStateToProps)(App);