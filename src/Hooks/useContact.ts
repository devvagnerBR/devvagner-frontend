import React from "react"
import emailjs from "@emailjs/browser"

const initialValues = {
    name: '',
    email: '',
    message: ''
}

export const useContact = () => {

    const [formValues, SetFormValues] = React.useState( initialValues )
    const [loading, setLoading] = React.useState( false )

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = event.target;
        SetFormValues( { ...formValues, [name]: value } )
    };


    const sendEmail = async ( body: { name: string; email: string; message: string } ) => {

        const { name, email, message } = body

        if ( !name || !email || !message ) {
            alert( "Preencha todos os campos" )
            return;
        }

        const templateParams = {
            from_name: formValues.name,
            from_email: formValues.email,
            message: formValues.message,
        }

        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY );

        SetFormValues( initialValues );

    }

    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        setLoading( true )
        event.preventDefault();
        setTimeout( () => {
            sendEmail( formValues );
            setLoading( false )
        }, 2000 )
    }

    return {
        formValues,
        SetFormValues,
        handleChange,
        handleSubmit,
        loading
    }

}