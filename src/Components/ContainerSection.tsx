import React from 'react'

export const ContainerSection = ( { children, id }: { children: React.ReactNode, id?: string } ) => {
    return (
        <div id={id} className='w-full border bg-secondary-50 max-lg:border-none  px-4 py-4' >
            {children}
        </div>
    )
}
