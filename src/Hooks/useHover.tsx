import { useRef, useState, useEffect } from 'react'

export default function useHover () {
    const [value, setValue] = useState<any>(false)

    const ref = useRef<HTMLElement>(null)

    const handleMouseOver = ()=>setValue(true)
    const handleMouseOut = ()=>setValue(false)
    
    useEffect(
        () => {

        if (!ref.current) {
            return
        }
        const node: any = ref.current

            node.addEventListener("mouseover", handleMouseOver)
            node.addEventListener("mouseout", handleMouseOut)
        return () => {
            node.removeEventListener("mouseover", handleMouseOver)
            node.removeEventListener("mouseout", handleMouseOut) 
        }
    }, [ref.current])

    return [ref, value]
}