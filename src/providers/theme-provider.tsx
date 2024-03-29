"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
    return (
        <NextThemeProvider
            defaultTheme="light"
            storageKey="moobie_theme_storage"
            enableSystem
            attribute="class"
            disableTransitionOnChange
          >
            {children}
          </NextThemeProvider>
    )
}

export default ThemeProvider;