import React from 'react'
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client"

function login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image 
            src='https://www.technipages.com/wp-content/uploads/2019/08/Google-Docs-Header.jpg'
            height="300"
            width="550"
            objectFit="contain"
            />
            <Button 
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
            >Login</Button>
        </div>
    )
}

export default login
