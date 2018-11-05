export const loginTypeDef = `
type Student {
    code: Int!
    username: String!
    password: String!
}
input StudentInput {
    username: String!
    password: String!
}`;


export const loginMutations = `
    logStudent(student: StudentInput!): Student!
`;