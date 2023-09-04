import PropTypes from 'prop-types'
import Button from './Button'
import React from 'react';

interface HeaderProps {
    title?: string; 
    onAdd: () => void;
    showAdd: boolean;
  }
const Header:React.FC<HeaderProps> = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />

        </header>
    )
}

Header.defaultProps = {
    title: 'This test react app'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;