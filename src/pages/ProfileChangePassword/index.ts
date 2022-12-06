import { withStore } from '../../utils/Store';
import { ProfileChangePassword } from './profileChangePassword';

const withUser = withStore((state: any) => ({ ...state.user }));

export default withUser(ProfileChangePassword);
