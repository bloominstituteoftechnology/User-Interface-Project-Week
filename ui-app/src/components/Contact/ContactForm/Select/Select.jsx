import React from 'react';

const Select = (props) => {
    const options = props.options.map(option => (
        <option key={option.text} value={option.value}>{option.text}</option>
    ))

        return (
            <select name="buildings" id="buildings">
				{options}
			</select>
        )
}

export default Select;