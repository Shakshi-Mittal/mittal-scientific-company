import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ProductList.css';
            
             const KLAData = [
                {
                   title:"HIV TRI DOT(JMitra)",
                   description :"100 test(1 box)",
                },
                {
                    title:"HCV TRI DOT(JMitra)",
                    description :"100 test(1 box)",
                 },
                 {
                    title:"HIV QualPro(Tulip)",
                    description :"50 test(1 box)",
                 },
                 {
                    title:"HCV QualPro(Tulip)",
                    description :"50 test(1 box)",
                 },
                 {
                    title:"HIV (ERBA)",
                    description :"25 test(1 box)",
                 },
                 {
                    title:"HCV (ERBA)",
                    description :"25 test(1 box)",
                 },
                 {
                    title:"HIV (ABBOTT)",
                    description :"30 test(1 box)",
                 },
                 {
                    title:"HCV (ABBOTT)",
                    description :"30 test(1 box)",
                 },
                 {
                  title:"Signal HIV 3D Ver 1.0 (Arkray)",
                 },
                 {
                    title:"HepaCard (JMitra)",
                    description :"100 test(1 box)",
                 },
                 {
                    title:"HBASG Card (ERBA)",
                    description :"25 test(1 box)",
                 },
                {
                   title:"Advantage MalCard(JMitra)",
                   description :"50 test(1 box)",
                },
                {
                    title:"Malaria(ABBOTT)",
                    description :"25 test(1 box)",
                 },
                 {
                    title:"K3 EDTA Tube with Safety Cap(RD)",
                    description :"100 tube(1 box)",
                 },
                 {
                    title:"Clot Activator Tube with Safety Cap(RD)",
                    description : "100 tube(1 box)",
                 },
                 {
                    title:"Floride Tube with Safety Cap(RD)",
                    description :"100 tube(1 box)",
                 },
                 {
                    title:"Slide",
                    description :"50 test(1 box)",
                 },
                 {
                    title:"Cover Slip",
                    //description :"25 test(1 box)",
                 },
                 {
                    title:"Ria Vial Plastic Test Tube",
                    description :"100 tube(1 box)",
                 },
                 {
                  title:"Test Tube(Glasses)",
                  //description :"100 tube(1 box)",
                 },
                 {
                    title:"Distilled Water",
                    //description :"5 L",
                 },
                 {
                    title:"Tissue Roll",
                   // description :"25 test(1 box)",
                 },
                 {
                    title:"Analyser Roll",
                    description :"50/57 mm",
                 },
                 {
                    title:"Typhoid (Oscar)",
                    description :"50 test(1 box)",
                 },
                 {
                    title:"Typhoid (CTK)",
                    description :"30 test(1 box)",
                 },
                 {
                    title:"Syphilis(Tulip)",
                    description :"25 test(1 box)",
                 },
                 {
                    title:"Syphilis(Beacon)",
                    description :"50 test(1 box)",
                 },
                 {
                    title:"Advantage Dengue Card (igg/tgm)(JMitra)",
                    description :"10 test(1 box)",
                 },
                 {
                    title:"Hydrochloric Acid N/10 (Arkray)",
                    description :"500 ml",
                 },
                 {
                    title:"Na2 EDTA solution (Arkray)",
                    description :"500 ml",
                 },
                 {
                    title:"Urin Container (30 ml)",
                    description :"100 piece (1 packet)",
                 },
                 {
                    title:"Flamingo Tourniquate",
                 },
                 {
                    title:"Tourniquate Velcro",
                     //description :"25 test(1 box)",
                 },
                 {
                    title:"MicroCentifuse Tube 1.5 ml",
                     description :"500 piece(1 packet)",
                 },
                 {
                    title:"Micro Tip",
                    description :"2/200 ul",
                 },
                 {
                  title:"Micro Tip",
                  description :"200/1000 ul",
                 },
                 {
                  title:"Formaldehyde Solution",
                  description :"all size available",
                 },
                 {
                  title:"Pregnancy Card(ASPEN)",
                  description :"100 test (1 box)",
                 },
                 {
                  title:"Elite H Cleaner(ERBA)",
                  description :"50 ml",
                 },
                 {
                  title:"Elite H Cleaner(ERBA)",
                  description :"50 ml",
                 },
                 {
                  title:"Signal MF test kit(Arkray)",
                  description :"5 test (1 box)",
                 },
                 {
                  title:"Drabkin Solution(Arkray)",
                  description :"5 ltr(other size available)",
                 },
                 {
                  title:"Dropping Bottle Glass",
                  description :"125 ml (other sizes available)",
                 },
                 {
                  title:"HB Pipette Marienfeld",
                  //description :"125 ml (other sizes available)",
                 },
                 {
                  title:"HB Tube Marienfeld",
                  //description :"125 ml (other sizes available)",
                 },
                 {
                  title:"Wash Bottle (Poly Lab)",
                  description :"500 ml (other sizes available)",
                 },
                 {
                  title:"Micro Pipette",
                  description :"10 -100 ul",
                 },
                 {
                  title:"Micro Pipette",
                  description :"100 -1000 ul",
                 },
                 {
                  title:"Beaker (Poly and Glass )",
                  description :"all size available",
                 },
                 {
                  title:"Leishman Stand(Arkray)",
                  description :"500 ml",
                 },
                 {
                  title:"CytoChome(Leishman) (BioLab)",
                  description :"500 ml",
                 },
                 {
                  title:"Capillary Tube Top",
                  //description :"500 ml",
                 },
                 {
                  title:"Vec-EZ 23 Cleaner(Vector)",
                  description :"100 ml",
                 },
                 {
                  title:"Lyse H 360(Erba)",
                  description :"500 ml",
                 },
                 {
                  title:"Diluent H 360(Erba)",
                  description :"20 ltr",
                 },
                 {
                  title:"Leishman Stand",
                  description :"500 ml",
                 },
                 {
                  title:"Test Tube brush",
                  //description :"500 ml",
                 },
                 {
                  title:"Test Tube stand",
                  description :"all size available",
                 },
                 {
                  title:"Trop T sensitive(Cobas)",
                  description :"5 kit (1 box)",
                 },
                 {
                  title:"Octa 1 digital 9 elec. Filter Calorimeter",
                 // description :"5 kit (1 box)",
                 },
                 {
                  title:"Wintrobe Stand (ESR)",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"Wintrobe Needle (ESR)",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"H B Meter",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"Pipette Stand with Drawer Fusion Function",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"Microscope Binocular Vistek All Bras B-307",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"Docter Centrifuge Machine 8 Tube Copper Vistec",
                  //description :"5 kit (1 box)",
                 },
                 {
                  title:"Slide Statining Tray Aluminium",
                  //description :"5 kit (1 box)",
                 },
                 
            ];
            const BeaconData = [
                {
                   title:"Glucose",
                   description :"6 x 100 ml",
                },
                {
                   title:"TriGlyceride",
                   description :"50 ml",
                },
                {
                    title:"Urea (NED Method)",
                    description :"100 ml",
                 },
                 {
                    title:"Urea (NED Method)",
                    description :"200 ml",
                 },
                 {
                    title:"Urea(Berthalot Method)",
                    description :"5 x 10 ml",
                 },
                 {
                    title:"Calcium (Arsenazo)",
                    description :"25 test",
                 },
                 {
                    title:"Potassium",
                    description :"25 test",
                 },
                 {
                    title:"Sodium",
                    description :"25 test",
                 },
                 {
                    title:"Creatinine",
                    description :"240 ml",
                 },
                 {
                    title:"Cholestrol",
                    description :"1 x 50 ml",
                 },
                 {
                    title:"Bilirubin (DMSO method)",
                    description :"240 ml",
                 },
                 {
                    title:"SGPT",
                    description :"100 ml",
                 },
                 {
                    title:"SGOT",
                    description :"100 ml",
                 },
                 {
                    title:"Uric Acid",
                    description :"50 ml"
                 },
                 {
                    title:"CRP TurbiLatex",
                    description :"50 ml"
                 },
                 {
                    title:"Alkaline phos.",
                    description :"30 x 1.2 ml",
                 },
                 {
                    title:"TriGlyceride",
                    description :"50 ml",
                 },
                 {
                    title:"Amylase",
                    description :"10 x 1.0 ml",
                 },
                 {
                  title:"Widal Test",
                  description :"4 x 5 ml",
                 },
                 {
                  title:"Widal Test (OH)",
                  description :"2 + 2x5 ml",
                 },
                 
            ];
            const ErbaData = [
                {
                   title:"Wash",
                   description :"4 x 50 ml",
                },
                {
                   title:"Glucose",
                   description :"2 x 200 ml",
                },
                {
                    title:"Urea(BUN)",
                    description :"5 x 20 ml",
                 },
                 {
                    title:"Calcium OCPC",
                    description :"2 x 50 ml",
                 },
                 {
                    title:"Cholestrol",
                    description :"5 x 20 ml",
                 },
                 {
                    title:"SGPT",
                    description :"5 x 20 ml",
                 },
                 {
                    title:"SGOT",
                    description :"5 x 20 ml",
                 },
                 {
                    title:"Uric Acid",
                    description :"5 x 10 ml"
                 },
                 {
                    title:"Uric Acid",
                    description :"5 x 20 ml"
                 },
                 {
                    title:"TriGlyceride",
                    description :"5 x 20 ml",
                 },
                 {
                    title:"TriGlyceride",
                    description :"5 x 20 ml"
                 },
                 {
                    title:"Alkaline Phos.",
                    description :"6 x 6 ml",
                 },
            ];
            const CoralData = [
                {
                   title:"Calcium",
                   description :"2 x 35 ml",
                },
                {
                   title:"TriGlyceride",
                   description :"75 ml",
                },
                {
                    title:"Cholestrol SR",
                    description :"75 ml",
                 },
                 {
                    title:"SGOT",
                    description :"75 ml",
                 },
                 {
                    title:"SGPT",
                    description :"75 ml",
                 },
                 {
                    title:"Bilirubin",
                    description :"35 test",
                 },
                 {
                    title:"Uric Acid",
                    description :"75 ml",
                 },
                 {
                    title:"Urea(Assays)",
                    description :"75 ml",
                 },
                 {
                    title:"Creatinine",
                    description :"35 test",
                 },
                 {
                    title:"Creatinine",
                    description :"2 x 75ml",
                 },
            ];
            const ArkrayData = [
                {
                  title:"Turberculin PPD 10TU/0.1ML",
                  description :"5 ml",
                },
                {
                  title:"CRP Latex Agglutination Test Kit",
                  description :"20 Test",
                },
                {
                    title:"RF Latex Agglutination Test Kit",
                    description :"20 Test",
                },
                {
                    title:"Glucose",
                    description :"9 x 50ml",
                },
                {
                    title:"Urea",
                    description :"2 x 125ml",
                },
                {
                    title:"Calcium OCPC",
                    description :"2 x 50ml",
                },
                {
                    title:"Cholestrol",
                    description :"2 x 20ml",
                },
                {
                    title:"Bilirubin",
                    description :"2 x 125ml",
                },
                {
                    title:"ASO Latex Agglutination Test Kit",
                    description :"20 Test",
                },
                {
                    title:"ALT",
                    description :"10 x 10ml",
                },
                {
                    title:"AST",
                    description :"10 x 10ml",
                },
                {
                    title:"MBK ALT Test Kit",
                    description :"2 x 25ml",
                },
                {
                    title:"MBK AST Test Kit",
                    description :"2 x 25ml",
                },
                {
                    title:"Uric Acide",
                    description :"2 x 25ml",
                },
                {
                    title:"TriGlyceride",
                    description :"2 x 20ml",
                },
                {
                    title:"Amylase",
                    description :"10ml",
                },
                {
                    title:"Widal Test",
                    description :"4 x 5ml",
                },
                {
                    title:"Widal Test(OH)",
                    description :"2 + 2 x 5 ml",
                },
                {
                    title:"SPANCLONE Anti A+B+D Serum(MONO)",
                    description :"3 x 10ml",
                },
                {
                    title:"Uristix(Orinasys GP)",
                    description :"100 test",
                },
                {
                    title:"Uristix(Orinasys B10)",
                    description :"100 test",
                },
                {
                    title:"Albumin Test Kit",
                    description :"100 ml",
                },
                {
                    title:"Total protein Test Kit",
                    description :"100 ml",
                },
                {
                    title:"Alkaline phosc",
                    description :"20 x 1 ml",
                },
                
    ];

            const AgappeData = [
                {
                   title:"Uric Acide",
                   description :"2 x 30ml",
                },
                {
                   title:"Glucose",
                   description :"4 x 250ml",
                },
                {
                    title:"SGOT",
                    description :"3 x 50ml",
                 },
                 {
                    title:"SGPT",
                    description :"3 x 50ml",
                 },
                 {
                    title:"Bilirubin T & D Tab",
                    description :"4 x 50ml",
                 },
                 {
                    title:"HDL Cholestrol",
                    description :"40ml",
                 },
                 {
                    title:"Cholestrol",
                    description :"2 x 25ml",
                 },
            ];
            const AccurexData = [
                {
                    title:"Glucose",
                    description :"5 x 100ml",
                },
                {
                    title:"Urea",
                    description :"100ml",
                },
                {
                    title:"Uric Acid",
                    description :"50ml",
                },
                {
                    title:"Calcium",
                    description :"100ml",
                },
                {
                    title:"Cholestrol",
                    description :"2 x 25ml",
                },
                {
                    title:"TriGlyceride",
                    description :"2 x 25ml",
                },
                {
                    title:"SGPT",
                    //description :"50ml",
                },
                {
                    title:"SGOT",
                    //description :"50ml",
                },
                {
                  title:"ADA",
                  description :"15 test",
              },
                ];

            const TulipData = [
                {
                    title:"RF",
                    description :"35 Test",
                },
                {
                    title:"CRP",
                    description :"35 Test",
                },
                {
                  title:"Tydal (Oh)",
                  description :"2 + 2 x 5 ml",
                },
                {
                  title:"Tydal",
                  description :"4 x 5 ml",
                },
                ];




        
const ProductList = () => {
    const scrollToHome = () => {
        const homeSection = document.getElementById('home-section');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const [currentView, setCurrentView] = useState('1'); // Default view

    const handleLinkClick = (view) => {
          setCurrentView(view);
      };
      return (
        <div className='flex h-screen'>
            <div className='w-1/4 bg-sky-300 p-4'>
                <Link to="/" onClick={scrollToHome} className="btn go-home-btn">
                    Go to Home
                </Link>
                <div className="mt-4 texts-center">
                    <h2 className="text-white text-lg font-semibold mb-2">Product List</h2>
                    <div className="flex flex-col space-y-2 texts-center">
                        <a href="#1" onClick={() => handleLinkClick('1')} className="product-link">
                        <span className="link-text">Kit & Laboratory Apparatus</span>
                        </a>
                        <a href="#2" onClick={() => handleLinkClick('2')} className="product-link">
                            <span className="link-text">BEACON</span>
                        </a>
                        <a href="#3" onClick={() => handleLinkClick('3')} className="product-link">
                            <span className="link-text">ERBA</span>
                        </a>
                        <a href="#4" onClick={() => handleLinkClick('4')} className="product-link">
                            <span className="link-text">CORAL</span>
                        </a>
                        <a href="#5" onClick={() => handleLinkClick('5')} className="product-link">
                            <span className="link-text">ARKRAY</span>
                        </a>
                        <a href="#6" onClick={() => handleLinkClick('6')} className="product-link">
                            <span className="link-text">AGAPPE</span>
                        </a>
                        <a href="#7" onClick={() => handleLinkClick('7')} className="product-link">
                            <span className="link-text">ACCUREX</span>
                        </a>
                        <a href="#8" onClick={() => handleLinkClick('8')} className="product-link">
                            <span className="link-text">TULIP</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-sky-600 overflow-auto flex-grow text-center pl-5 pr-5">
                {currentView === '1' && (
                    <ProductListView titleText="Kit & Laboratory Apparatus" cardsData={KLAData} />
                )}

                {currentView === '2' && (
                    <ProductListView titleText="BEACON" cardsData={BeaconData} />
                )}

                {currentView === '3' && (
                    <ProductListView titleText="ERBA" cardsData={ErbaData} />
                )}
                
                {currentView === '4' && (
                    <ProductListView titleText="CORAL" cardsData={CoralData} />
                )}
                
                {currentView === '5' && (
                    <ProductListView titleText="ARKRAY" cardsData={ArkrayData} />
                )}

                {currentView === '6' && (
                    <ProductListView titleText="AGAPPE" cardsData={AgappeData} />
                )}

                {currentView === '7' && (
                    <ProductListView titleText="ACCUREX" cardsData={AccurexData} />
                )}

                {currentView === '8' && (
                    <ProductListView titleText="TULIP" cardsData={TulipData} />
                )}

               
            </div>
        </div>
    );
};
 
const ProductListView = ({titleText, cardsData}) => {
    return(
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-0.5">
                {
                    cardsData.map(item =>{
                        return( 
                        <Card
                        
                            title={item.title}
                            description ={item.description} 
                        />
                        );
                    })
                }              
            </div>
        </div>
    );
};

const Card = ({ title, description }) => {
    return (
        <div className="bg-black bg-opacity-40 p-4 rounded-lg">
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm"> {description}</div>
        </div>
    );
}
export default ProductList