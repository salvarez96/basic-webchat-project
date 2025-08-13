import { NextFunction, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies?.username) {
    if (req.route.path === "/register") {
      res.redirect("/");
    }
    next();
  } else {
    res.redirect("/register");
  }
}