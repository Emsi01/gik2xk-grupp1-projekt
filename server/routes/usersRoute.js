const router = require("express").Router();
const db = require("../models");
const validate = require('validate.js');
const userService = require('../services/userService');


const constraints = {
  email: {
    length: {
      minimum: 4,
    maximum: 200,
    tooShort: "^E-postadressen måste vara minst %{count} tecken lång.",
    tooLong: "^E-postadressen får inte vara längre än % {count} tecken lång."
   },
   email: {
    message: "^E-postadressen är i ett felaktigt format."
   }
    
  },
  username: {
    length: {
      minimum: 3,
    maximum: 50,
    tooShort: "^Användarnamnet måste vara minst %{count} tecken långt.",
    tooLong: "^Användarnamnet får inte vara längre än % {count} tecken långt."
   }
  },
};

//Hämta alla produkter som användaren lagt i senaste varukorgen 
router.get("/:id/getCart", (req, res) => {
  const id = req.params.id;
  userService.getByUser(id).then((result) => {
    res.status(result.status).json(result.data);
   });
});

// Nedan följer crud + get 
router.get("/", (req, res) => {
   db.users.findAll().then((result) => {
    res.send(result);
   })
});

router.post("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  if(invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.users.create(user).then(() => {
      res.send("Användaren skapades");
    }); 
  }
});

router.put("/", (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || 'Id är obligatoriskt.');
  } else {
    db.users
     .update(user, {
       where: { id: user.id }
     })
     .then(() => {
        res.send("Användaren ändrades");
     });
  }
});

router.delete("/", (req, res) => {
    db.users
    .destroy({
      where: { id: req.body.id }
    }).then(() => {
        res.send("Användaren raderades");
    });
});

module.exports = router;