import { withStore } from '../../utils/Store';
import { ProfileChangeData } from './profileChangeData';

const withUser = withStore((state: any) => ({ ...state.user }));

// @ts-ignore
export default withUser(ProfileChangeData);
