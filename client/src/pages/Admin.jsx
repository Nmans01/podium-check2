
function Admin() {

    // TODO: This page should use <table> to show admins lists of database tables such as users and rooms. Admins should be able to add and delete database entries here.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl">Admin</h2>
            <table style="background-color:grey; height:auto; width:600px; border: 2px solid black; border-collapse: collapse; marhin-left:100px; position:relative; left:100px; top:50px;">
                <tbody>
                    <tr>
                        <th style="height:100px; border: 2px solid black; border-collapse: collapse; font-size:35px">Users</th> 
                        <th style="border: 2px solid black; border-collapse: collapse; font-size:35px">User #</th>
                    </tr>
                    <tr>
                        <td style="border: 2px solid black; border-collapse: collapse">Row 2 Col 1</td>
                        <td style="border: 2px solid black; border-collapse: collapse; text-allign:center">Row 2 Col 2</td>
                    </tr>
                    
                </tbody>
            </table>
        </main>
    );
}
export default Admin;