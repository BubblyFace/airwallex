import { useLocale } from "../../hooks/useLocale"
import React from "react"
import { InviteButton } from "./Invite"
import './index.scss'


const IntroLine = (props: { text: string }) => {
    const { text } = props
    return <p className="main-intro">{text}</p>
}

const SubIntroLine = (props: { text: string }) => {
    const { text } = props
    return <p className="sub-intro">{text}</p>
}

export const Content = () => {
    const { mainIntro, subIntro } = useLocale()
    return <div className="content-container">
        <div className="main-intro-container intro-container">
            {(mainIntro instanceof Array) ? mainIntro.map((line, index) => <IntroLine key={`main-intro-${index}`} text={line}></IntroLine>) : <IntroLine text={mainIntro}></IntroLine>}
        </div>
        <div className="sub-intro-container intro-container">
            {(subIntro instanceof Array) ? subIntro.map((line, index) => <SubIntroLine key={`sub-intro-${index}`} text={line}></SubIntroLine>) : <SubIntroLine text={subIntro}></SubIntroLine>}
        </div>
        <InviteButton></InviteButton>
    </div>
}