import React, { useContext } from "react"
import { useLocale } from "../../hooks/useLocale"
import './index.scss'

export const Header = () => {
    const { title } = useLocale()
    return <header className="header-container">
        <div className="header-title-content">{title}</div>
    </header>
}