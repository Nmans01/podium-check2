
function Assignments() {

    // TODO: This will be the page where supervisors can create assignments, 
    // by selecting a date, selecting a RoomGroup out of the list of RoomGroups, and then specifying which employees should be assigned out of the list of employees.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl">Assignments</h2>
            <button style="background-color:#788693; height:100px; width:400px; font-size: 45px; float:left;">
                Esbenshade
                <div style="background-color:#EADD66; width:50px; height:50px; border-radius:25px; border:3px solid white; float:right; margin-right:25px; margin-top:10px; font-size: 30px;">
                    <span>
                        3
                    </span>
                </div>
            </button>
            <hr style="background-color:black; height:5px; border: none; width:95%; margin: auto"/>
            <button style="background-color:#788693; height:80px; width:250px; font-size: 50px; position:relative; float:left;">
                Nick
                <div style="background-color:#A2E1A5; width:85px; height:50px; border-radius:25px; border:3px solid white; float:right; margin-right:25px; margin-top:15px; font-size: 30px;">
                    <span>
                        Esb
                    </span>
                </div>
            </button>


            <button style="background-color:#788693; height:100px; width:250px; font-size: 50px; position:relative; left:1000px">Submit</button>
        </main>
    );  
}
export default Assignments;