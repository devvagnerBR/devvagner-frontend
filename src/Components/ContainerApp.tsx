import React from 'react'

export const ContainerApp = ( { children }: React.PropsWithChildren ) => {



    return (
        <div className='flex flex-col w-screen shadow-sm h-screen m-auto max-w-[960px] items-center mt- justify-start'>
            {children}
        </div>
    )
}
