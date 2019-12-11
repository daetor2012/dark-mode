import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode(key, initialValue) {
    const [randomValue, setRandomValue] = useLocalStorage(key, initialValue);
    useEffect(() => {
        if(randomValue === true) {
            let DOM = document.querySelector('body');
            DOM.classList.add("dark-mode");
        }
        else {
            let DOM = document.querySelector('body');
            DOM.classList.remove("dark-mode");
        }
    }, [randomValue])

    return [randomValue, setRandomValue];
}

export default useDarkMode;