'use client'

import { useSession } from "next-auth/react";

const Profile = () => {
    const { data: session } = useSession()
    console.log(session)

    return (
        <div>
            <h1>Profile</h1>
            <h2>{session?.user?.name}</h2>
            <p>Welcome to the profile page!</p>
        </div>
    );
}

export default Profile;