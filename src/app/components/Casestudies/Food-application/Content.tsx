import React from "react";
import BusinessRequirements from "./BusinessRequirements";
import Overview from "./Overview";
import Scopesection from "./Scopesection";


function Content() {
    

    return (
        <div className="px-6 md:px-28 mt-18">
            <div className="flex flex-col gap-20">
                
                <Overview />
                <Scopesection/>
                <BusinessRequirements/>
                

           
           

               
                

                
            </div>
        </div>
    );
}

export default Content;
