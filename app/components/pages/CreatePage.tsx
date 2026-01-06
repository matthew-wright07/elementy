import Grid from "../core/Grid"
import Sidebar from "../layout/Sidebar"
import Create from "../elements/create/Create"

export default function CreatePage(){
    return (
        <>
            <Grid>
                <Sidebar/>
                <Create/>
            </Grid>
        </>
    )
}