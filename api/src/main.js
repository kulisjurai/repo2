const dotenvLoadingResult = require("dotenv").config();

if (dotenvLoadingResult.error) {
    throw dotenvLoadingResult.error;
}
console.log(dotenvLoadingResult.parsed);

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//jwt authentication
const authToken = require("./middleware/auth.middleware");

/****************
    ALL ACTIONS
****************/

//user actions
const getAllUsers = require("./controllers/user/getAllUsers");
const createUser = require("./controllers/user/createUser");
const getUserById = require("./controllers/user/getUserById");
const loginUser = require("./controllers/user/loginUser");
const deleteUser = require("./controllers/user/deleteUser");
const changeRoleUser = require("./controllers/user/changeRoleUser");
const getRoleType = require("./controllers/user/getRoleType");
const getNumberOfUsers = require("./controllers/user/countUsers");

// destinations
const getAllDestinations = require("./controllers/destination/getAllDestinations");
const searchDestinations = require("./controllers/destination/searchDestination");
const getTrasportTypes = require("./controllers/destination/getTransportTypes");
const createDestination = require("./controllers/destination/createDestination");
const deleteDestination = require("./controllers/destination/deleteDestination");
const countDestinations = require("./controllers/destination/countDestinations");
const updateDestination = require("./controllers/destination/updateDestination");
const getDestinationById = require("./controllers/destination/getDestinationById");

// //reservations
const createReservation = require("./controllers/reservation/createReservation");
const getAllReservations = require("./controllers/reservation/getAllReservations");
const deleteReservation = require("./controllers/reservation/deleteReservation");
const cancelReservation = require("./controllers/reservation/cancelReservation");
const countReservations = require("./controllers/reservation/countReservations");
const restoreReservation = require("./controllers/reservation/restoreReservation");
// const getGroupTests = require('./controllers/test/getGroupTests');
// const deleteTest = require('./controllers/test/deleteTest');

/****************
    ALL ROUTES
****************/

//user
app.post("/user-create", createUser);
app.get("/get-user-by-id/:id", getUserById);
app.post("/user-login", loginUser);
app.get("/get-all-users", authToken, getAllUsers);
app.put("/user-delete/:id", authToken, deleteUser);
app.put("/user-role-change/:id", authToken, changeRoleUser);
app.get("/get-role-type", authToken, getRoleType);
app.get("/users-count", getNumberOfUsers);

// app.get('/user-get-all',authenticateToken, getAllUsers)
// app.put('/user-update/:id',authenticateToken, updateUser)
// app.delete('/user-delete/:id',authenticateToken, deleteUser)
// app.get('/user-filter-by-test/:testId',authenticateToken, filterUserByTest)
// app.get('/user-filter-by-group/:groupId',authenticateToken, filterUserByGroup)

// //group routes
// app.post('/group-create',authenticateToken, createGroup)
// app.put('/group-update/:id',authenticateToken, updateGroup)
// app.get('/group-get-all',authenticateToken, getAllGroups)
// app.delete('/group-delete/:id',authenticateToken, deleteGroup)

//destiantions
app.get("/get-all-destinations", getAllDestinations);
app.get("/search-destination/:name", searchDestinations);
app.get("/get-transport-types", getTrasportTypes);
app.post("/destination-create", authToken, createDestination);
app.put("/destination-delete/:id", authToken, deleteDestination);
app.get("/destinations-count", countDestinations);
app.put("/destiantion-update/:id", authToken, updateDestination);
app.get("/get-destination-by-id/:id", getDestinationById);

// //test routes
// app.post('/test-create',authenticateToken, createTest)
// app.get('/test-get-all/:id',authenticateToken, getGroupTests)
// app.delete('/test-delete/:id',authenticateToken, deleteTest)
// app.put('/test-update/:id',authenticateToken, updateTest)
// app.get('/test-get-by-id/:testId',authenticateToken, getTestById)
// app.get('/test-get-all',authenticateToken, getAllTests)

// //reservations
app.post("/reservation-create", authToken, createReservation);
app.get("/get-all-reservations", authToken, getAllReservations);
app.put("/reservation-delete/:id", authToken, deleteReservation);
app.put("/reservation-cancel/:id", authToken, cancelReservation);
app.get("/reservations-count", authToken, countReservations);
app.put("/reservation-restore/:id", authToken, restoreReservation);
// app.put('/test-result-update/:testId/:userId',authenticateToken, updateTestResult)
// app.delete('/test-result-delete/:testId/:userId',authenticateToken, deleteTestResult)
// app.get('/test-result-get-all/:testId',authenticateToken, getResultsByTest)
// app.get('/test-result-get-all',authenticateToken, getAllResults)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});