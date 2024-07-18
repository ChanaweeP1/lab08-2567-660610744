import { Header } from '../../component/Header';
import { Taskinput } from '../../component/Taskinput';
import { Task } from '../../component/Task';
import { Footer } from '../../component/Footer';


export default function Home() {
    const tasks=[
        {id : 1 , title: "Read a book", isDone: true },
        {id : 2 , title: "Take a shower", isDone: false },
        {id : 3 , title: "Sleep", isDone: false }
    ];
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
            <Task title {...tasks[0]} />
            <Task title {...tasks[1]} />
            <Task title {...tasks[2]} /> 
        {/*footer section */} 
            <Footer year = "2024" fullname = "Chanawee Pintaya" studentid = "660610744"/>
            </div>  
        </div>
    );
};