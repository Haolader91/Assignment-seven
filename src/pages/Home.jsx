import React from "react";
import Banner from "../components/Banner";
import SummaryCard from "../components/SummaryCard";
import FriendsCard from "../components/FriendsCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <SummaryCard />
      <FriendsCard />
    </div>
  );
};

export default Home;
