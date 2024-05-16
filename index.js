// QUESTION 133:
const userDetail = {
    name: "Mahnoor",
    age: 18,
    email: "abc@gmail.com",
};
const jsonString = JSON.stringify(userDetail);
console.log(jsonString);
// QUESTION 134:
const userDetail2 = `{
    "name":"Mahnoor",
    "age":18,
    "email":"abc@gmail.com"
}`;
const result = JSON.parse(userDetail2);
console.log(result);
// QUESTION 135:
const empolyee = {
    name: "Hooriya",
    age: 17,
    email: "abc@gmail.com",
};
let response = JSON.stringify(empolyee, null, 2);
console.log(response);
export {};
