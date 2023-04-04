import { A } from "@solidjs/router";

function Header() {

    return (
        <header class="grid grid-flow-col grid-cols-[1fr_1fr_minmax(50px,1fr)] gap-2 p-2 bg-slate-600">
            <div class="flex justify-start">
                <h1><A href="/">Lighthouse Podium Check</A></h1>
            </div>
            <nav class="justify-center flex gap-3 flex-wrap">
                <A href="/form" class="hover:underline">Form</A>
                <A href="/assignments" class="hover:underline">Assignments</A>
                <A href="/admin" class="hover:underline">Admin</A>
            </nav>
            <div class="flex justify-end">
                <A href="/login" class="hover:underline">Sign in</A>
            </div>
        </header>
    );
}
export default Header;