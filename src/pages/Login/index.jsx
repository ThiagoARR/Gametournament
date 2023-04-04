import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ContextManipulation from "../../Context/Context";

const Login = () => {

    const {userLogged, setUserLogged} = useContext(ContextManipulation);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleRemember = (e) => {
        setRemember(!remember)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/auth", {
            email: email,
            pass: pass
          }).then((res) =>{
            if(res.data.code === 1){
                setUserLogged(true)
                navigate('/')
            }else{
                setUserLogged(false)      
            }
        })
    }

    return(
        <section className="w-full h-full flex items-center justify-center">
            <div className="container bg-secondary w-full sm:max-w-md rounded-md shadow p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-2xl text-gray-100">Sign in your account</h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                        <input type="email" onChange={handleEmail} value={email} name="email" id="email" className="input-login" />
                    </div>

                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                        <input type="password" onChange={handlePass} value={pass} name="password" id="password" className="input-login" />
                    </div>
                    <div>
                        <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-900 dark:hover:bg-amber-950 dark:focus:ring-amber-950 transition-all">Login</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input type="checkbox" id="remember" name="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label for="remember" className="text-gray-500 dark:text-gray-300">Lembrar usuário</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-sky-600 hover:underline dark:text-primary-500">Esqueceu sua Senha?</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <hr className="border-gray-500 w-full"></hr>
                        <div className="text-gray-400 p-2">Or</div>
                        <hr className="border-gray-500 w-full"></hr>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <a href="#" className="p-2 border-0 rounded-md w-full bg-white text-center font-normal text-gray-800 hover:bg-gray-500 transition-all hover:text-gray-800">Sign in with Google</a>
                        <a href="#" className="p-2 border-0 rounded-md w-full bg-battlenet text-center font-normal text-gray-300 hover:bg-battlenet-light transition-all hover:text-white">Sign in with BattleNet</a>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Login;
