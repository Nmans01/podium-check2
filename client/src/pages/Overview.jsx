import { createSignal, onMount } from "solid-js";
import { getMessage } from "../utils/getMessage";

function Overview() {

    const [message, setMessage] = createSignal({
        text:"Loading...",
        actions:[]
    });

    onMount(async () => {
        setMessage(await getMessage());
    });

    return (
        <main class=" bg-slate-700 mx-2 p-2 rounded-md grid grid-flow-row grid-rows-1 items-center gap-2">
            <section class="rounded-sm p-2 flex flex-col gap-5 text-3xl">
                <span class="text-8xl font-bold">Welcome back!</span>
                <p>
                    {message().text}
                </p>
                <div class="flex gap-2">
                    {message().actions.map((action)=>
                    <a href={action.ref} class="bg-slate-300 text-slate-900 p-2 text-sm rounded-sm hover:brightness-90 active:brightness-75">{action.text}</a>
                    )}
                </div>
            </section>
        </main>
    );
}
export default Overview;