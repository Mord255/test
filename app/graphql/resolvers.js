const {User} = require("../Models/UserModel");

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		users: async () => {
			return await User.findAll();
		},
		user: async (_, { id }) => {
			return await User.findOne({where:{id}});
		},
	},
	Mutation: {
		createUser: async (_, { name, second_name, lastname, lastname_mother, email, birthdate, phone }) => {
            const emailExist = await User.findOne({where:{email}});
            if (emailExist) throw new Error("El Email ya Existe");
            // if (emailExist) return "El Email ya Existe";

            const newUser = User.build({name, second_name, lastname, lastname_mother, email, birthdate, phone});
            await newUser.save();
            // return {success:true,data:newUser,message:"Usuario Creado Exitosamente"};
			return newUser;
		},
	},
};