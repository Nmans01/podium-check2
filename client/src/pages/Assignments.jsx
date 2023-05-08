import { useNavigate } from "@solidjs/router";
import { API_BASE_URL } from "../../config";
import { createResource } from "solid-js";

function Assignments() {

    async function fetchRoomGroups() {
        let navigate = useNavigate();

        let response = await fetch(API_BASE_URL + '/groups',
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

    async function fetchUsers() {
        let navigate = useNavigate();

        let response = await fetch(API_BASE_URL + '/users',
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

    const [groups] = createResource(fetchRoomGroups);
    const [users] = createResource(fetchUsers);

    // TODO: This will be the page where supervisors can create assignments, 
    // by selecting a date, selecting a RoomGroup out of the list of RoomGroups, and then specifying which employees should be assigned out of the list of employees.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl">Assignments</h2>
            <div class="flex flex-row flex-wrap gap-2 justify-center mt-8">
                {
                    !groups.loading
                        ?
                        groups().map(
                            (it) =>

                                <button style="background-color:#788693; height:100px; width:400px; font-size: 45px; float:left;" class=" hover:brightness-90 active:brightness-75">
                                    {it.groupName}
                                    <div style="background-color:#EADD66; width:50px; height:50px; border-radius:25px; border:3px solid white; float:right; margin-right:25px; margin-top:10px; font-size: 30px;">
                                        <span>
                                            3
                                        </span>
                                    </div>
                                </button>
                        )
                        :
                        "Loading..."
                }
            </div>

            <hr style="height:5px; border: none; width:95%" class="my-8 bg-slate-100" />
            <div class="flex flex-row flex-wrap gap-2 justify-center mb-8">
                {
                    !users.loading
                        ?
                        users().map(
                            (it) =>
                                <button style="background-color:#788693; height:80px; font-size: 50px; position:relative; float:left;" class="p-8 flex flex-row items-center gap-4 hover:brightness-90 active:brightness-75">
                                    <span>{it.firstName}</span>
                                    <div style="background-color:#A2E1A5; width:85px; height:50px; border-radius:25px; border:3px solid white; font-size: 30px;">
                                        <span>
                                            Esb
                                        </span>
                                    </div>
                                </button>
                        )
                        :
                        "Loading..."
                }
            </div>
            <div class="flex flex-row justify-end mt-2">
                <button style="background-color:#788693; height:100px; width:250px; font-size: 50px">Submit</button>
            </div>
        </main>
    );
}
export default Assignments;