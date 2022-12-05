import { withStore } from '../../utils/Store';
import { Profile } from './profile';

const withUser = withStore((state) => ({ ...state.user }));

export default withUser(Profile);
