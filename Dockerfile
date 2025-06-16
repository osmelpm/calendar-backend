FROM node:alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev
USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]

