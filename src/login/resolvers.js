import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		logStudent: (_, { student }) =>
			generalRequest(`${URL}`, 'POST', student),
	}
};

export default resolvers;