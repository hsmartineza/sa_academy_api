export const loginTypeDef = `
type Log {
    code: Int!
    username: String!
    password: String!
}
input LogInput {
    username: String!
    password: String!
}`;


export const loginMutations = `
    logStudent(log: LogInput!): String
`;