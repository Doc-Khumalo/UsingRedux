import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import './user.css';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component {

    renderList() {
        return (
        <div>
            <table className="table table-bordered table-hover table-fixed">
                <thead className="thead-default">
                    <tr>
                        <th>Name</th>
                        <th className="second-child">Time</th>
                        <th className="third-child">Covers</th>
                        <th>Seated</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.bookings.map((user, i) => {
                        return (
                            <tr key={i} className="custom-row" onClick={() => this.props.selectUser(user)}>
                                <td>{user.title} {user.firstName} {user.lastName}</td>
                                <td>{user.time}</td>
                                <td>{user.partySize}</td>
                                <td>{user.seated == true ? 'Y' : 'N'} </td>
                            </tr>
                        );
                        })
                    }
                </tbody>
            </table>
        </div>
        );
    }

    render() {
        return (
            <div>
                <div className="custom-header-table">Booking for {this.props.users.date} </div>
                {this.renderList()}
            </div>
        );
    }

}

// Get apps state and pass it as props to UserList
// UserList automatically re-renders whenever state changes
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

//UserList is now aware of state and actions (smart Container)
export default connect(mapStateToProps, matchDispatchToProps)(UserList);