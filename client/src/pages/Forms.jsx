
import { A } from "@solidjs/router";
import { createResource, onMount } from "solid-js";
import { API_BASE_URL } from "../../config";
import { useNavigate } from "@solidjs/router";

async function fetchRooms() {

    let navigate = useNavigate();

    let response = await fetch(API_BASE_URL + '/forms',
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

function Form() {
    const [rooms] = createResource(fetchRooms);

    // TODO: This will be the page where employees fill out the podium check form. It should use the <form> element and have checkbox <input>s.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl mb-5">Select Form{rooms() ? ": " + rooms().roomGroup.groupName : ""}</h2>
            <div class="flex flex-row flex-wrap gap-3 text-5xl justify-center">
                {rooms()
                    ?
                    rooms().roomGroup.rooms.map(
                        (it) =>
                            <A class=" flex justify-around rounded-md items-center h-8 w-min p-8 bg-slate-400" href={"/forms/" + it.roomName}>
                                <span>{it.roomName}</span>
                                {
                                    localStorage.getItem("room" + it.roomName)
                                        ?
                                        <div class="rounded-full bg-green-400 w-9 h-9 border-green-50 border-4 text-3xl text-center leading-[1.75rem] ml-3 mr-[-.75rem]">✓</div>
                                        :
                                        ""
                                }
                            </A>
                    )
                    : ""
                }
            </div>
        </main>
    );
}
export default Form;