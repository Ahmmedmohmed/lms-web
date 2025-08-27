/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function UserDataStore() {
    // Retrieve the access token and refresh token from browser cookies
    let userdata = Cookies.get("userData");
    let userprofile = Cookies.get("userProfile");
    let access_token = Cookies.get("access_token");
    let refresh_token = Cookies.get("refresh_token");

    if (userdata && refresh_token) {
        const token = refresh_token;
        const decoded = jwtDecode(token);

        // Extract the user's unique identifier (user_id) from the decoded token
        // Return the decoded user data, which may include user information
        // return datauser;
        let userData = JSON.parse(userdata);
        let userProfile = JSON.parse(userprofile);
        return { userData, userProfile, decoded };
    } else {
        return {};
    }
}

export default UserDataStore;
