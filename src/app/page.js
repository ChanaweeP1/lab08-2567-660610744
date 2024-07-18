import { Header } from '../../component/Header';
import { Taskinput } from '../../component/Taskinput';
import { Task } from '../../component/Task';
import { Footer } from '../../component/Footer';


export default function Home() {
    return (
        // Main container
        <div className = "container mx-auto"> 
        {/* header section */}
            <Header/> 
        {/* tasks container */} 
            <div style = { { maxWidth: "400px" } } className = "mx-auto"> 
        {/* task input */} 
            <Taskinput/>
        {/* task */} 
            <Task title = "Read a book"  isdone : true/>
            <Task title = "Take a shower" isdone : true/>
            <Task title = "Sleep" isdone : true/> 
        {/*footer section */} 
            <Footer year = "2024" fullname = "Chanawee Pintaya" studentid = "660610744"/>
            </div>  
        </div>
    );
};