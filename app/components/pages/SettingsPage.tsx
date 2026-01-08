import Wrapper from "../core/Wrapper";
import Sidebar from "../layout/Sidebar";
import Settings from "../elements/settings/Settings"
import Header from "../layout/Header";

export default function SettingsPage(){
    return (
        <Wrapper>
            <Header/>
            <Sidebar/>
            <Settings/>
        </Wrapper>
    )
}