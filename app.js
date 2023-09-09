
        //Noraml functions 
        // function demo(){
        //     console.log("hi");
        // }

        //Arrow function

        // var demo = () =>{
        //     alert("Hello");
        // }

        /* var demo = ()=>{
            return 12345
        }
        alert(demo()); */
        // we can write above in below shortcut method

       /*  var demo = () => 12345
        alert(demo()); */


        //return array
        /* var demo = () => [123,321]
        console.log(demo()); */

        //return object with lengthy method
        /* var demo = () => {
            return {
                name: "Baboo",
                age:21
            }
        } */
       /*  console.log(demo());
        // return object with short method method   
        var demo = () => ({
            name: "Baboo",
            age: 21
        });
        console.log(demo()); */
         
        //Note: arrow ka bad num likhna ka mtlb return value

        // mutliple values
        /* var demo = (num, name) =>[num,name];
        console.log(demo(123,"Baboo")); */
        
        //single value
        /* var demo=num=>num+1; //first num left to right is paramenter, 2nd num is return
        console.log(demo(123)); */ // here it is orgument
         







        // let vs var difference and real uses88888888888888
        /* if(6==6)
        {
            let x = 123
            console.log(x);//can be accessed inside
        }
        console.log(x);  *///cant access outside

        /* if(6 == 6) 
        {
            const x = 123
            console.log(x);//can be accessed inside
        }
        console.log(x);//cant access outside */

        /* if (6 == 6) 
        {
            var x = 123
            console.log(x);//can be accessed inside
        }
        console.log(x);//can access outside */


        /* if (6 != 6) {
                var x = 123
                console.log(x);
            }
        console.log(x);//undefined; means not declared */
        
        //note: const cant be updated
        /* const x = 12
        x = 14
        console.log(x); */ //Uncaught TypeError: Assignment to constant variable.
    
        //var, let can be updated
        //funcin should be constent qn ka wo update nhi hota ha 
        //var is used, where we want to update something

        //var zyda memory consume krta ha 
        //let const block(function, condition) scope hota han, ca't acess outside
    


        //For of and for in loop in es6

        //old method
        /* const data = ["Baboo", "Akash", 321, 123, "maria"]
        var i;
        for(i=0;i<data.length;i++){
            console.log(data[i])
        } */


        //new method
        /* const datas = ["Baboo", "Akash", 321, 123, "maria"]
            var i = 0;
        for(let data of datas){
            // console.log(i);
            console.log(data);
            i++
        } */

        /* array = for of
        object = for of */

        //For in loop
        /* const datas = {
            name: "Baboo",
            roll:21,
            subject:"math" 
        }
        for(let key in datas ){
            // console.log(datas[key]);
            console.log({
                // key: key,
                key,
                value: datas[key]
        });
        } */

        //Spread Operator

        /* const data = ['Baboo', "kumar", "Heerani"]
        console.log(data); 
        console.log(...data); */ //spread operator, get value without syntax

        //Join two array using spread operator

       /*  const data1 = ["Baboo","Kumar"];
        const data2 = ["@","Karachi"];
        const result = [...data1,...data2]
        console.log(result); */

        //objects using spread operator
        /* const data = {
            name: "hello",
            roll: 123
        }
        console.log(...data); */ //Spread syntax requires ...iterable[Symbol.iterator] to be a function

        // Join two objects using spread operator
        /* const data = {
            name: "Baboo",
            rol:123
        }
        const final = {
            subject: "chemistry",
        }
        const result = {
           ...final,
           ...data
        }
        console.log(result); */


        /* const data = [1,2,3]
        const result = (x,y,z)=>{
            console.log(x,y,z);
        }
        result(...data) */


        //Map Functions
        /* const names = ['baboo', 'kumar','heerani'];
        // const result = names.map(()=>"map")
        // const result = names.map((item, index)=>item.toUpperCase())
        // const result = names.map((item, index)=>index+1)
        const result = names.map((item, index)=>item.length)
        console.log(result); */


        /* const datas = [2,5,9,8,6]
        const result = datas.map((item) =>{
            if(item%2==0)
                return item+ " is Even";
            else
                return item+" is Odd"; 
        });
        console.log(result); */


        //Filter vs Map Functions

        //map 
        // const data = [12,14,56,7];
        /* const result = data.map((num)=>{
            if(num > 0)
            return num
            else return "smaller";
        }); */

        //to avoid from above lengthy code we use filter, 7 chota ha lekin uskelay cod enhi likha ha 
        /* const result = data.filter((num) =>num >10)
        console.log(result); */


       /*  const data = [
            {
                name: "Baboo",
                roll:13
            },
            {
                name: "akash",
                roll:19,

            },
        ]
        const result = data.filter((item) =>item.roll >10)
        console.log(result); */

        











































