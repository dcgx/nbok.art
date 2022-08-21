import { createContext, useState } from "react"

type IsLogged = {
    profile: string,
    setProfileId: (profileId: string) => void,
}

interface Props {
    children: JSX.Element | JSX.Element[],
}

const initialState = {
    profileId: "",
}

export const AuthContext = createContext<IsLogged>({} as IsLogged)

export const AuthProvider = ({children}: Props) => {
    const [profileId, setProfileId] = useState(initialState.profileId)

    return (
        <AuthContext.Provider value={{profile: profileId, setProfileId}}>
            {children}
        </AuthContext.Provider>
    )
}