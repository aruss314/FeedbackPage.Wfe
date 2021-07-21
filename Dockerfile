FROM node:14-alpine AS BUILD_IMAGE

# couchbase sdk requirements
RUN apk update && apk add yarn && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# install dependencies
RUN yarn --frozen-lockfile

COPY . .

# lint & test
# RUN yarn lint & yarn test
# no meaningful tests yet

# build application
RUN yarn build

# remove development dependencies
RUN npm prune --production

FROM nginx:1.17
COPY --from=BUILD_IMAGE /usr/src/app/build/ /usr/share/nginx/html
