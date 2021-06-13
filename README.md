# EventReg - React
## Description

Initial scope is to register an attendee for an event. Currently multi-step checkout process using Formik and Material UI, using MongoDB.

Link to live demo: [EventRegi Demo](https://eventregi.herokuapp.com/)

This repo uses an API I am developing in another repo for data management. Link to my API repo: [EventRegAPI Repo](https://github.com/jamespro/eventreg/)

![Event Reg](https://raw.githubusercontent.com/jamespro/eventregi/main/public/banner.png)

## Tech used
* JavaScript

MERN stack:
* MongoDB / Mongoose
* Express
* React
* Node.js

Also: 
* Material UI - helps with layout and multi-step
* Formik - easier form management

## Roadmap

Future features may include:
* Multi-page registration
  * Demos
  * Conditional Demos
  * Items
  * Sessions
  * Visa
  * Invite a friend
  * Payment
* Registrant admin: Update record
* Upgrade / Add items
* Exhibitor booth staff registration
* Event admin
  * Use "react-admin" as admin code?
  * Create, View, Edit, Delete
* Reporting with graphic packages

## TODO
- [x] Change TITLE, metadata, favicon
- [x] Hook up to database
- [x] Database: Save submitted information to MongoDB
- [x] Fix browser error on step 1
- [x] Reginfo: Pull Countries from a data source 
- [x] Make API url configurable to use remote when on hosting and local api when localhost
- [x] Confirm: Link to return to start
- [ ] UUID library - node: Check out this package, put UUID into route so you can track progress, return to step
- [ ] ADD SIZZLE
- [ ] FILL IN README
- [ ] Add header banner
- [ ] DESIGN: LANDING PAGE (Add a step with just image and arrow?)
- [ ] Reginfo: Remove "use address for payment details"?
- [ ] ITEMS: Add step where you choose 1 of three items
- [ ] Payment: Show you order total
- [ ] Review: Show items you chose
- [ ] Payment: Save Order Total with order
- [ ] Confirm step: return an ordernumber, order details after submit successfully
- [ ] Payment: Why did layout change? seems odd. it changed when I added Country/ State dropdowns

## Improvements / Optimizations
- [ ] Nav: put text below step, to save space?
- [ ] Layout: wider, taller? Test on mobile
- [ ] Payment: Accept/validate other types of credit cards
- [ ] Database: split data into User, Order, Item, Payment
- [ ] Reginfo: Zipcode should accept Canada and other forms of zipcode
- [ ] Reginfo: Have State populate only if country = United States of America (Requires state management?)
- [ ] Reginfo: Add Canada provinces and Mexico states, and only load for each of those countries
- [ ] Reginfo: Make the Country and State data source MongoDB?
- [ ] Reginfo: Can Formik pre-fill fields such as Country?
- [ ] Reginfo: Can Formik get settings for fields from a data source?
- [ ] Database: save submitted changes as you go?
- [ ] Database: Get form info from database (e.g. fields)
- [ ] Should I take out Material UI to make it easier to use Formik features? Like having fields dependent on other fields.
- [ ] Send confirmation email
- [ ] Auth: Add final step to ask user if they want to add a username and email, for authentication and future login
- [ ] Reginfo: Zipcode, lookup and set state and maybe country

