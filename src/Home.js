import { useState, useEffect } from "react";

const Home = () => {

    const [profiles, setProfiles] = useState(null);

    useEffect(() =>{

        fetch("http://localhost:8000/profiles")

            .then(res => {
                return res.json();
            }) 

            .then(data => {
                setProfiles(data);
                console.log(profiles);
            })
    }, [])

    return (
        <div className="home">
            {profiles && profiles.map((profile) => (
                <div className="profile" key={profile.id}>
                    <h2>{profile.platform}</h2>
                    <div className="sections">
                        <p>Followers: {profile.followers}{profile.followersOption}</p>
                        <p>Views: {profile.views}{profile.viewsOption}</p>
                        <p>Engagement Rate: {profile.engagementRate}%</p>
                    </div>
                    <section className="pie" style={{"--men": profile.viewerMen, "--women": profile.viewerWomen}}>
                        <section className="pie-key">
                            <p>Men: {profile.viewerMen}%</p>
                            <p>Women: {profile.viewerWomen}%</p>
                        </section>
                    </section>
                </div>
            ))}
        </div>
    );
}
 
export default Home;