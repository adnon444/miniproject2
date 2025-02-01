import React, { useState } from 'react'



function BlogsList() {

const blogs = [
    
    {
        id: 1,
        title: "The Air Jordan 4 Retro Cement",
        image: "https://images.stockx.com/360/Air-Jordan-4-Retro-White-Cement-2016/Images/Air-Jordan-4-Retro-White-Cement-2016/Lv2/img01.jpg?w=480&q=60&dpr=1&updated_at=1690230671&h=320",
        synopsis: "As 2025 creeps closer, so does a whole stack of high-heat releases. Among them is the return of the Air Jordan 4 'White Cement' which has now materialised in the form of a first look which you can see to the left. Check the pair out here and stay locked for news of an official release date, which is currently expected to be May 24, 2025.",
    },
    {
        id: 2,
        title: "Five new Supreme x Nike SB Dunks on the way",
        image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F12%2F06%2Fsupreme-nike-sb-dunk-low-2025-rumor-info-001.jpg?q=75&w=800&cbr=1&fit=max",
        synopsis: "Interestingly, another sample Supreme x Nike SB Dunk Low has emerged ahead of 2025! Supreme and Nike SB have a mega five-shoe drop on the way for next year, and early looks at the pairs are coming in fast. Take a look at the early image and stay locked for the collection's release which is currently expected in May 2025.",
    },
    {
        id: 3,
        title: "The Aime Leon Dore x New Balance 993 'Mulberry Green",
        image: "https://sneakerbardetroit.com/wp-content/uploads/2024/11/Aime-Leon-Dore-New-Balance-993-Mulberry-Green-Porsche.jpg",
        synopsis: "The hightly anticipated Aime Leon Dore x New Balance 993 'Mulberry Green' is finally here. The sneaker pays homage to the Porsche 993 Turbo, a favorite car of ALD founder Teddy Santis. You can secure your pair by reserving one through the ALD website. However you will need to be patient, as pairs will not begin to ship until September 2025.",
    },
    {
        id: 4,
        title: "The new Adidas ZPONGE is inspired by nature",
        image: "https://sneakernews.com/wp-content/uploads/2024/12/adidas-zponge-release-date.jpg?w=780&h=550&crop=1",
        synopsis: "Adidas continues to surprise us with innovative sneaker technology, and this time they are tackling it big with the ZPONGE. After the famous BOOST and 4D technologies, now it is time for a whole new kind of cushioning, inspired by sea sponges. If you thought you've seen it all in sneaker territory, Adidas is back with a brand new innovation. Stay tuned for an official release date.",
    },
    {
        id: 5,
        title: "Nike Air 180 'University Blue & Hyper Pink returns",
        image: "https://images.stockx.com/images/Nike-Air-Max-180-University-Blue-Hyper-Pink.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1735064691",
        synopsis: "The Nike Air 180 made a successful comeback at the beginning of 2024. The University Blue & Hyper Pink boasts an eye-catching color palette. The upper features a deep blue hue crafted from soft neoprene. The Nike Air 180 logo is prominently displayed in vibrant pink on the tongue. The sole incorporates the renowned 180 Air Technology, offering excellent cushioning and comfort. Stay tuned for an official release date.",
    },
]


function Blog({title, year, image, synopsis}) {
    return (
        <li>
            <h2>{title}</h2>
            <br></br>
            <img src={image} height="300px" width="400px"></img>
            {/* <span>{(year)}</span> */}
            <br></br>
            <div>{synopsis}</div>
            </li>
    )
}


const [currentBlogs, setCurrentBlogs] = useState(blogs)


const blogItems = currentBlogs.map(blog => (
    <Blog
    key={blog.id}
    image={blog.image}
    title={blog.title}
    year={blog.year}
    synopsis={blog.synopsis} />
))





    return (

        <div className="Blog FancyBox">

        <ul>
        { blogItems}

        
        </ul>

        <footer>
            Created by Adnon Al-Wazzan, Jan 2025
        </footer>

        </div>
        
        ); 
}
  
  export default BlogsList;