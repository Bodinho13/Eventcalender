import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (err instanceof Error) {
        return res.status(500).json({message: err.message});
    }

    return res.status(500).json({message: "Unknown error"});
}