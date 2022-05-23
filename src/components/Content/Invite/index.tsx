import { useLocale } from "../../../hooks/useLocale"
import React, { useCallback, useState } from "react"

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { InviteDialogTitle, Inviting } from './inviting'
import { InviteSuccessContent, InviteSuccessTitle } from './invitingSuccess'

import { IInvitingRequestFormProps, InviteState } from './type'

const InvitingRequestForm = (props: IInvitingRequestFormProps) => {
    const { open, onClose } = props

    const [state, setState] = useState<InviteState>(InviteState.INVITING)

    const close = () => {
        onClose();
        let st = setTimeout(() => {
            setState(InviteState.INVITING);
            clearTimeout(st);
        }, 100);
    };

    const InviteStateMap = {
        [InviteState.INVITING]: {
            title: <InviteDialogTitle />,
            comp: <Inviting setState={setState} />
        },
        [InviteState.SUCCESS]:
        {
            title: <InviteSuccessTitle />,
            comp: <InviteSuccessContent close={close}/>
        }
    }
    const inviteStateComps = InviteStateMap[state]

    if (!inviteStateComps) {
        return null
    }

    return <Dialog
        open={open}
        onClose={close}
        className="invite-dialog"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle className="alert-dialog-title">
            {inviteStateComps.title}
        </DialogTitle>
        <DialogContent>
            {inviteStateComps.comp}
        </DialogContent>
    </Dialog>
}


export const InviteButton = () => {
    const { requestButtonText } = useLocale()
    const [dialogOpen, setDialogOpen] = useState<boolean>(false)
    const handleClose = useCallback(() => { setDialogOpen(false) }, [setDialogOpen])
    const handleOpen = useCallback(() => { setDialogOpen(true) }, [setDialogOpen])

    return <>
        <button className="request-button main-button button" onClick={handleOpen}>{requestButtonText}</button>
        <InvitingRequestForm
            open={dialogOpen}
            onClose={handleClose}
        ></InvitingRequestForm>
    </>
}
