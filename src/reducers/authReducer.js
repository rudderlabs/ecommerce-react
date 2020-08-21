import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from 'constants/constants';
import firebase from 'firebase/firebase';
import * as rudderanalytics from "rudder-js"

const initState = {
	// id: 'test-123',
	// role: 'ADMIN',
	// provider: 'password'
};

export default (state = initState, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS:

			return {
				id: action.payload.id,
				role: action.payload.role,
				provider: action.payload.provider
			};
		case SIGNOUT_SUCCESS:
			return {};
		default:
			return state;
	}
};
