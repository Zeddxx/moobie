"use client";

import { useEffect, useState } from "react";

export const useScrollMonitor = (threshold = 10) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > threshold) {
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }
        }

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, [threshold])

    return { isScrolled }
}