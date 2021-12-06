import React from "react";

function categorySelected(name){
    console.log(`${name} was clicked`)
}

function Nav() {
    const categories = [
        {
            name: 'commercial',
            description:
            'Photos of grocery stores, food trucks, and other commercial projects',
        },
        { name: 'portraits', description: 'Portraits of people in my life'},
        { name: 'food', description: 'Delicious delicacies'},
        {
            name: 'landscape',
            description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
        },
    ];
    return(
        <header>
            <h2>
                <a href='/'>
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* Whenever you map in JSX, the outermost element must have a key attribute that's set to something unique */}
                    {categories.map((category) => (
                        <li
                        className="mx-1"
                        key={category.name}
                        >
                            <span onClick={()=> categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;