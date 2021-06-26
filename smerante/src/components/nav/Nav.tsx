import { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";
import classnames from 'classnames';

interface NavComponentProps {

}

const NavComponent: FunctionComponent<NavComponentProps> = (props) => {
    const [scrollDown, setScrollDown] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [currentScrollOffset, setCurrentScrollOffset] = useState(0);
    const breakpointSize = 768;

    const classes = classnames('sam-navbar',
        { 'scrolled': scrollDown });

    useEffect(() => {
        window.onscroll = () => {
            const limit = document.body.offsetHeight - window.innerHeight;
            if (window.pageYOffset > 0 && Math.abs(window.pageYOffset) < Math.abs(limit)) {
                setScrollDown(!toggle && currentScrollOffset < window.pageYOffset ? true : false);
                setCurrentScrollOffset(window.pageYOffset);
            }
        }
    })

    const openNav = () => {
        if (window.innerWidth <= breakpointSize) {
            setToggle(!toggle);
        }
        // this.router.events.subscribe((evt) => {
        //     if (evt instanceof NavigationEnd) {
        //         window.scrollTo(0, 0)
        //     }
        // });
    }
    return (
        // [ngClass] = "{'scrolled': scrollDown}" 
        <div className="sam-navbar-wrapper">
            scrollDown: {scrollDown ? 'true' : 'fakse'}
            <nav className={classes} >
                <div className="sam-navbar__brand">
                    <ul id="home" className="sam-navbar__menu--items">
                        <li className="sam-navbar__menu--item">
                            <Link to="/home" className="sam-navbar__brand--link">
                                <span className="sam-navbar__brand--link-label">Sam Merante</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="sam-navbar__toggle-menu" type="button" onClick={openNav}
                    data-toggle={"collapse"} data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="sam-navbar__toggle-menu--chevron"></span>
                </button >
                <div className={classnames("sam-navbar__menu", { 'expanded': toggle })} >
                    <ul className="sam-navbar__menu--items">
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/home" onClick={openNav} className="sam-navbar--link">Home</Link>
                        </li>
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/cv" onClick={openNav} className="sam-navbar--link">CV</Link>
                        </li >
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/projects" onClick={openNav} className="sam-navbar--link">Projects</Link>
                        </li >
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/code" onClick={openNav} className="sam-navbar--link">Code</Link>
                        </li >
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/components" onClick={openNav}
                                className="sam-navbar--link">Components</Link>
                        </li >
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/game" onClick={openNav} className="sam-navbar--link">Game</Link>
                        </li >
                        <li className="sam-navbar__menu--item nav">
                            <Link to="/forum" onClick={openNav} className="sam-navbar--link">Forum</Link>
                        </li >
                    </ul >
                </div >
            </nav >
        </div >
    )
}

export default NavComponent;