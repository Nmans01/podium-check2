import { A, useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { parseJwt } from "../utils/parseJwt";

function Login() {

    const navigate = useNavigate();

    const [validEmail, setValidEmail] = createSignal(true);
    //const [showHelp, setShowHelp] = createSignal(false);
    const [form, setForm] = createStore({
        email: "",
        password: ""
    });
    const updateFormField = (fieldName) => (e) => {
        const inputElement = e.currentTarget;
        setForm({
            [fieldName]: inputElement.value
        });
    };

    function handleLogin() {
        // Make a request to your backend to get a JWT token
        fetch(
            "http://localhost:3000/auth/local/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            }
        ).then(
            response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            }
        ).then(
            data => {
                // Store tokens in localStorage
                localStorage.setItem('accessToken', data.access_token);
                localStorage.setItem('refreshToken', data.refresh_token);
                console.log(parseJwt(data.access_token));
                localStorage.setItem('refreshToken', data.refresh_token);
                // Redirect the user to the protected page
                navigate(-1);
            }
        ).catch(
            error => {
                console.log(error);
                setValidEmail(false);
            }
        );
    }

    return (
        <div class="relative bg-slate-300 text-slate-900 w-96 flex justify-center rounded-lg">
            <div class="grid grid-flow-row items-end gap-6 h-full py-12 w-[272px]">
                <h2 class="text-2xl justify-self-center self-start">Log in</h2>
                {validEmail() || <p class=" justify-self-center text-red-800">Invalid credentials.</p>}
                <label htmlFor="email" class="hover:cursor-text">
                    <div class="relative border-slate-700 border-solid border-2 p-2 pt-4">
                        <input id="email" class="bg-slate-300" type="text" onChange={updateFormField("email")} />
                        <span class="absolute top-[-.7rem] left-[.1rem] bg-slate-300 px-1">Email</span>
                    </div>
                </label>
                <label htmlFor="password" class="hover:cursor-text">
                    <div class="relative border-slate-700 border-solid border-2 p-2 pt-4">
                        <input id="password" class="bg-slate-300" type="password" onChange={updateFormField("password")} />
                        <span class="absolute top-[-.7rem] left-[.1rem] bg-slate-300 px-1">Password</span>
                    </div>
                </label>
                <div class="flex flex-row justify-end px-3 w-full">
                    {/*<button
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                    <button
                        onClick={() => (setShowHelp(!showHelp()))}
                    >
                        {!showHelp() || "Hide"} Help
    </button>*/}
                    <button
                        onClick={handleLogin}
                    >
                        Next
                    </button>
                </div>
                {/*
                !showHelp() || <p class=" justify-self-center">You can log in with any valid email.<br /> If you don't already have an account, one will be created for you.</p>
    */}
            </div>
        </div>
    );
}

export default Login;