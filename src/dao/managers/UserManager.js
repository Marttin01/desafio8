import { userModel } from "../../entities/models/userModel.js";
import { hashear } from "../../utils/criptografia.js";

export class UsersManager{
    constructor() {
        this.userDb = userModel
    }

    async save(dataUser){
        let hashUser = {
            ...dataUser,
            password:hashear(dataUser.password)
        }

        let saveUser = await this.userDb.create(hashUser)
        saveUser = JSON.parse(JSON.stringify(hashUser))
        return saveUser
    }

    async getUsers () {
        let users = await this.userDb.find().lean()
        return users
    }

    async getUsersByEmail (email) {
        let user = await this.userDb.findOne({email:email}).lean()
        if(!user) throw new Error('Not found')
        return user
    }
}

export const UserManager = new UsersManager()