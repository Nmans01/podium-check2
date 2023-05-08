import { createSignal, onMount, createResource } from "solid-js";
import { A,useNavigate } from "@solidjs/router";
import { API_BASE_URL } from "../../config.js";

function Overview() {

    const navigate = useNavigate();

    const [message, setMessage] = createSignal(null);

    const [test] = createResource(async () => {
        let response = await fetch(API_BASE_URL + '/message',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('accessToken')
                }
            }
        ).then(
            resp => {
                if (!resp.ok) throw new Error(resp.status);

                return resp;
            }
        ).catch(
            err => {
                console.log(err);
                //if (err==401) 
                navigate("/login");
            }
        );
        const data = await response.json();
        console.log(data);
        return data;
    });

    async function messageGet() {
        const response = await fetch(API_BASE_URL + '/message',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('accessToken')
                }
            }).then(resp => {
                if (resp.ok) return resp
            });
        const data = await response.json();
        console.log(data);
        return data;
    };

    return (
        <main class=" bg-slate-700 mx-2 rounded-md grid grid-flow-row grid-rows-1 items-center gap-2 bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/128d4f140686797.6245d4d5ec11c.png)] bg-cover bg-blend-luminosity bg-opacity-90 backdrop-blur-md">
            <section class="rounded-sm p-4 flex flex-col gap-5 text-3xl h-full justify-center backdrop-blur-lg bg-slate-700 bg-opacity-70">
                <span class="text-8xl font-bold">Welcome back!</span>
                <p>
                    {test() ? test().text : ""}
                </p>
                <div class="flex gap-2">
                    {test() ? test().actions.map((action) =>
                        <A href={action.ref} class="bg-slate-300 text-slate-900 p-3 rounded-sm hover:brightness-75 active:brightness-75">{action.text}</A>
                    ) : ""}
                </div>
            </section>
        </main>
    );
}
export default Overview;