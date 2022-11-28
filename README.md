# Blue Ocean

## About

This project comprises of a social media web application dedicated for intramural and recreational sports users in the local community. Users can register and login, create a profile, interact online via posts, multimedia, and cheers (likes), join sports common-interest groups, and make purchases via the store.

This project was built with:

<div align="center" width="100%">
  <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</div>

## Table of Contents

- [Blue Ocean](#blue-ocean)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Login / Authentication](#login--authentication)
    - [Home Page](#home-page)
    - [Profile Page](#profile-page)
    - [Team Page](#team-page)
    - [Store and Checkout](#store-and-checkout)
  - [Getting Started](#getting-started)
  - [Environment Variables](#environment-variables)
  - [Contributors](#contributors)

## Features

### Login / Authentication

| Login Screen
:-:
<img src="https://user-images.githubusercontent.com/104607182/204184072-b662e755-5ad3-441a-a142-55c80d5132bb.png" width="400">|

<b>Features</b>

- Bullet point 1
- Bullet point 2
- Bullet point 3

Built by <a href="https://github.com/cmfung">Connor Fung</a>

### Home Page

| Home Feed
:-:
<img src="https://user-images.githubusercontent.com/104607182/204184072-b662e755-5ad3-441a-a142-55c80d5132bb.png" width="400">|

<b>Features</b>

- Bullet point 1
- Bullet point 2
- Bullet point 3

Built by <a href="https://github.com/KevZhang11">Kevin Zhang</a>

### Profile Page

| Individual Profile
:-:
<img src="https://user-images.githubusercontent.com/104607182/204184072-b662e755-5ad3-441a-a142-55c80d5132bb.png" width="400">|

<b>Features</b>

- Bullet point 1
- Bullet point 2
- Bullet point 3

Built by <a href="https://github.com/keewook2">Kee Wook Lee</a>

### Team Page

| Team Profile
:-:
<img src="https://user-images.githubusercontent.com/104607182/204184072-b662e755-5ad3-441a-a142-55c80d5132bb.png" width="400">|

<b>Features</b>

- Bullet point 1
- Bullet point 2
- Bullet point 3

Built by <a href="https://github.com/lgoodcode">Lawrence Good</a>

### Store and Checkout

|                                                                    Store                                                                    |                                                                  Checkout                                                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/104607182/204375311-46964077-6412-4e08-aeee-f2965707722a.gif" height="165" width="350"> | <img src="https://user-images.githubusercontent.com/104607182/204375405-ac4ae1e9-dff0-4386-a510-85e170068a76.gif" height="165" width="350"> |

<b>Features</b>

- Product cards that change style on hover and will display a modal when clicked
- Pop-up modal that displays product & sku information, and allows a user to add an item to their cart
- Checkout page that displays all items in user's cart and dynamically calculates total

Built by <a href="https://github.com/quyencodes">Quyen Hoang</a>

## Getting Started

1. Clone the repo
   ```bash
   $ git clone https://github.com/FruitLoops-Hackreactor/fruitloops.git
   ```
2. Install NPM packages
   ```bash
   $ npm install
   ```
3. Create your .env file (make a copy from example.env)
   ```bash
   PORT='YOUR PORT HERE'
   ```
4. To run the application in local development environment
   ```bash
   npm run dev:client
   (open another terminal)
   npm run dev:server
   ```
5. To run the application in deployed environment
   ```
   npm run build
   npm run start
   ```

## Environment Variables

`PORT` - The port that the express server will run on <em>(default: 3000)</em>\
`DB_HOST` - The host name / address of the PostgreSQL database\
`DB_USER` - The user of the PostgreSQL database\
`DB_PASS` - The password to the PostgreSQL database\
`DB_DATABASE` - The name of the PostgreSQL database

## Contributors

**Connor Fung**\
<img src="https://user-images.githubusercontent.com/104607182/203012698-306e2621-6628-4959-9961-a0ff816d6bc3.png" alt="Connor Fung" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/connor-fung/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cmfung/)

**Lawrence Good**\
<img src="https://user-images.githubusercontent.com/104607182/203012926-6fd6bc51-da07-40f2-b146-a760f66958ba.png" alt="Lawrence Good" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lawrence-good-dev/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lgoodcode)

**Quyen Hoang**\
<img src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png" alt="Quyen Hoang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/quyenduhoang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/quyencodes/)

**Kee Wook Lee**\
<img src="https://user-images.githubusercontent.com/104607182/203012803-25579121-aa4a-4d88-ba55-4665965a417e.png" alt="Kee Wook Lee" width="72">

<!-- REMEMBER TO UPDATE KEE's LINKEDIN -->

[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/keewook2/)

**Kevin Zhang**\
<img src="https://user-images.githubusercontent.com/104607182/203013046-19984606-3c6e-4c17-a1f5-da02dffdf54b.png" alt="Kevin Zhang" width="72">\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kevinhyzhang/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KevZhang11/)
