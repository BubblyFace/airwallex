import React, { useContext } from "react"
import { useLocale } from "../../../hooks/useLocale"
import { InviteContext } from './context'

export const InviteSuccessTitle = () => {
    const { dialogTitleInvited } = useLocale()

    return <>{dialogTitleInvited}</>
}

export const InviteSuccessContent = () => {
    const {
        dialogContentInvited,
        ok
    } = useLocale()

    const { close } = useContext(InviteContext)

    return <div className="request-success-content">{
        (dialogContentInvited instanceof Array) ? dialogContentInvited.map((item, index) => <p key={`dialogContentInvited-${index}`}>{item}</p>) : <p>{dialogContentInvited}</p>
    }
        <button className={`dialog-button`} onClick={() => {
            close()
        }}>{ok}</button>
    </div>
}


