import { NextFunction, Request, Response } from "express";

// Middleware
export const validateAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessKey = req.headers["accesskey"];
    if (Number(accessKey) === 12300) {
      next();
    } else {
      return res.status(401).json({
        status: false,
        message: "Invalid Access Key",
      });
    }
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: "Error Request Occured",
    });
  }
};
