
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