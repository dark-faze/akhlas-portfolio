import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import{SiLeetcode} from 'react-icons/si'
import { useTheme } from "next-themes";
import {GiTie} from 'react-icons/gi'
const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
    return (
        <div>
            <img src='ima.jpg' alt="user pic" className="w-32 h-32 mx-auto rounded-full border-4 border-gradient-to-r from-mauve-a to-mauve-b shadow-xl hover:scale-105 transition-transform duration-300"/>
            <h3 className = "my-4 text-3xl font-medium tracking-wider font-poppins"> Mohammed <span className="bg-gradient-to-r from-mauve-a to-mauve-b bg-clip-text text-transparent">Akhlas</span> Hussain</h3>
            <p className = "px-4 py-2 my-3 bg-gradient-to-r from-mauve-a to-mauve-b text-white rounded-full text-center font-semibold shadow-lg">Full Stack Developer</p>
            <a className = "px-4 py-2 my-3 bg-gradient-to-r from-mauve-b/20 to-mauve-a/20 border border-mauve-b hover:from-mauve-a hover:to-mauve-b hover:text-white rounded-full flex item-center justify-center transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg" href='https://medium.com/@akhlashussain' target='blank'>
                {/*href="/resume.pdf" download = "resume.pdf"> */}
            My Blogs
            </a>
            <div className = "flex justify-around my-5 text-mauve-b w-9/12 md:w-full mx-auto">
                <a href="https://github.com/dark-faze" target="_blank" className="hover:scale-125 transition-transform duration-300 hover:text-mauve-a">
                    <AiFillGithub className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://leetcode.com/akhlashussain/" target="_blank" className="hover:scale-125 transition-transform duration-300 hover:text-mauve-a">
                    <SiLeetcode className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.linkedin.com/in/mohammed-akhlas-hussain/"target="_blank" className="hover:scale-125 transition-transform duration-300 hover:text-mauve-a">
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
                </a>
                <a href="https://www.instagram.com/darkfazey/"target="_blank" className="hover:scale-125 transition-transform duration-300 hover:text-mauve-a">
                    <AiFillInstagram className="w-8 h-8 cursor-pointer"/>
                </a>
            </div>

            <div className = 'my-5 py-4 bg-gray-200 dark:text-white dark:bg-dark-200' style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>Kolkata , India</span>
                </div>
                <p className='my-2'>akhlashussain7@gmail.com</p>
            </div>
            <button className="bg-gradient-to-r from-mauve-a to-mauve-b w-8/12 rounded-full py-2 px-5 text-white bg-black my-2 focus:outline-none hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
             onClick={()=>window.open('mailto:akhlashussain3@gmail.com')} >
                 Email Me</button>
            <button onClick={changeTheme} className="bg-gradient-to-r from-mauve-a to-mauve-b w-8/12 rounded-full py-2 px-5 text-white my-2 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold">Theme</button>
        </div>
    )
}

export default Sidebar
