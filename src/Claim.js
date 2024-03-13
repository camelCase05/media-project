import { useState } from "react";
import { useHistory } from "react-router-dom";

const Claim = () => {

    const [platform, setPlatform] = useState(null);
    const [followers, setFollowers] = useState(null);
    const [followersOption, setFollowersOption] = useState(null);
    const [views, setViews] = useState(null);
    const [viewsOption, setViewsOption] = useState(null);
    const [engagementRate, setEngagementRate] = useState(null);
    const [viewerMen, setViewerMen] = useState(null);
    const [viewerWomen, setViewerWomen] = useState(null);

    const [name, setName] = useState("User");

    const history = useHistory();

    const changeName = (e) => {
        e.preventDefault();

        fetch("http://localhost:8000/personName", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"personName": name})
        })
            .then(() => {
                history.push("/");
            })
    }

    const addProfile = (e) => {
        e.preventDefault();

        const profile = {
            platform,
            followers,
            followersOption,
            views,
            viewsOption,
            engagementRate,
            viewerMen,
            viewerWomen
        }

        fetch("http://localhost:8000/profiles", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(profile)
        })
            .then(() => {
                history.push("/");
            })
    }

    return (
        <div className="claim">

            <form className="nameChange" onSubmit={changeName}>
                <h2>Change Name Form</h2>

                <label>Enter Name: </label>
                <input 
                type="text" 
                placeholder="Enter new name..."
                onChange={(e) => {setName(e.target.value)}}
                />
                <button>Change Name</button>
            </form>
            
            <form className="profileForm" onSubmit={addProfile}>
                <h2>Add Platform Form</h2>

                <label>Profile Platform: </label>
                <input
                placeholder="Enter profile platform..."
                required
                onChange={(e) => setPlatform(e.target.value)}
                />

                <label>Followers: </label>
                <input
                type="number"
                placeholder="Enter number of followers..."
                required
                onChange={(e) => setFollowers(e.target.value)}
                />
                <select
                onChange={(e) => setFollowersOption(e.target.value)}
                >
                    <option value=" "> </option>
                    <option value="K">K</option>
                    <option value="M">M</option>
                    <option value="B">B</option>
                </select>

                <label>Views: </label>
                <input
                type="number"
                placeholder="Enter number of views..."
                required
                onChange={(e) => setViews(e.target.value)}
                />
                <select
                onChange={(e) => setViewsOption(e.target.value)}
                >
                    <option value=" "> </option>
                    <option value="K">K</option>
                    <option value="M">M</option>
                    <option value="B">B</option>
                </select>

                <label>Engagment Rate: </label>
                <input
                type="number"
                placeholder="Enter engagment rate..."
                required
                onChange={(e) => setEngagementRate(e.target.value)}
                />

                <label>Percent Men Viewers: </label>
                <input
                type="number"
                placeholder="Enter percent men..."
                required
                onChange={(e) => setViewerMen(e.target.value)}
                />

                <label>Percent Women Viewers: </label>
                <input
                type="number"
                placeholder="Enter percent women..."
                required
                onChange={(e) => setViewerWomen(e.target.value)}
                />

                <button>Add Platform</button>

            </form>
        </div>
    );
}
 
export default Claim;