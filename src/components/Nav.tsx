const Nav = ({color}) => {
    return (
        <nav style={{backgroundColor: color}}>
            <a href="/"><img src="../icons/test_icon.png" alt="Discover"/></a>
            <a href="/search"><img src="../icons/test_icon.png" alt="Search"/></a>
            <a href="/liked"><img src="../icons/test_icon.png" alt="Liked drinks"/></a>
        </nav>
    );
}

export default Nav;