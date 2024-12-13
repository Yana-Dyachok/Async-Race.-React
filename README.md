# Async-Race-React
A SPA to manage the collection of cars, operate their engines, and show race statistics.
- [Task](https://github.com/rolling-scopes-school/tasks/tree/master/stage2/tasks/async-race)
- [Server Mock Repo](https://github.com/mikhama/async-race-api) or in my [repository](https://github.com/Yana-Dyachok/async-race-api)
- [Demo Video](https://youtu.be/sTXtlBLh-Ts)
- [Deploy](https://async-race-react-diachok.netlify.app) 

## How to install

1.  Clone this repository
```
git clone https://github.com/Yana-Dyachok/Async-Race-React.git
```
2.  Move to the cloned repository
```
cd Async-Race-React 
```
3.  Switch the branch to `develop`
```
git checkout develop
```
4.  Move to the directory
```
cd async-race
```
5.  Installing NPM modules
```
npm install 
```
6.  Running application
```
npm run dev
```
- press h + enter to show help
- press r + enter to restart the server
- press u + enter to show server url
- press o + enter to open in browser
- press c + enter to clear console
- press q + enter to quit

### N.B! Keep the server running during functionality review.
1.  Open new terminal
2.  Move to the directory
```
cd async-race-api 
```
3.  Running application
```
npm run start
```

## The technology stack used:
   - TypeScript
   - React, React Router
   - Redux
   - Vite
   - Eslint, Prettier, Husky
   - SCSS, Styled Components, Material UI
   
## 🛠️ Technical Implementation

- Implement CRUD operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using JavaScript and CSS.
- Ensure responsiveness and compatibility across different devices and browsers.

## Scripts
 Scripts                  |   instructions                         | Comands
--------------------------|:---------------------------------------|:-----------------------------
ESLint                    | check:                                 | npm run lint 
//                        | fix:                                   | npm run lint:fix
Vite                      | compiles files and builds the app:     | npm run build 
//                        | create a local server for development: | npm run dev 
Prettier                  | checks and formats files:              | npm run format
Husky                     | setting up Git hooks:                  | npm run prepare
