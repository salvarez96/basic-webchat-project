import { NextFunction, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies?.username) {
    if (req.route.path === "/register") {
      return res.redirect("/");
    }

    return next();
  } else {
    if (req.route.path === "/register") {
      return next()
    };

    return res.redirect("/register");
  }
}