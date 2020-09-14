import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to={'/'} className="text-light">
                        <a href="#" className="brand-logo">Logo</a>
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to={'/products/news'}>ADD PRODUCT</Link>
                        </li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}