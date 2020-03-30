import React from 'react';

const Header = React.memo(({ handleFilter }) => {
    const [state, setState] = React.useState({
        search: '',
        hdEnabled: false,
        oneWayEnabled: false
    })

    const handleChange = (e) => {
        let data = {}
        if (e.target.name === "search") {
            data = {
                ...state,
                [e.target.name]: e.target.value
            }
        } else {
            data = {
                ...state,
                [e.target.name]: e.target.checked
            }
        }
        setState(data)
        handleFilter(data)
    }

    return (
        <div className="header">
            <div className="textBox">
                <input className="input_text" type="text" placeholder="Search City" name="search" value={state.name} onChange={handleChange} />
            </div>
            <div className="checkBox">
                <label className="label" htmlFor="hdEnabled">HD ENABLED</label><br></br>
                <input type="checkbox" name="hdEnabled" id="hdEnabled" value={state.hdEnabled} onChange={handleChange} />
            </div>
            <div className="checkBox">
                <label className="label" htmlFor="oneWayEnabled">ONE WAY ENABLED</label><br></br>
                <input type="checkbox" name="oneWayEnabled" id="oneWayEnabled" value={state.oneWayEnabled} onChange={handleChange} />
            </div>
        </div>
    )
})

export default Header;