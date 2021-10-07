# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Runs the app in the development mode.

`REACT_APP_API_ENDPOINT=<app-server-host:port> npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### How to start the Task Manager UI on Local Docker Environment

1. Install docker https://docs.docker.com/get-docker/
2. Add `ENV REACT_APP_API_ENDPOINT=http://localhost:<local-port-of-server>` in your dockerfile
2. Build Docker image from the application root: 
   `docker build -t <image-name> .`
3. Run your image using below command:
   `docker run -dp <local-port>:<application-port> <image-name>`
4. To check that your application is running, enter url `http://localhost:<exposed-port>`

#### How to start the Task Manager UI on Oracle Cloud
1. Install kubectl cli
2. Point to the correct cluster, set your KUBECONFIG env variable to the kubeconfig file provided in the project root.
3. Run below kubectl commands from project root to deploy the application on the above mentioned kubernetes cluster.
    - `kubectl create -f deployment-task-manager-ui.yaml`
    - `kubectl create -f service-task-manager-ui.yaml`
    - `kubectl create -f secret-task-manager.yaml`

4. The above steps will create application in default namespace. You may append `-n <namespace>` in the command if you wish to deploy in some other namespace.
5. Once the Application is deployed, you will see your application exposed through an External IP by the k8s Load Balancer. Currently the application is exposed on port 8080. We can enhance it further by enabling SSL.
   To get the external IP of the application by running following command.
   `kubectl get svc`

##### NOTE: One instance of this application is already running on oracle cloud. You may access it using this URL
http://146.56.54.28:8080/

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
