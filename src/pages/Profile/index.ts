import { withStore } from '../../utils/Store';
import { Profile } from './profile';

const withUser = withStore((state: any) => ({ ...state.user }));

export default withUser(Profile);
