/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const categoryController = controllers && controllers.categoryTrees;
const linkController = controllers && controllers.links;
const courseController = controllers && controllers.courses;




export default (app) => {
  // user routes
  if (usersController) {
    app.post('/login', usersController.login);
    app.post('/signup', usersController.signUp);
    app.post('/logout', usersController.logout);
    app.post('/likelink', usersController.likeLinkToggle);
    app.post('/likecourse', usersController.likeCourseToggle);
    app.post('/bucket', usersController.addLinkToBucket);

  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if (passportConfig && passportConfig.google) {
    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }

  if (categoryController){
    app.post('/category', categoryController.addCategory);
    app.get('/category', categoryController.getChildrenCategories);
    app.post('/category/children', categoryController.getChildrenCategories);
    app.post('/category/link', categoryController.getAllLinks);
    app.get('/category/course', categoryController.getAllCourses);
    app.delete('/category', categoryController.deleteCategoryTree);
  }else{
    console.warn(unsupportedMessage('category routes'));
  }

  if(linkController){
    // app.put('/put/:name/:title', linkController.addLink)
    // app.post('/post/:name/:id', )
    // app.delete('/delete/:name/:id', linkController.deleteLink)
    app.put('/put/:name/:title', linkController.putLink);
    app.delete('/delete/:name/:id', linkController.deleteLink);
    app.post('/like', linkController.likeLink);
    app.post('/unlike', linkController.unlikeLink);
    app.post('/edit/:name/:id', linkController.editLink);
  }else{
    console.warn(unsupportedMessage('link routes'));
  }
 
};
