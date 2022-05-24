import React from "react";
import { InviteState } from './type'

export const InviteContext = React.createContext<{
    setInviteState: (state: InviteState) => void,
    close: () => void
}>(null)
