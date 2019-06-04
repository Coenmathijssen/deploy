const express = require('express')
const router = express.Router()
const User = require('./user-schema')
const multer = require('multer')

/*  This page will retreive all data filled into the input fields and connect them to the Schema defined in user-schema. If
all fields are filled in correctly and the email is unique, the new user will be saved into the database. Now the user will be
able to login and will be redirected to the login page. If an error occurs, they will be redirected to the create-account page
to try again. */

// Watched a tutorial from Acedemind to learn how to use multer - https://www.youtube.com/watch?v=srPXMt1Q0nY
// Setting how the images are stored and which name they will get -> the date when the file was uploaded, followed by filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

// A single profile profile picture can be uploaded.
const upload = multer({ storage })

// register new user
router.post('/register', upload.single('profilePic'), (req, res) => {
  const newuser = new User()
  newuser.firstName = req.body.firstName
  newuser.lastName = req.body.lastName
  newuser.email = req.body.email
  newuser.password = req.body.password
  newuser.disability = req.body.disability
  newuser.gender = req.body.tab
  newuser.age = req.body.age
  newuser.address = req.body.address
  newuser.hobbies = req.body.hobbies
  newuser.about = req.body.about
  newuser.profilePic = req.file.path

  newuser.save((err, savedUser) => {
    if (err) {
      console.log(err)
      req.flash('failedRegister', `De verplichte invulvelden (*) zijn onjuist ingevuld of de email is al geregistreerd. Probeer opnieuw.`)
      res.redirect('/create-account')
      return res.status(500).send
    } else {
      req.flash('succesRegister', `User succesfully registered!`)
      res.redirect('/profile-overview')
      return res.status(200).send
    }
  })
})

module.exports = router
