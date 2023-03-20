import React from 'react';
import Navbarhome from "./Navbar";
import "../Styles/foodcertification.css"


import BRCGS from "../assets/img/BRCGS.png"
import plant from "../assets/img/Plantbased.png"
import ISO from "../assets/img/ISO22000.png"
import ROC from "../assets/img/ROC.png"
import GMP from "../assets/img/GMP.png"




function Foodcertification() {
  return (
    <>
     <Navbarhome/>
     <body>

     <main>
        <div className="container">
          <div className="image">
            <img src={BRCGS} alt="Photo 1" />
          </div>
          <div className="text">
            <h2>BRCGS</h2>
            <p>BRCGS specify what is required by organisations as well as help provide assurance to customers that products are safe, legal and of high quality. <br />
              BRCGS is a leading global brand and consumer protection scheme recognised by thousands of customers worldwide. BRCGS' Standards guarantee the standardisation of quality, safety and operational criteria and ensure that manufacturers fulfil their obligations and provide protection for the end consumer. Certification to BRCGS' Standards is often a fundamental requirement of leading retailers, manufacturers and food service organisations. <br />
              The BRCGS’ Standards apply to various sectors within the food and consumer products supply chain and incorporate senior management commitment, risk assessment, hazard analysis, quality management and good manufacturing practices.</p>
          </div>
        </div>
        <div className="container">
          <div className="image">
            <img src={plant} alt="Photo 5" />
          </div>
          <div className="text">
            <h2>PLANT-BASED CERTIFICATION PROGRAM - PBS</h2>
            <p>The global plant-based food market is growing rapidly. Plant-based food products category is growing faster than conventional ones.  The plant-based food category will have a market valuation of almost US$40 billion by 2025 and grow at almost 10% between 2019-2025. <br />
              The Plant-Based Certification Program is applicable at any step of the food industry and it sets requirements for products and byproducts from non-animal origin. The Plant-Based Standard (PBS) has an allowance of 5% for food additives and follows the Global Food Safety Initiative (GSFI), ensuring good practices and avoiding cross-contamination of products. <br />
              The goal of the PBS is to verify the accuracy of Plant-Based claims in the supply chain and final products.</p>
          </div>
        </div>
        <div className="container">
          <div className="image">
            <img src={ISO} alt="Photo 2" />
          </div>
          <div className="text">
            <h2>ISO 22000 - FOOD SAFETY MANAGEMENT SYSTEM</h2>
            <p>ISO 22000 is an internationally recognised standard that combines the ISO9001 approach to food safety management and HACCP for the assurance of food safety at all levels. The standard maps out how an organisation can demonstrate its ability to control safety hazards to ensure that food is safe. <br />
              ISO 22000 can be used by any organisation within the food supply chain. The standard integrates the principles of a Hazard Analysis and Critical Control Point (HACCP) system developed by the Codex Alimentarius Commission. By means of auditable requirements, it combines the HACCP plan with prerequisite programmes as well as other food safety system requirements.</p>
          </div>
        </div>
        <div className="container">
          <div className="image">
            <img src={GMP} alt="Photo 3" />
          </div>
          <div className="text">
            <h2>GMP+/FSA EN GMP+/FRA CERTIFICATION</h2>
            <p>Control Union Certifications offers several feed safety certifications, including GMP+ FSA for Feed Safety Assurance, GMP+ FRA for Feed Responsible Assurance, Good Trading Practices (GTP) and secure feed audits.
              GMP+ FSA is based on ISO quality management requirements with the integration of a Hazard Analysis and Critical Control Plan (HACCP).
              The GMP+ certification scheme defines conditions relating to production facilities as well as for storage, transport, trade and monitoring activities. This approach guarantees control throughout the whole feed chain to produce to the highest standards. </p>
          </div>
        </div>
        <div className="container">
          <div className="image">
            <img src={ROC} alt="Photo 6" />
          </div>
          <div className="text">
            <h2>Section Three</h2>
            <p>Regenerative Organic Certified™ (ROC) is a new certification for food, textiles and personal care ingredients. ROC™ farms and products meet high standards in the world for soil health, animal welfare and farmworker fairness. <br />
              Regenerative Organic Certified ™ is a new, holistic standard raising the bar for how food is produced. ROC uses the USDA NOP Organic standard as a baseline. From there, it adds important criteria and benchmarks that incorporate the major pillars of regenerative organic agriculture into one certification. The goal of ROC is to promote holistic agriculture practices in an all-encompassing certification that:<br />
              1. increases soil organic matter over time and sequesters carbon below and above ground, which could be a tool to mitigate climate change;<br />
              2. improves animal welfare;<br />
              3. provides economic stability and fairness for farmers, ranchers and workers</p>
          </div>
        </div>
      </main>

     </body>

    </>
    
  );
}

export default Foodcertification;