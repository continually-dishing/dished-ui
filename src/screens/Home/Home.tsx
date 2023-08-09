import React from "react";
import './Home.css';
import SearchBar from "../../components/SearchBar/SearchBar";
function Home() {



    return (
        <>
            <SearchBar />
            <div className="text-container">
                <h2 className="home-heading">Prep Preserve Propose</h2>
            </div>



        </>
    );
}
export default Home;