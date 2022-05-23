import { useLocale } from "../../hooks/useLocale"
import React from "react"
import './index.scss'

export const Footer = () => {
    const { license, footerDesc } = useLocale()
    return <footer className="footer-container">
        <div className="footer-desc">{footerDesc}</div>
        <div className="license">{license}</div>
    </footer>
}