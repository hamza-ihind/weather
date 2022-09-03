import Search from "../search/search.component"

import './navigation.styles.scss'

const Navigation = ({ onSChange }) => {

    return (
        <div className="navigation">
            <div>hamza</div>
            <div className="location">location</div>
            <Search onSearchChange={onSChange} />
        </div>
    )
}

export default Navigation