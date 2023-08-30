import React from "react"
import { CONTEXT_PROPS } from '@/Types';


const DataContext = React.createContext<CONTEXT_PROPS | null>( null );


const DataContextProvider = ( { children }: React.PropsWithChildren ) => {

    const [modalContactInfos, setModalContactInfos] = React.useState( false )
    const [modalMobileMenu, setModalMobileMenu] = React.useState( false )

    const handleOutSideClick = ( event: React.MouseEvent ) => {
        if ( event.target === event.currentTarget ) setModalContactInfos( false );
    };

    return (
        <DataContext.Provider value={{
            modalContactInfos, setModalContactInfos,
            handleOutSideClick,
            modalMobileMenu, setModalMobileMenu
        }}>
            {children}
        </DataContext.Provider >
    )

}

const useData = () => {
    const context = React.useContext( DataContext );
    if ( !context ) throw new Error( "UseData precisa estar dentro de um provider" );
    return context;
}


export { DataContextProvider, useData }