import React, {Component}from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render() {
        /*
        *  because the state is set to null by default
        * */
        if (!this.props.user) {
            return (
                <div className="custom-header-table">Select a booking...</div>
            );
        }

        return (
            <div>
                <p className="custom-header-table">Booking update</p>
                <div className="info-section">
                    <p className="custom-header">Name</p>
                    <p> {this.props.user.title} {this.props.user.firstName} {this.props.user.lastName}</p>
                    <p className="custom-header">Time</p>
                    <p>{this.props.user.time}</p>
                    <p className="custom-header">Covers</p>
                    <p>{this.props.user.partySize}</p>
                    <p className="custom-header">Seated</p>
                    {/* Radio buttons are a placeholder for now, functionality added to them just yet*/}
                    <form>
                        <input type="radio" name="option" value="yes"/>Yes
                        <input type="radio" name="option" value="no"/>No
                        <input type="radio" name="option" value="cancelled"/>Cancelled
                    </form>
                    <p>{this.props.user.seated}</p>
                    <p className="custom-header">Notes</p>
                    <p>{this.props.user.notes}</p>
                </div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);