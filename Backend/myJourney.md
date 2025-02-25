# 09 February

Today, I set up the project base, created routes and controller functions, and started working on the register controller function. I also set up the Mongoose model and used the bcrypt library to hash the password before storing it in the database. To achieve this, I implemented Mongoose pre-middleware, which runs before saving the document and ensures the password is securely hashed.

# 12 February

Today, I started by implementing JWT token generation for users who register with the app. I used RandomKeygen to generate a random 256-bit secret key for my JWT. While working on this, I learned about Mongoose instance methods, which allow me to create a function within my model to generate a JWT token. Now, I can call this function directly inside my register function to generate tokens efficiently.

Next, i started working on the login functionality, where first i checked if the user provided both an email and password, if not, i threw a bad request error. Then, i used the findOne function to find the user by email, if the user exists i compare the passwords. To compare the passwords i used the mongoose instance methods and created a comparePassowrd function which takes in the password provided by the user and compares it with the hashed password stored in the document using the bcrypt's compare method. If everything is correct, I generate and send a JWT token.

# 16 February

I started off by creating the Job model by defining the Job Schema. Next, I created an authentication middleware where I verify the JWT token and decode its values, such as the userId and name. Then, I worked on my routes, adding functionality to all of them.

After that, I handled Mongoose errors in my error handler middleware. I created a custom error and added a series of if statements to catch default Mongoose errors, such as duplicate errors, validation errors, and cast errors. Finally, for improved security, I implemented some additional security packages such as xss, rate-limiter, cors and helmet.

