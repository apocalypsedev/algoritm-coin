import passport from "passport"
import { Strategy } from "passport-local"
import { comparePassword } from "../utils/helpers.mjs"
import { Mentor } from "../models/mentor.model.mjs";


passport.serializeUser((mentor, done)=>{
    done(null, mentor.id);
})
passport.deserializeUser(async (id, done)=>{
    try {
        const findMentor = await Mentor.findById(id);
        if(!findMentor) throw  new Error('Mentor not found');
        done(null, findMentor)
    } catch (error) {
        done(error, null)
    }
})

export default passport.use(
    new Strategy( async( username, password, done)=>{
        try {
            const findMentor = await Mentor.findOne({username});
            if(!findMentor) throw  new Error('Mentor not found');
            if(!comparePassword(password, findMentor.password))
                throw new Error('Bad Credentials')
            done(null, findMentor)
        } catch (error) {
            done(error, null)   
        }
    })
)