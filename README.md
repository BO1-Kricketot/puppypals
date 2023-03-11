<h1 align="center">
  <br>
    # 🐶 puppypals
    <h3 align="left">
        <i>A social networking mobile application designed to allow local dog owners to meet,
           host events, chat, and organize play dates with each other.</i>
      <br>
    </h3>
    <br>
</h1>

## Technologies Used

### setup & configuration
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-%2320232a.svg?&style=for-the-badge&logo=expo&logoColor=blue)

### frontend
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![mongoDB](https://img.shields.io/badge/mongoDB-FFF?style=for-the-badge&logo=mongodb&logoColor=green)

### front-to-back
![Socket.io](https://img.shields.io/badge/socket.io-FFF?style=for-the-badge&logo=socket.io&logoColor=black)
<br>

## 🚀 Getting Started

No matter the environment, first run `npm install` for all 3 packages (root, client, server).

1. Start MongoDB instance.
2. `npm start` in `ROOTDIR/server`
3. `npm start` in `ROOTDIR/client`
4. Use the corresponding keys to launch the app on your specified device.
<br>

## 🐾 The App
<img width="247.5" alt="landing page" src="https://user-images.githubusercontent.com/112882051/224513607-b23c1c25-df1e-42ad-b301-b814d95141f9.png">

<br>

### 🐕 Landing Page
<hr>
<details>
<summary>LOGIN</summary>
<br>
<ul>
  <li>Authenticates users who have already created an account</li>
  <li>Redirects to "Home" page on successful login</li>
  <li>Nav Bar (bottom) is rendered upon succesful login</li>
</ul>
<img width="247.5" alt="sign in" src="https://user-images.githubusercontent.com/112882051/224507524-c8424c43-cb2e-4128-91fa-1449488b6213.png">
</details>
<details>
  <summary>SIGN UP</summary>
  <br>
  <ul>
    <li>Allows for creation of new account</li>
    <li>Validates age-appropriateness of user (client spec. of 18 yrs or older)</li>
    <li>"Create Account" button directs new user to set up profile</li>
      <ul>
        <li>User uploads one Human pic</li>
        <li>User uploads one main Dog pic, and up to five additional Dog pics</li>
        <li>User builds profile w/ variety of text inputs and dropdown inputs</li>
        <li>Upon successful account creation, new user is redirected to "Home" page</li>
        <li>Nav Bar (bottom) is rendered</li>
      </ul>
  </ul>
  <img width="247.5" alt="sign up" src="https://user-images.githubusercontent.com/112882051/224507661-154cf8b5-4bcd-441e-9c93-7c6ba00c13d7.png">
</details>
<br>

### 🦴 Home Page
<hr>
<details>
  <summary>MAIN VIEW</summary>
  <br>
  <ul>
    <li>Swipe right to send a friend invite</li>
    <li>Swipe left to pass</li>
    <li>Use the <code>...</code> button to filter dogs</li>
  </ul>
  <div style="display: flex; flex-direction: row; align-items: space-evenly;">
    <img width="247.5" alt="home page" src="https://user-images.githubusercontent.com/112882051/224508184-f5ddff9f-0e18-44f9-9e78-2db4d6a63389.png">
    <img width="247.5" alt="filter dogs" src="https://user-images.githubusercontent.com/112882051/224508478-fc9952fd-f2db-441f-9396-0f8977da2ab1.png">
  </div>
</details>
<details>
  <summary>DETAIL VIEW</summary>
  <br>
  <ul>
    <li>Access by tapping main image</li>
    <li>Shows additional information about current dog & its owner (user)</li>
    <li>"Friendly" tags are conditionally rendered if they are `true`</li>
    <li>Swiping/cycling thru dogs is still possible</li>
  </ul>
  <img width="247.5" alt="more dog info" src="https://user-images.githubusercontent.com/112882051/224508878-1c4e0278-3d77-425f-9547-a77a66f943f3.png">
</details>
<br>

### 🐩 Invites & Messaging
<hr>
<details>
  <summary>PENDING INVITES</summary>
  <br>
  <ul>
    <li>Shows "invites", i.e. other users who have swiped right on your dog</li>
    <li>Similar to home page, swipe right to accept invite, swipe left to reject</li>
    <li><em>Future Enhancement: </em>tap invite to see associated profile</li>
  </ul>
  <img width="247.5" alt="accept invite" src="https://user-images.githubusercontent.com/112882051/224509002-5d1d29cf-c09d-4a62-805f-cad1945d6227.png">
</details>
<details>
  <summary>ACCEPTED & MESSAGING</summary>
  <br>
  <ul>
    <li>"Accepted" layout same as "Pending</li>
    <li>"Contains users whom you have swiped right to accept their invite, or vice-versa</li>
    <li>Tapping on a user in "accepted" brings up a chat view, with real-time messaging & emoji reaction capability</li>
  </ul>
  <img width="247.5" alt="messaging" src="https://user-images.githubusercontent.com/112882051/224509310-e9e62ac1-dbf8-44a7-9ff1-36cb95f9660e.png">
</details>
<br>

### 🌭 Events
<hr>
<details>
  <summary>INVITES & ATTENDING</summary>
  <br>
  <ul>
    <li>Shows events user is invited to/attending, based upon selected view</li>
    <li>Tapping on an event brings up details for the associated event</li>
    <li>User can RSVP to an event ("Invited" view) within event details modal</li>
  </ul>
  <div style="display: flex; flex-direction: row; align-items: space-evenly;">
    <img width="247.5" alt="invite or attending list" src="https://user-images.githubusercontent.com/112882051/224509938-07b4a04a-ed1a-4968-a216-53bcfa427638.png">
    <img width="247.5" alt="event details" src="https://user-images.githubusercontent.com/112882051/224510068-376694a0-6228-4060-96c4-6423a571b0e9.png">
  </div>
</details>
<details>
  <summary>CREATE EVENT</summary>
  <br>
  <ul>
    <li>Upon tapping ➕ icon, user can create a new event</li>
    <li>User can invite friends to the event before saving/creating</li>
  </ul>
  <img width="247.5" alt="invite or attending list" src="https://user-images.githubusercontent.com/112882051/224510147-10f3f24f-d058-4d8a-b059-5c49756a0bcb.png">
</details>
<br>

### 🦮 Profile
<hr>
<details>
  <summary>PROFILE VIEW</summary>
  <br>
  <ul>
    <li>Displays profile of the current user</li>
    <li>Renders available pics, information, and conditional "friendly" tags</li>
    <li>Tapping pencil brings up edit feature</li>
  </ul>
<img width="247.5" alt="profile" src="https://user-images.githubusercontent.com/112882051/224509724-37226e59-ab9b-4cc4-9482-131ca0199d58.png">
</details>
<details>
  <summary>EDIT PROFILE</summary>
  <br>
  <ul>
    <li>Allows customization of all dog pics</li>
    <li>City & State can be changed</li>
    <li>Bio can be edited</li>
    <li>All unedited/untouched items remain the same as pre-editing</li>
    <li>User has option to discard edits with "Go Back" button</li>
    <li><em>Future enhancement: </em>Street address can be changed</li>
  </ul>
<img width="247.5" alt="edit profile" src="https://user-images.githubusercontent.com/112882051/224509606-0b2f5c64-3a39-4362-9f2d-2156bfbab918.png">
</details>
<br>

## The Team
[Jacob Fink](https://github.com/Bradyhoo) (Project Manager) <br>
[Josh Jang](https://github.com/wooseok0717) <br>
[Aimee Kang](https://github.com/aimeekang) (UI Co-Manager) <br>
[Terrence Koo](https://github.com/tko0) <br>
[Bolton Lin](https://github.com/boltonlin) (Architecture Manager) <br>
[Arpan Shrestha](https://github.com/Pseudo08) <br>
[Tom Spitz](https://github.com/tjspitz) (UI Co-Manager)

## Conclusion
We hope you love Puppypals as much as we do!
