import { withStore } from '../../utils/Store';
import { Profile } from './profile';

const withUser = withStore((state: any) => ({ ...state.user }));

// @ts-ignore
export default withUser(Profile);
