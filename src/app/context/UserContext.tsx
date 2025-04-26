"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { createClient } from "../../../utils/supabase/client";

interface UserContextType {
    user: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<any>(null);

    useEffect (() => {
        const fetchUser = async () => {
            const supabase = await createClient();
            const { data : { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser;
    }, []);

    
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
};