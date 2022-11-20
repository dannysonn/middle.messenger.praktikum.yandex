import {withStore} from "../../utils/Store";
import {ProfileChangeData} from "./profileChangeData";

const withUser = withStore(state => ({...state.user}));

export default withUser(ProfileChangeData);