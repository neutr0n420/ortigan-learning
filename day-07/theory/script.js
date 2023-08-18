// const obj = [
//   {
//     name: "aryan",
//     email: "email",
//     number: 9112348575,
//     color: ["red", "blue", "yellow", "green"],
//   },
//   {
//     name: "krunal",
//     email: "email",
//     number:9111212432,
//     color:['red']
//   },
// ];
// console.log(obj);

const nameDiv = document.getElementById('name')

const response = fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    response.json().then((data) => {
        data.forEach(user =>{
            const Name = `${user.name}` 
            const email = user.email
            const card = `<div class = "card" ><p>Name:${Name}</p> <p>Email:${email}</p></div>`
            nameDiv.innerHTML += card

        //   alert(user.name)
        //   console.log(user.name) 
        })
    //   console.log(data);
    });
  })
  .then();

console.log("hello world");
