import React from "react"
import { useLocale } from "../../../hooks/useLocale"

export const InviteSuccessTitle = () => {
    const { dialogTitleInvited } = useLocale()

    return <>{dialogTitleInvited}</>
}

export const InviteSuccessContent = (props: { close: any }) => {
    const { 
        dialogContentInvited,
        ok
    } = useLocale()

    return <div className="request-success-content">{
        (dialogContentInvited instanceof Array) ? dialogContentInvited.map((item, index) => <p key={`dialogContentInvited-${index}`}>{item}</p>) : <p>{dialogContentInvited}</p>   
    }
    <button className={`dialog-button`}  onClick={() => {
        props.close()
    }}>{ok}</button>
    </div>
}


