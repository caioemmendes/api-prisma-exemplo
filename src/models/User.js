import { prisma } from "../../config/prisma.js"

export const createUser = async (name, email) => {
    try {
        return await prisma.user.create({
            data: {
                name,
                email,
            }
        })
    }
    catch (error){
        if (error.code == "P2002") 
            throw new Error('Email Address already exists')    
        throw new Error(`Failed to create user: ${error.message}`)  
    }
}