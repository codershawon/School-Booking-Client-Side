import React from 'react';
import AllColleges from '../AllColleges/AllColleges';
import Gallery from '../Gallery/Gallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <AllColleges/>
            <Gallery/>
            <ResearchPaper/>
            <Reviews/>
        </div>
    );
};

export default Home;