### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive


### 🚩 Project-3 - The Vault (Group) ###

The third project of the software engineering immersive course at GA London. The assignment was to create a **full-stack application**. This project was completed in a team of 4 within a week.

The vault is an online lifestyle magazine with four different themes: second-hand clothes swap, popular locations, hot topics, and editor-selected music album, films, and book recommendations. Users will be able to register to the site. On different pages, logged in users can leave or delete comments under the articles. 

Visit the site here - [The Vault](https://project-3-the-vault.herokuapp.com/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/The-Vault)

#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/U4XNOpYXfVvq8XFl62/giphy.gif)



### :rocket: Get Started ###

* Clone or download the repo
* `npm init`
* Run `mongod --dbpath ~/data/db` if you are using MacOS Catalina. Otherwise run `mongod`
* `npm run seed` for seeding
* `npm run serve:back` to run back-end
* `npm run serve:front` to run front-end


### 📝 Brief ###

* **Build a full-stack application** by making your own back-end and front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design**
* A **working app** hosted on the internet


### 🕹 Technologies used ###

* HTML5
* CSS3
* JavaScript (ES6)
* MongoDB & Mongoose
* Node.js
* Express
* React and React extensions
* Webpack
* Bulma
* Babel
* Insomnia
* Heroku
* Git
* GitHub


### ✔️ Approach Taken ###

#### Project plan

| Time      | Tasks         |
| ------------- |-------------|
| **1 day**    |  Ideas research, team brief, planning project days   |
| **2  days**     |  Backend initial set up, seeding completed  |
| **2 days**  | Frontend set up,  backend feature adjust    |
| **1 day**  | Styling and troubleshooting with instructor   |
| **1 day** | Bug fixing, final polishing  |
| **1/2 day** | Deployment     |

#### Back end
- As we have four theme for our app and they all require deifferent schema, so we set up several different models plus one user model in our back-end.
- For the users, we have add the likes field, so we will be able to retrieve the articles liked by user.
```js
const userSchema = new mongoose.Schema({ 
  username: { type: String, required: true, unique: true }, 
  email: { type: String, required: true },
  password: { type: String, required: true  }, 
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'users' }]
}, {
  timestamps: true, 
  toJSON: { 
    transform(doc, json) {
      return { 
        username: json.username,
        id: json._id,
        likes: json.likes 
      }
    }
  }
})
```

- In user function, we have also created ***GET*** and ***PUT*** function for users' saved articles.
```js
// find user liked articles
function retrieveLikes(req, res) {
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      return res.status(200).json(user)
    })
    .catch(err => console.log(err))
}


// edit user liked articles
function updateLikes(req, res) {
  req.body.user = req.currentUser
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      user.likes.push(req.body)
      
      res.status(201).json(user)
      return user.save()
    })
    
    .catch(err => console.log(err))
}
```


#### Front end



### 🤗 Wins ###




### 🧐 Chanllenges ###



### 🔮 Potential future features ###

- Add like function 
- User dashboard showing saved(liked) articles
- The front-end user interface for users to post second-hend clothing

