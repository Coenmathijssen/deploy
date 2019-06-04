// Render the right pages and data per page
const express = require('express')
const router = express.Router()

/*  All the urls that will be hit will render the right pages in this file. All the functions will first check if a session exists.
If not, the user will be redirected to the login page. If the session does exist, the page of the given url will be rendered.
The content needed to be rendered will be passed along in the res.render functions. */

// Rendering homescreen
router.get('/', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('index', {
      title: 'Homescreen',
      firstLink: 'Ontdek', // Top nav menu item
      secondLink: 'In de buurt',
      firstAnchor: '../', // Top nav menu anchor links
      secondAnchor: '../',
      name: 'Nena de Vries', // Profile card info
      disability: 'Syndroom van down',
      age: '22 jr.',
      distance: '9km'
    })
  }
})

// Rendering matches screen
router.get('/matches', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('matches', {
      title: 'Matches',
      firstLink: 'Alle matches', // Top nav menu item
      secondLink: 'Berichten',
      firstAnchor: '../matches', // Top nav menu anchor links
      secondAnchor: '../messages',
      name1: 'Nena de Vries', // The names of all the overview cards in matches,
      name2: 'Nora Goedhoudt',
      name3: 'Frederique Veenstra',
      name4: 'Roana Neijsen',
      name5: 'Eva Rosheuvel',
      name6: 'Sanne Reij'
    })
  }
})

// Rendering messages screen
router.get('/messages', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('messages', {
      title: 'Messages',
      firstLink: 'Alle matches', // Top nav menu item
      secondLink: 'Berichten',
      firstAnchor: '../matches', // Top nav menu anchor links
      secondAnchor: '../messages'
    })
  }
})

// Rendering profile overview screen
router.get('/profile-overview', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('profile-overview', {
      succesLogin: req.flash('succesLogin'),
      succesUpdate: req.flash('succesUpdate'),
      title: 'Profile overview',
      firstLink: 'Ik ben', // Top nav menu item
      secondLink: 'Ik ben opzoek naar',
      firstAnchor: '../profile-overview', // Top nav menu anchor links
      secondAnchor: '../profile-overview',
      userData: req.session.userData
    })
  }
})

// Rendering profile detail screen
router.get('/profile-detail', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('profile-detail', {
      failedDelete: req.flash('failedDelete'),
      title: 'Messages',
      firstLink: 'Alle matches', // Top nav menu item
      secondLink: 'Berichten',
      firstAnchor: '../matches', // Top nav menu anchor links
      secondAnchor: '../messages',
      userData: req.session.userData
    })
  }
})

// Rendering the create account screen
router.get('/create-account', (req, res) => {
  res.render('create-account', {
    failedRegister: req.flash('failedRegister'),
    title: 'Login page'
  })
})

// Rendering the login screen
router.get('/login', (req, res) => {
  if (!req.session.userData) {
    res.render('login', {
      succesRegister: req.flash('succesRegister'),
      errorLogin: req.flash('failedLogin'),
      title: 'Login page',
      userData: req.session.userData
    })
  } else {
    res.redirect('/login')
  }
})

// Verifying if the user has a session and redirecting to the homepage
router.get('/dashboard', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not allowed to log in`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    console.log(`You're succesfully logged in!`)
    res.status(200).send()
    res.redirect('/profile-overview')
  }
})

// Rendering the profile page, but editable
router.get('/update', (req, res) => {
  if (!req.session.userData) {
    console.log(`You're not logged in. Please login first.`)
    res.status(401).send()
    res.redirect('/login')
  } else {
    res.render('update', {
      userData: req.session.userData
    })
  }
})

// Handling the 404 error page
router.get('*', function (req, res) {
  res.status(404).send('<h1>I`m sorry, the page you were looking for is not here <br> 404</h1>')
})

module.exports = router
