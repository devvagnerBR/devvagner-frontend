import React from 'react'

export const ContainerSection = ( { children }: React.PropsWithChildren ) => {
    return (
        <div className='w-full border bg-secondary-50  rounded-sm px-4 py-8' >
            {children}
        </div>
    )
}
