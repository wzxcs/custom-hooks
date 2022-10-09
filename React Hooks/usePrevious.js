import React, { useRef, useEffect } from "react"

// usePrevious allows you to get the value of a state before it updated
function usePrevious(value) {
    const oldValue = useRef()
    useEffect(() => {
        oldValue.current = value
    }, [value])
    return oldValue.current
}

function useMyCustomHook() {
    const [state, setState] = useState(0)
    const previousState = usePrevious(state)
    // ...
    setState(1) // state=1,previousState=0
    setState(2) // state=2,previousState=1
}
