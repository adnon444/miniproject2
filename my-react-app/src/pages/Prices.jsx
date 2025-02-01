import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer, } from "recharts";
 

 
//     const data = [
//         { name: "Adidas YS Slate Grey", price: 104 },
//         { name: "AJ4 Retro Military Blue", price: 238 },
//         { name: "Nike DL Photon Dust", price: 100 },
//         { name: "Adidas C 00s Core Black", price: 104 },
//         { name: "AJ4 Retro Bred Reimagined", price: 275 },
//         { name: "Nike AF Low 07 White", price: 90 },
//         { name: "AJ4 Retro White Thunder", price: 268 },
//         { name: "Nike DL Retro Panda", price: 92 },
//         { name: "Adidas YFRNR Onyx", price: 106 },
//         { name: "Nike DL Grey Fog", price: 103 },
//     ];
 

// const Prices = () => {

//     return (

//         <div className="Prices FancyBox">

//         <header><img src='https://i.gifer.com/72qy.gif' height="400px" width="600px"></img></header>
//         <h2>2024 Average Sneaker Resale Prices</h2>
//         <h3>Below are the average resale prices for the top 10 most resold sneakers of the year. Ranging from Jordan Brand, to Nike, to Adidas models.</h3>



//         <BarChart width={1000} height={600} data={data}>
//             <Bar dataKey="price" fill="orange" />
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//         </BarChart>

//         </div>
//     );
// };
 
// export default Prices;





const data = [
    {
      name: "Adidas Y SL G",
      price: 104,

    },
    {
      name: "AJ 4 MB",
      price: 238,

    },
    {
      name: "Nike DL PD",
      price: 100,

    },
    {
      name: "Adidas C 00s CB",
      price: 104,

    },
    {
      name: "AJ4 BR",
      price: 275,

    },
    {
      name: "Nike AFL 07 W",
      price: 90,

    },
    {
      name: "AJ4 WT",
      price: 268,

    },
    {
        name: "Nike DL PA",
        price: 92,
  
      },
      {
        name: "Adidas YFRNR O",
        price: 106,

      },
      {
        name: "Nike DL GF",
        price: 103,

      },
  ];
  


function Prices() {

    return (


        <div className="Prices FancyBox">


        <header><img src='https://i.gifer.com/72qy.gif' height="400px" width="600px"></img></header>
         <h2>2024 Average Sneaker Resale Prices</h2>
         <h3>Below are the average resale prices for the top 10 most resold sneakers of the year. Ranging from Jordan Brand, to Nike, to Adidas models.</h3>

      <ResponsiveContainer width={"100%"} height={500}>
        <BarChart
          data={data}
          barCategoryGap="0%"
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" scale="band" stroke="black" padding={{ left: 0, right: 0 }} angle={0} textAnchor="end" tick={{fontSize:12}}/>
          <YAxis stroke="black" />
          <Tooltip />

          <Bar
            dataKey="price"
            fill="#FF5F5E"
            barSize={25} 
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>

      <footer>Created by Adnon Al-Wazzan Jan 2025</footer>
      </div>  

    );
  };

  export default Prices;
