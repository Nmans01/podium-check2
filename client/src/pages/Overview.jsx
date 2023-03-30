
function Overview() {

    return (
        <main class="bg-slate-700 mx-2 p-2 rounded-md grid grid-flow-row grid-rows-[min-content_1fr] gap-2">
            {/*<h2 class="text-2xl">Overview</h2>*/}
            <section class="rounded-sm p-2 flex flex-col gap-5 pt-72 text-3xl">
                <span class="text-8xl font-bold">Welcome back!</span>
                <p>
                    You have nothing scheduled for today.<br/>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    You have nothing scheduled for today.
                    Your next assignment is for {"{day}"}, {"{date}"}.<br/>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    Your assignment today is to rooms {"{roomGroup rooms}"}, with {"{other employees}"}.<br/>
                    <a href="#">[Go to form page]</a>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    The next round of podium checks is scheduled for {"{date}"}. Some groups still need to be assigned.<br/>
                    <a href="#">[Assign groups]</a>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    The next round of podium checks is scheduled for {"{date}"}. All groups have been assigned.<br/>
                    <a href="#">[View groups]</a>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    All groups have been assigned for today.<br/>
                    <a href="#">[View groups]</a>
                    <a href="#">[View past forms]</a>
                </p>
                <p>
                    {"{amount}"} groups are still unassigned for today!<br/>
                    <a href="#">[Assign groups]</a>
                    <a href="#">[View past forms]</a>
                </p>
            </section>
        </main>
    );
}
export default Overview;