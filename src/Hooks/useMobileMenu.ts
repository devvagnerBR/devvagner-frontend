import { useData } from '@/Context'

export const useMobileMenu = () => {

    const { setModalMobileMenu } = useData()

    const handleCloseModal = () => {
        setModalMobileMenu( false )
    }


    return { handleCloseModal }
}
