import jwt from 'jsonwebtoken';

export const AuthMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({
        status: 'Unauthorized',
        message: `HTTP 401 : Token tidak tersedia`,
      })
      .end();
  }

  try {
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.users = decodedToken;
  } catch (e) {
    return res
      .status(401)
      .json({
        status: 'Unauthorized',
        message: 'HTTP 401 : Token tidak valid',
      })
      .end();
  }

  next();
};
