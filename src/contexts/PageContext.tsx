import { createContext, ReactNode, useState } from "react";

interface PageContextData {
    name: string,
    updatePage: () => void,
}

interface PageProviderProps {
    children: ReactNode;
    newPage: string
}

export const PageContext = createContext({} as PageContextData)

export function PageProvider({ children, newPage }: PageProviderProps) {
    const [name, setName] = useState('home');

    function updatePage() {
        setName(newPage);
    }

    return (
        <PageContext.Provider value={{
            name,
            updatePage
        }}>
            {children}
        </PageContext.Provider>
    );
}