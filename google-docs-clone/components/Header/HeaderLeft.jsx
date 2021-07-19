import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function HeaderLeft() {
    return (
        <div className='flex flex-inline items-center '>
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-20 w-20 border-0"
            >
                <Icon name="menu" size="3x1" />
            </Button>
            <Icon 
                name='description' 
                size='5x1'
                color='blue'
            />
            <h1 className='ml-2 text-gray-700 text-2x1'>
                Docs
            </h1>
        </div>
    )
}

export default HeaderLeft;