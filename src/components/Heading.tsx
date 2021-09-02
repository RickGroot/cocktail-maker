const Header = ({subText, title, color}) => {
    return (
        <header style={{backgroundColor: color}}>
            <p className="subText">{ subText }</p>
            <h1>{ title }</h1>
        </header>
    );
}

export default Header;