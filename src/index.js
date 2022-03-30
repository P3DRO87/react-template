import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

const reverseString = (str = "hola mundo") => str.split("").reverse();

const URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
   const data = await fetch(URL).then((res) => res.json());

   console.log(data);
};

(async () => {
   await getUsers();

   console.log(...reverseString());
})();
