import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderMiddle from './HeaderMiddle';

function Header() {
    return (
        <div className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white w-auto'>
            <HeaderLeft />
            <HeaderMiddle />
            <HeaderRight />

        </div>
    )
};

export default Header;
