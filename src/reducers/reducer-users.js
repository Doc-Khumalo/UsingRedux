import userData from '../../bookings.json'; //assign variable to the json data and access the data using variable

let UserReducer;

UserReducer = function () {
    return userData;
}

export default UserReducer;