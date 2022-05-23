import { useLocale } from "../../../hooks/useLocale"
import { useForm } from "react-hook-form";
import React, { useCallback, useState } from "react"
import { InviteState } from './type'
import { Service } from '../../../service'

interface IInvitingRequest {
    fullName: string,
    email: string,
    confirmEmail: string,
}

export const Inviting = (props: {
    setState: any
}) => {
    const { register, formState: { errors, isSubmitting }, handleSubmit, watch } = useForm<IInvitingRequest>()
    const locale = useLocale()
    const { setState } = props
    const email = watch('email')
    const [requestErrorInfo, setRequestErrorInfo] = useState('')


    const onSubmit = useCallback((data: any) => {
        setRequestErrorInfo('')
        return Service.request(data).then(res => {
            console.log(data, res)
            setState(InviteState.SUCCESS)
        }).catch(error => {
            setRequestErrorInfo(error.message)
        })
    }, [])

    return <form
        className="reqeust-form"
        onSubmit={handleSubmit(onSubmit)}
    >
        <div className="form-item form-decorator">
                <input {...register('fullName', { required: true })} placeholder={locale.fullName as string} />
                <p className="form-error-info">{errors.fullName?.type === 'required' ? 'required': ''} </p>
            </div>
        <div  className="form-item form-decorator">
            <input {...register('email', { 
                required: true,
                pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/
            })} type="email" placeholder={locale.email as string} />
            <p className="form-error-info">{errors.email?.type === 'required' ? 'required': ''} </p>
        </div>
        <div  className="form-item form-decorator">
            <input {...register('confirmEmail', { 
                required: true,
                validate: {
                    isSame: (value: string) => {
                        return value === email
                    }
                }
            })} placeholder={locale.confirmEmail as string} />
            <p className="form-error-info">{errors.confirmEmail?.type === 'required' ? 'required': ''} </p>
            <p className="form-error-info">{errors.confirmEmail?.type == 'isSame' ? locale.confirmEmailAlert : ''}</p>
        </div>

        <div className="form-item form-decorator">
            <button className={`dialog-button ${isSubmitting ? 'loading': ''}`} type="submit">{isSubmitting ? locale.loading : locale.send}</button>
        </div>

        <p className="form-error-info">{requestErrorInfo}</p>
    </form>
}

export const InviteDialogTitle = () => {
    const { dialogTitleInviting } = useLocale()

    return <>{dialogTitleInviting}</>
}