# **API for managging notes for users and filter by category**

The next project will follow the next topics/requirements to manage Users, notes, and filter by category:

## 1. Requirements / Intro

You need to implement a simple web application that allows you to take notes, tag, and filter them. The development is divided into two phases:

- **Phase 1**: Note creation
- **Phase 2**: Tag application and filtering

### Phase 1

#### User Stories

- As a user, I want to be able to create, edit, and delete notes.
- As a user, I want to archive/unarchive notes.
- As a user, I want to list my active notes.
- As a user, I want to list my archived notes.

### Phase 2

#### User Stories

- As a user, I want to be able to add/remove categories to notes.
- As a user, I want to be able to filter notes by category.

# Resolution

## The project is completely done and deploy in a Railway server (backend side)

- The backend side was implemented with the next topics:
- using typescript
- using RestAPI and following an architectural structure of routes, controllers, services, repositories
- using Sequelize as ORM and using models like: urers, notes, categories, and notecategory as a many to many relation
- using a MySQL as Relational Database
- using swagger to follow all the documentation about the different endpoints to try testing

The backend app is deployed (both the backend and the MySQL database) in a railway server for testing.
Follow this swagger documentation to access the API documentation and try testing:

"https://hirelens-challenges-production.up.railway.app/api-docs/#/"

##  NOTES: 
challenges done and challenges pending:
Done:
- I had never deployed an application in a cloud server like railway, was new for me
- The implementation of swagger was also new

Pending:
- The frontend side could not be completed, I have no experience in frontend(sorry for that)
- I like to learn new technologies, and my goal is to learn the frontend side to complete my profile as fullstack developer.

Thanks for this opportunity
