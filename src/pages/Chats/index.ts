import { withStore } from '../../utils/Store';
import { Chats } from './chats';

const withUser = withStore((state) => ({ ...state }));

// @ts-ignore
export default withUser(Chats);
