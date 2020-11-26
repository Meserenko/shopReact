import {connect} from "react-redux";
import Nav from "../components/Nav/Nav";


const mapStateToProps = (state)=>{

    return{
        count: state.cart.length
    }

}

export default connect(mapStateToProps)(Nav)