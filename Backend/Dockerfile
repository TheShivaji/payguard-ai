# ---------- Build Stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY tsconfig.json ./
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src

RUN npx prisma generate

RUN npm run build


# ---------- Production Stage ----------
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev --verbose

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.ts ./

EXPOSE 5000

CMD ["node", "dist/server.js"]