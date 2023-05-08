import { useParams, useNavigate, A } from "@solidjs/router";
import { API_BASE_URL } from "../../config";
import { createResource } from "solid-js";

function Form() {

    let params = useParams();

    async function fetchRoom() {
        let navigate = useNavigate();

        let response = await fetch(API_BASE_URL + '/forms/' + params.id,
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
    }

    const [room] = createResource(fetchRoom);

    // TODO: This will be the page where employees fill out the podium check form. It should use the <form> element and have checkbox <input>s.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl mb-5">Form: {params.id}</h2>
            Features:
            {!room.loading
                ?
                <div class="flex flex-col gap-3 text-xl justify-center bg-slate-400 rounded-md p-2 text-slate-900">
                    {
                        room()[0]
                            ?
                            room()[0].map(
                                (it) =>
                                    <div class="flex flex-row justify-between">
                                        <label htmlFor={it.feature.featureName}>{it.feature.featureName}</label>
                                        <div class="px-8"><input type="checkbox" id={it.feature.featureName} class="scale-150  px-8" /></div>

                                    </div>
                            )
                            :
                            ""
                    }
                </div>
                :
                " Loading..."
            }
            Projectors: 
            {!room.loading ?
                <div class="flex flex-col gap-3 text-xl justify-center bg-slate-400 rounded-md p-2 text-slate-900">{room()[1][0]
                    ?
                    room()[1].map(
                        (it) =>
                            <div class="flex flex-row justify-between">
                                <label htmlFor={it.projectorName}>{it.projectorName}</label>
                                <div class="px-8"><input type="text" id={it.projectorName} class="px-2 mr-2" /> lamp hours</div>

                            </div>
                    )
                    : "(no projectors)"}</div> : ""
            }
            <div class="flex justify-end px-8">
                {!room.loading
                ?<A class="hover:underline" href="/forms" onClick={() => localStorage.setItem("room"+params.id,"done")}>Submit</A>
                :""}
            </div>
        </main>
    );
}
export default Form;