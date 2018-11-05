import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Mutation: {
		logStudent: (_, { log }) =>
			generalRequest(`${URL}`, 'POST', log),
	}
};

export default resolvers;		