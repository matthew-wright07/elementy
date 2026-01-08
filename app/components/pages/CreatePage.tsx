import Wrapper from "../core/Wrapper"
import Sidebar from "../layout/Sidebar"
import Create from "../elements/create/Create"
import Header from "../layout/Header"

export default function CreatePage(){
    return (
        <>
            <Wrapper>
                <Header/>
                <Sidebar/>
                <Create/>
            </Wrapper>
        </>
    )
}