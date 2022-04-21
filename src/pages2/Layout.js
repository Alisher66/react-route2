import {Outlet, Link, useLocation} from 'react-router-dom';
import Breadcrumb from './Breadcrumb';



function Layout() {
    let location = useLocation();
    return (
        <> 
            <header>
                <ul>
                    <li><Link to='/'>home </Link></li>
                    <li><Link to='/users'>Users </Link>
                        <ul>
                            <li><Link to='/users/alex'>Alex</Link>
                                <ul>
                                    <Link to='/users/alex/dima'>Dima</Link>
                                </ul>
                            </li>
                            <li><Link to='/users/ben'>Ben</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
            <main>
                <Outlet />
                <h5>path => {location.pathname}</h5>
            </main>
            
            <div><Breadcrumb /></div>
        </>
    )
}

export default Layout;