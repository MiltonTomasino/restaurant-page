
const About = () => {
    let aboutBox = document.createElement("div");
    aboutBox.classList.add("about-box");

    let aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = `Welcome to [Restaurant Name], where passion for food meets a commitment to quality and community.
                                 Founded on the belief that great meals bring people together, we offer a carefully crafted menu that blends 
                                 fresh, locally sourced ingredients with time-honored recipes and a touch of culinary creativity. Whether you're 
                                 joining us for a casual lunch, a special dinner, or just a warm cup of coffee, our team is dedicated to delivering 
                                 an experience that feels like home. Come hungry, leave happy—every visit is a celebration of flavor.`
    
    aboutBox.appendChild(aboutParagraph);

    return aboutBox;
}

export default About;