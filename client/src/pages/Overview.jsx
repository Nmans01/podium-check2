import { createSignal, onMount, createResource } from "solid-js";
import { A } from "@solidjs/router";
import { API_BASE_URL } from "../../config.js";

function Overview() {

    const [message, setMessage] = createSignal();

    const [messageGet] = createResource(message, async () => {
        const response = await fetch(API_BASE_URL + '/message');
        const data = await response.json();
        return data;
    });

    return (
        <main class=" bg-slate-700 mx-2 p-2 rounded-md grid grid-flow-row grid-rows-1 items-center gap-2">
            <section class="rounded-sm p-2 flex flex-col gap-5 text-3xl">
                <span class="text-8xl font-bold">Welcome back!</span>
                <p>
                    {messageGet() ? messageGet().text: ""}
                </p>
                <div class="flex gap-2">
                    {messageGet() ? messageGet().actions.map((action) =>
                        <A href={action.ref} class="bg-slate-300 text-slate-900 p-2 text-sm rounded-sm hover:brightness-90 active:brightness-75">{action.text}</A>
                    ) : ""}
                </div>
            </section>
        </main>
    );
}
export default Overview;