export type CONTEXT_PROPS = {
    modalContactInfos: boolean;
    setModalContactInfos: React.Dispatch<React.SetStateAction<boolean>>
    handleOutSideClick: ( event: React.MouseEvent ) => void
}