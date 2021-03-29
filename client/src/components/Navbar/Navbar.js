import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import decode from 'jwt-decode';
import './Navbar.css';

import memories from '../Images/memories.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/auth';

function Navbar(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()
    
    const logout = () => {
        dispatch(logoutUser())
        history.push('/');

        setUser(null);
    }

    useEffect(()=> {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className="navbar" position="static" color="inherit">
            {/* <Typography className="app__appbarHeading" align="center" variant="h2">Memories</Typography> */}
            <div className="navbar__logocontainer">
                {/* <MoreHorizIcon /> */}
                <Link to="/"> <img className="navbar__appbarLogo" src={memories} alt="memories" /> </Link>
                {/* <MoreHorizIcon /> */}
            </div>
            <Toolbar className="navbar__toolbar">
                {
                    user ? (
                        <div className="navbar__toolbarProfile">
                            <Avatar className="navbar__avatar" alt={user.result.name} src={user.result.imageUrl}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <Typography className="navbar__username" variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className="navbar__logout" color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Link to="/auth"><Button variant="contained" className="navbar__signin" color="primary">Sign in</Button></Link>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;