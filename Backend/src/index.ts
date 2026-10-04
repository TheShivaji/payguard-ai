import express from "express";

const app = express()

app.get("/health", (_req, res) => {
    res.json({
        success: true,
        message: "PayGuard API is running"
    });
});


export default app;