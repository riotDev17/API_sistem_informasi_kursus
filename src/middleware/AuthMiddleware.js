import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({
        status: 'Unauthorized',
        message: 'Token tidak tersedia',
      })
      .end();
  }

  try {
    const token = authorization.split(' ')[1];
    req.admin = jwt.verify(token, process.env.ACCESS_TOKEN);
  } catch (e) {
    return res
      .status(401)
      .json({
        status: 'Unauthorized',
        message: 'Token tidak valid',
      })
      .end();
  }

  next();
};
