const express = require('express')
const router = express.Router()
const User = require('./user-schema')

/*  When the url /update is hit, the function bellow will get the user id through the input field. Then it will check if the id matches
an object (user) in the databse. If it does, it will take that object and replace all properties with the matching input fields. But only
if they are filled in. Then it will save this new object which will override the existing one. At last, the profile-overview
page will be rendered again with the freshly updated data.  */

router.post('/update', (req, res) => {
  console.log('running')
  const id = req.body.id
  console.log(id)
  User.findOne({ _id: id }, (err, foundObject) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      if (!foundObject) {
        console.log('User not found in database')
        res.status(404).send()
      } else {
        console.log('user found: ', foundObject)
        if (req.body.firstName) {
          foundObject.firstName = req.body.firstName
        } if (req.body.lastName) {
          foundObject.lastName = req.body.lastName
        } if (req.body.email) {
          foundObject.email = req.body.email
        } if (req.body.password) {
          foundObject.password = req.body.password
        } if (req.body.gender) {
          foundObject.gender = req.body.tab
        } if (req.body.age) {
          foundObject.age = req.body.age
        } if (req.body.address) {
          foundObject.address = req.body.address
        } if (req.body.disability) {
          foundObject.disability = req.body.disability
        } if (req.body.hobbies) {
          foundObject.hobbies = req.body.hobbies
        } if (req.body.about) {
          foundObject.about = req.body.about
        }

        foundObject.save((err, updatedObject) => {
          if (err) {
            req.flash('failedUpdate', 'Er is iets mis gegaan. Probeer het opnieuw.')
            console.log(err)
            res.status(500).send()
          } else {
            req.flash('succesUpdate', 'Je gebruikersprofiel is geüpdatet')
            res.render('profile-overview', {
              succesLogin: req.flash('succesLogin'),
              succesUpdate: req.flash('succesUpdate'),
              title: 'Profile overview',
              firstLink: 'Ik ben', // Top nav menu item
              secondLink: 'Ik ben opzoek naar',
              firstAnchor: '../profile-overview', // Top nav menu anchor links
              secondAnchor: '../profile-overview',
              userData: updatedObject
            })
          }
        })
      }
    }
  })
})

module.exports = router
