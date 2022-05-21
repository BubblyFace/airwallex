import { locale } from '../locale'
import { useMemo } from 'react'

export const useLocale = (): {[key: string]: string | string[]} => {
    return useMemo(() => locale['EN'], [])
}