import { withStore } from '../../utils/Store';
import { Chats } from './chats';

const withUser = withStore((state) => ({ ...state }));

export default withUser(Chats);
