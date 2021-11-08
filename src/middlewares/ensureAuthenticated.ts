import { Request, Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

declare global {
  namespace Express {
    export interface Request {
      user: {
        displayname: string;
      }
    }
  }
}


interface DecodeRequest {
  iat: number,
  exp: number,
  sub: string,
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({msg:"JWT token is missing"});
  }
  
  const [, token] = authHeader.split(' ');
  try {
     const decoded = verify(token, authConfig.jwt.secret);
     const { sub } = decoded as DecodeRequest;
     
     request.user = {
      displayname: sub,
     };

     return next();

  } catch {
    return response.status(401).json({msg:"Invalid token jwt"});
  }
}

export default ensureAuthenticated;