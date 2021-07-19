import React from 'react'
import Icon from "@material-tailwind/react/Icon";

function HeaderMiddle() {
    return (
        <div>           

            <div className='mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded focus-within:text-gray-600 focus-within:shadow-md'>
                <Icon name='search' size='3x1' color='darkgray' /> 
                <input type="text" placeholder="Search" className='flex-grow px-5 text-sm bg-transparent outline-none' />
            </div>
        </div>
    )
}

export default HeaderMiddle
