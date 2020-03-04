### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


### 🚩 Project-3 - The Vault (Group) ###

The third project of the software engineering immersive course at GA London. The assignment was to create a **full-stack application**. This project was completed in a team of 2 within a week. 

The vault is an online lifestyle magazine with four different themes: second-hand clothing swap, popular locations, hot topics, and editor-selected music album, films, and book recommendations. Users will be able to register to the site. On different pages, logged in users can leave or delete comments under the articles. 

Visit the site here - [The Vault](https://project-3-the-vault.herokuapp.com/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/SEI-Project-3)

#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/U4XNOpYXfVvq8XFl62/giphy.gif)


### ✨ Project-3 2.O ###

I have continued working on this project after the deployment. Here is the second version of The Vault. It has a different styling for the home page, comments, and the map. I have added React Lazy Hero effection and used a different CSS framework: Tachyons. 

Visit the site here - [The Vault 2.O](https://project-3-2point0.herokuapp.com/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/SEI-Project-3-v2)

#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/STfoQrmp6yE8y3wwlr/giphy.gif)

### :rocket: Get Started ###

* Clone or download the repo
* `npm install`
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
- As we have four themes for our app and they all require a different schema, so we set up several different models plus one user model in our back-end.
- For the users, we have added the likes field, so we will be able to retrieve the articles liked by the user.
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
<img src='frontend/assets/Screenshot 2020-02-02 at 11.51.01 am.png' width='50%'>

- As the magazine has a second-hand clothing swap page, we allow the user to ***POST***, ***PUT*** and ***DELETE*** their items on the clothing page. And other users will be able to leave comments below for a swap.

```js
// ************************ clothing ************************
router.route('/clothing')
  .get(clothingFunc.index)
  .post(secureRoute, clothingFunc.create)

router.route('/clothing/:id')
  .get(clothingFunc.show)
  .put(secureRoute, clothingFunc.update)
  .delete(secureRoute, clothingFunc.remove)

router.route('/clothing/:id/comments')
  .post(secureRoute, clothingFunc.createComment)

router.route('/clothing/:id/comments/:commentId')
  .delete(secureRoute, clothingFunc.removeComment)

```

#### Front end

- For this project, we have used React Hooks. It makes the code cleaner and easier to read. 

- We used the Uber's React Map GL package for Mapbox for our community page, it has the popup function so the user will be able to check the information quickly.

- I wrote the comment feature for the project. As we have several pages require this feature, I have pulled the comment form itself out to a common component, but pass props ***updateData*** back to setData, so once the user left a comment, it will push to our single article's comment array and get rendered.

***single article component***

The initial state
```js
const [data, setData] = useState( { comments: [] })
```
The original data remains the same, but the updateData will set the comments into our data
```js
  <CommentForm 
    url={`/api/clothing/${props.match.params.id}/comments`}
    updateData={setData}
    data={data}
  />
```
All comment will get rendered here
``` js
  <div className='columns'>
    <div className='column'>
      {data.comments.map((comment) => 
        <div className="is-half" 
          key={comment._id} > 
          <div>{comment.content}</div>
          <br />
          <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
        </div>
      )}
    </div>
  </div> 
```

***comment form component***

The initial state
```js
const CommentForm = ({ url, updateData, data }) => {
  const [formData, setFormData] = useState('')
  const [errors, setErrors] = useState({
    errors: []
  })
```
submit the form to our back-end, pass back the newData with comments and set form content to none.
```js
  function handleSubmit(e) {
    e.preventDefault()
    axios.post( url , { content: formData }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(response => {
        const newData = { ...data }
        newData.comments = response.data 
        updateData(newData)
        setFormData('')
      })
      .catch(err => setErrors({ ...err, errors: err.data }))
  }
```


### 🤗 Wins ###

- Most back-end features are completed. After testing it on Insomnia, we can basically get all the correct data coming back from our API. 
- The comment feature is running well but still needs some style.
- As the person creating the main repository on Github, I also help other teammates for their git issues. eg. merge branches, conflicts, git push...
<img src='https://github.com/Aichi-Chang/The-Vault/blob/master/frontend/assets/Image%20from%20iOS%20(1).jpg?raw=true' width='50%'>

- Team morning stand up brief is very important, we get to know what others have completed so far, the remaining tasks on the project plan or if anyone needs extra help on the feature they are building. 

### 🧐 Chanllenges ###
- I have added the user liked feature into our back-end. In the beginning, I tried to implement user id into all article schemas, when we test a single article route in Insomnia, it showed all the users who have liked it. Everything works fine until I started to build the route for the user dashboard. In order for users to see all the articles they liked, I should have implemented the article id into user schema. 
- As we have different pages require the comment feature, we had to figure out to re-render the page with new comments and yet keep the initial state. After troubleshooting with the instructor, I learned how to pass props and use them to set data, simple and efficient.


### 🔮 Future features ###

- Add like function (front-end)
- Create user dashboard showing saved(liked) articles (front-end)
- User can post and edit their second-hend clothing (front-end)
- Rating (back-end)

