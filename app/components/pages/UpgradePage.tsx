import Wrapper from "../core/Wrapper";
import Sidebar from "../layout/Sidebar";
import Upgrade from "../elements/upgrade/Upgrade";
import Header from "../layout/Header";

export default function UpgradePage() {
    return (
            <Wrapper>
                <Header/>
                <Sidebar/>
                <Upgrade/>
            </Wrapper>
    )
}