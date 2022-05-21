import React, { useContext } from "react"
import { useLocale } from "../../hooks/useLocale"

export const Header = () => {
    const { title } = useLocale()
    return <header>
        <div className="header-title-content">{title}</div>
    </header>
}