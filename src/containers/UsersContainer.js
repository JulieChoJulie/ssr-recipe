import React, { useEffect } from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { getUsers } from '../modules/users';
import { Preloader } from '../lib/PreloadContext';

const UsersContainer = ({ users, getUsers }) => {
    // invoke after the component is mounted.
    useEffect(() => {
        if (users) return; // if users is valid, no getUsers request
        getUsers();
    }, [users, getUsers]);
    //important not re-request the existing information repetitively after ssr

    return (
        <>
            <Users users={users} />
            <Preloader resolve={getUsers} />
        </>

    );
};

export default connect(
    state => ({
        users: state.users.users
    }),
    {
        getUsers
    }
)(UsersContainer);