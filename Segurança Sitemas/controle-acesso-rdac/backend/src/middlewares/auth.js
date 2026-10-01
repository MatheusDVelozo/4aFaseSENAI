import jwt from "jsonwebtoken"

export const authenticate = (req,res,next)=>{
    const [sheme, token] = (req.headers.authorization || "").split(" ")
    
    if (sheme !== "Beare" || !token) {

        return res.status(401).json({message:"Login necessário"})

        
    }

    try {
        
        req.user = jwt.verify(token, process.env.JWT_SECRET,{algorithms:["HS256"]})

    } catch (error) {
        return res.status(401).json({message: "Sessão invalida ou expirada"})


    }

    next()
}


export const requireRole = (role)=>{


    return (req,res,next) =>{

        if (req.user?.role !==role) {

            return res.status(403).json({message:"Acesso negado"})

            
        }

        next()
    }

}