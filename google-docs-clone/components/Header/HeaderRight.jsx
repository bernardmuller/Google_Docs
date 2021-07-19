import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function HeaderRight() {
    return (
        <div className='flex flex-inline items-center '>
            <Button 
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='ml-5 md:ml-20 h-20 w-20 border-0'>
                
                <Icon name='apps' size='3x1' color='gray' />

            </Button>

            <img
                loading='lazy'
                // onClick={signOut}
                className='cursor-pointer h-12 w-12 rounded-full ml-2'
                src='https://avatars.githubusercontent.com/u/61446115?v=4'
                alt=''
            />
        </div>
    )
}

export default HeaderRight
