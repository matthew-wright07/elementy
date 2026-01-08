import Wrapper from "../core/Wrapper";
import Sidebar from "../layout/Sidebar";
import Saved from "../elements/saved/Saved";
import Header from "../layout/Header";

export default function SavedPage(){
    return (
        <Wrapper>
            <Header/>
            <Sidebar/>
            <Saved/>
        </Wrapper>
    )
}