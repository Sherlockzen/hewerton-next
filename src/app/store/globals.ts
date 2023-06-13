import { create } from 'zustand'
import React from 'react'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

interface ThemeState {
    theme: boolean,
    changeTheme: () => void
}

export const useDarkTheme = create<ThemeState>()(
    // devtools(
    //     )
        persist((set) => ({
            theme: true,
            changeTheme: () => set((state) => ({ theme: !state.theme})),
        }),
        {
            name: 'theme-storage'
        }
        )
)

// export const useDarkTheme = create<ThemeState>((set) => ({
//     theme: true,
//     changeTheme: () => set((state) => ({ theme: !state.theme })),
// }))