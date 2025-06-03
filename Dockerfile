# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install ci
COPY . .
RUN npm run build


# Stage 2: Serve
FROM node:18-alpine
WORKDIR /app
RUN apk add --update nodejs npm && npm install -g serve@14.2.1
COPY --from=build /app/dist /app/dist
EXPOSE 5000
CMD ["serve", "-s", "dist", "-l", "5000"]