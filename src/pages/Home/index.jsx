import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Perfil from "../../Components/Perfil";
import Outdoor from "../../Components/Outdoor";
import Social from "../../Components/Social";
import MyTeams from "../../Components/MyTeams";
import Teams from "../../Components/Teams";

export const Home = () => {
    return(
        <>
        <NavBar />
        <div className="flex gap-4 justify-around p-4">
        <Perfil />
        <Outdoor />
        <Social/>
        </div>
        <div className="flex gap-4 justify-around p-4">
        <MyTeams />
        <Outdoor />
        <Teams/>
        </div>
        <div className="flex gap-4 justify-around p-4">
        <Perfil />
        <Outdoor />
        <Social/>
        </div>
        </>
    )
};

export default Home;
