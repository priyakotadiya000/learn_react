const Async = () =>{
    const users = [
        { name: "Priya", age: 25 , bd:28},
        { name: "Amit", age: 30 },
        { name: "Sara", age: 22 }
      ];
      
      const names = users.map((user) => user.name);
      const age = users.map((user) => user.age);
      const bd = users.map((user) => user.bd);

      console.log(names);
      console.log(age);
      console.log(bd);

     return  
      
}

export default  Async;