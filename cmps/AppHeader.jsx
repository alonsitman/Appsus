const { Link, NavLink } = ReactRouterDOM
const { useState } = React

export function AppHeader() {
    const [filterByTxt, setFilterByTxt] = useState('')

    function handleSearchChange(ev) {
        const { value } = ev.target
        setFilterByTxt((filterByTxt) => ({ ...filterByTxt, txt: value}))
    }

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>

        <div className="search-bar">
            <button className="btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>
            <input type="text"
                onChange={handleSearchChange}
                placeholder="Search" />
        </div>

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
