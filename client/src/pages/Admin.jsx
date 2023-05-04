
function Admin() {

    // TODO: This page should use <table> to show admins lists of database tables such as users and rooms. Admins should be able to add and delete database entries here.
    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md flex flex-col gap-2">
            <h2 class="text-4xl">Admin</h2>
            <table style="background-color:grey; height:400px;">
                <tbody>
                    <tr>
                        <th>Users</th>
                        <th>User #</th>
                    </tr>
                    <tr>
                        <td>Row 2 Col 1</td>
                        <td>Row 2 Col 2</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}
export default Admin;