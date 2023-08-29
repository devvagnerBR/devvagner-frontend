import React from 'react'

export const ContainerApp = ( { children }: React.PropsWithChildren ) => {

    return (
        <div className='flex flex-col relative gap-4  max-lg:gap-0  shadow-sm  m-auto max-w-[960px] items-center justify-start'>
            {children}
        </div>
    )
}
