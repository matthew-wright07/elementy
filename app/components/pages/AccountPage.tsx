import Wrapper from "../core/Wrapper";
import Sidebar from "../layout/Sidebar";
import Account from "../elements/account/Account"
import Header from "../layout/Header"

export default function SettingsPage(){
    return (
        <Wrapper>
            <Header/>
            <Sidebar/>
            <Account/>
        </Wrapper>
    )
}