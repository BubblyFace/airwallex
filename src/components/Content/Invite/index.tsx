import { useLocale } from "../../../hooks/useLocale"
import React from "react"

export const InviteButton = () => {
    const { requestButtonText } = useLocale()
    return <button className="request-button" onClick={() => {
        console.log('===> show dialog')
    }}>{requestButtonText}</button>
}