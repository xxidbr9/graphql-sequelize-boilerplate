import * as studentServices from "../services/StudentServices";

export const StudentResolvers = {
    Query: {
        getStudentById: async(root, args, context) => {
            const getStudent = await studentServices.getStudentById(args.id);
            return getStudent;
        },
        getAllStudents: async (root, args, context) => {
            const listStudents = await studentServices.getAllStudents();
            return listStudents;
        }
    },
    Mutation: {
        createStudent: async (_root, args, _context) => {
            const data = {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                hobbyList: args.hobbyList
            }
            return await studentServices.createStudent(data);
        },
        updateStudent: async (_root, args, _context) => {
            const data = {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                id: args.id,
                hobbyList: args.hobbyList
            }
            return await studentServices.updateStudent(data);
        }
    }
}