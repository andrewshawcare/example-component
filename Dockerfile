FROM node:5.9.1

EXPOSE 80

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
RUN npm install

COPY . .

ENTRYPOINT ["npm"]
CMD ["start"]
