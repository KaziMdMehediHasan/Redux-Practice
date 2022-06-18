import axios from "axios";

export default axios.create({
    apiBaseURL: "https://www.themealdb.com/api/json/v1/1/search.php",
})