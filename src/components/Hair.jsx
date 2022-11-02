import Hair1 from "../assets/hair1.jpeg"
import Hair2 from "../assets/hair2.jpeg"
import Hair3 from "../assets/hair3.jpeg"
import Hair4 from "../assets/hair4.jpeg"
import Hair5 from "../assets/hair5.jpeg"
import Hair6 from "../assets/hair6.jpeg"

import HairData from "./HairData"
import "./HairStyles.css"


const Hair =() =>{
    return(
        <div className="hair">
            <h1>Popular Haircuts</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit.</p>
        <HairData
        className="first-des"
        heading="Spike Cut"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi. Suspendisse a urna laoreet, aliquam metus in, mattis ligula."
        img1 ={Hair3}
        img2 ={Hair4}
        />
        <HairData
        className="first-des-reverse"

        heading="Crew Cut"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi. Suspendisse a urna laoreet, aliquam metus in, mattis ligula."
        img1 ={Hair1}
        img2 ={Hair2}
        />

    <HairData
        className="first-des"
        heading="Miltary Cut"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi. Suspendisse a urna laoreet, aliquam metus in, mattis ligula."
        img1 ={Hair5}
        img2 ={Hair6}
        />
        </div>

        

        
    )
}

export default Hair;