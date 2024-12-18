Running the Project Locally:
  Install Dependencies:npm install
  Set Up Environment Variables: Create .env file
  Run the Backend : node server.js
  Run the Frontend : npm start

API Base URL: http://localhost:4000

Assumptions:
   a)The app assumes that the backend and frontend are separate applications, with the frontend sending HTTP requests to the backend.
   b)The backend assumes that CORS is enabled to allow requests from the frontend's domain .
   c)The database is assumed to be a MySQL database, with proper credentials and permissions set for access from the backend.

Here is ScreenShot of webPages look likes: 
   List Screen:
 ![Screenshot from 2024-12-18 14-42-03](https://github.com/user-attachments/assets/b69acf10-3367-4de7-9a1c-65e12cae2eb7)
 ![Screenshot from 2024-12-18 14-42-14](https://github.com/user-attachments/assets/daf5e716-c39c-4df8-8f57-c65c41e1c649)

  Details Screen:
  ![Screenshot from 2024-12-18 14-42-24](https://github.com/user-attachments/assets/09d513be-de9b-493c-ad20-a7ad13c504d7)

  Add User:
  ![Screenshot from 2024-12-18 15-05-29](https://github.com/user-attachments/assets/483e4049-654e-4915-affb-8d0caf35ff9f)

 Problem: 
   I have deployed the frontend of my application, and it works fine on the deployed link. However, the backend functionality does not work when accessed through the deployed URL. Although the backend runs properly on my local machine, it 
  is not functioning correctly when deployed. I have tried deploying the backend, but I am encountering errors, and it is not running as expected on the deployed server.


