import OtherData from "./OtherData";
import "./OtherStyles.css"
import Other1 from "../assets/service1.jpeg"
import Other2 from "../assets/service2.jpeg"
import Other3 from "../assets/service3.jpeg"

function Other(){
    return(
        <div className="trip">
            <h1>Other Services</h1>
            <p>All in the best hands</p>
            <div className="tripcard">
            <OtherData
            image ={Other1}
            heading ="Beard Grooming"
            text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi."
            />
            <OtherData
            image ={Other2}
            heading ="Facial Cleansing"
            text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi."
            />
            <OtherData
            image ={Other3}
            heading ="Hair Coloring"
            text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue cursus eleifend. Pellentesque at risus ex. Morbi non tortor sed dui tristique sollicitudin. Aenean luctus tempor turpis, euismod dictum est accumsan ac. Suspendisse aliquet leo nisl, ultricies fringilla sem facilisis sit amet. In hac habitasse platea dictumst. Mauris finibus dapibus rhoncus. Donec eget nibh ex. Donec nec fringilla odio. Mauris sem nisi, maximus nec augue a, blandit ultricies magna. Quisque vulputate dolor non dolor dapibus porta vitae ultricies elit. Aliquam finibus rhoncus ligula. Suspendisse iaculis ligula eu dolor rutrum porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ac efficitur nisi."
            />
            </div>
        </div>
    )
}

export default Other;