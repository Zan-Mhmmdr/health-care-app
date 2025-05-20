import { useSession } from "next-auth/react";

const Profile = () => {
    const { session: data } = useSession()
    console.log(data)

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome to the profile page!</p>
        </div>
    );
}

export default Profile;