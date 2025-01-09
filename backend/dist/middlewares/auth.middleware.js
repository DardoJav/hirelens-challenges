import jwt from 'jsonwebtoken';
export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        req.user = decoded; // Guardar datos del usuario en la request
        next();
    }
    catch (error) {
        res.status(403).json({ error: 'Token inválido o expirado' });
    }
};
