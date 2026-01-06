import Grid from "../core/Grid";
import Sidebar from "../layout/Sidebar";
import Dashboard from "../elements/dashboard/Dashboard"

export default function HomePage(){
    return (
        <Grid>
            <Sidebar/>
            <Dashboard/>
        </Grid>
    )
}