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

    const history = useHistory();

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
            <form className="profileForm" onSubmit={addProfile}>
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