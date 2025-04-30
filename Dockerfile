FROM node 

WORKDIR /developer/nodejs/school-management

ENV NODE_ENV=production

COPY . . 

RUN npm ci

RUN cd src && npx sequelize db:create
RUN cd src && npx sequelize db:migrate

CMD ["npm" , "start"]
