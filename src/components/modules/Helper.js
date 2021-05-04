import {useState, useEffect} from 'react';

export const useDetectClick = (eventlistener, initialState) =>{
    const [isActive,setIsActive] = useState(initialState);

    useEffect(()=>{
        const pageClickEvent=(event)=>{
            if(eventlistener.current !==null) {
                setIsActive(!isActive)
            }
        };
        if(isActive){
            window.addEventListener('click',pageClickEvent);
        }
        return () =>{
            window.removeEventListener('click', pageClickEvent)
        }
    },[isActive,eventlistener])
    return [isActive,setIsActive]
}