import { createSignal } from "solid-js";

function Login() {

    const [validEmail,setValidEmail] = createSignal(true);
    const [showHelp,setShowHelp] = createSignal(false);

    const tryLogin = (e) => {
        setValidEmail(false);
    }

    return (
        <div class="relative bg-slate-300 text-slate-900 w-96 flex justify-center rounded-lg">
            <div class="grid grid-flow-row items-end gap-6 h-full py-12 w-[272px]">
                <h2 class="text-2xl justify-self-center self-start">Log in</h2>
                { validEmail() || <p class=" justify-self-center text-red-800">Invalid email.</p> }
                <div class="relative border-slate-700 border-solid border-2 p-2 pt-4">
                    <input class="bg-slate-300" type="text" />
                    <span class="absolute top-[-.7rem] left-[.1rem] bg-slate-300 px-1">Email</span>
                </div>
                <div class="flex flex-row justify-between w-full">
                    <button onClick={() => (setShowHelp(!showHelp()))}>{!showHelp()||"Hide"} Help</button>
                    <button onClick={tryLogin}>Next</button>
                </div>
                { !showHelp() || <p class=" justify-self-center">You can log in with any valid email.<br/> If you don't already have an account, one will be created for you.</p> }
            </div>
        </div>
    );
}
export default Login;