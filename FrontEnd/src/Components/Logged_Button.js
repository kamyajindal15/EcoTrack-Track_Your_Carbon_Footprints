import { useNavigate } from "react-router-dom";

export default function Logged_Button(props)
{

    const nav = useNavigate();

    const Logout_now = () =>
    {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    const Login_page = () =>
    {
        nav('/login');
    }

    if(props.Loggedin)
    {
        return(
            <button className='Login_Button' onClick={Logout_now}>Logout</button>
        )
    }
    else
    {
        return(
            <button className='Login_Button' onClick={Login_page}>Login/Register</button>
        )
    }
}