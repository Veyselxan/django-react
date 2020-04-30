import React, {Component, Fragment} from 'react';
import { withAlert } from 'react-alert'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        mesaj: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {

         const {error,alert , mesaj} = this.props

         if (error !== prevProps.error) {
              if (error.msg.title) alert.error(`Title : ${error.msg.title.join()}`);
              if (error.msg.description) alert.error(`description: ${error.msg.description.join()}`);
              if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
              if (error.msg.username) alert.error(error.msg.username.join());

            }
        if (mesaj !== prevProps.mesaj){
            if (mesaj.Blogdelete){
                alert.success(mesaj.Blogdelete)
            }
             if (mesaj.LOGINSUCCESS){
                alert.success(mesaj.LOGINSUCCESS)
            }
             if (mesaj.BlogAdd){
                alert.success(mesaj.BlogAdd)
            }
                 if (mesaj.passwordNotMatch){
                alert.error(mesaj.passwordNotMatch)
            }
        }

    }
    componentDidMount() {
    }

    render() {
        return (
           <Fragment/>
        );
    }
}
const mapStateToProps = state => ({
    error:state.errors,
    mesaj: state.mesaj
})
export default connect(mapStateToProps)(withAlert()(Alerts));