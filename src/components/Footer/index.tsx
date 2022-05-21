import { useLocale } from "../../hooks/useLocale"
import React from "react"

export const Footer = () => {
    const { license, footerDesc } = useLocale()
    return <footer>
        <div className="footer-desc">{footerDesc}</div>
        <div className="license">{license}</div>
    </footer>
}