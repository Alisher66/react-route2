import {Outlet, NavLink} from 'react-router-dom';


function Layout() {

    return (
        <>
            <header>
                <NavLink to='/login'>Login </NavLink>
                <NavLink to='/register'>Register </NavLink>
            </header>
            <Outlet />
            
            <footer>Footer div</footer>
        </>
    )
}

export default Layout;