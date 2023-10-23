"use client";
//import { HomePageData } from "/interfaces/Homepage";
import LayoutMain from "../layouts/LayoutMain";
import UserList from "../components/UserList/UserList";

const Homepage: React.FC = () => {
    return (
        <LayoutMain>
            <UserList />
        </LayoutMain>
    );
};

export default Homepage;
