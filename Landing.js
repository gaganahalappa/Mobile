// let data=[];

var index;
fetch("mobile.json")
.then(function(response){
    return response.json();
})
.then((data)=>{
    let param=new URL(document.location).searchParams;
    index=param.get("id")-1;
    // console.log(data);
    appendData(data);

})
.catch(function(err){
console.log(err);
});

function appendData(data){
    // console.log(data);

    
   // var index=localStorage.getItem("prdId")-1;
    document.getElementById("img1").src=data[index].image;
    document.getElementById("img2").src=data[index].image1;
    document.getElementById("img3").src=data[index].image2;
    document.getElementById("img4").src=data[index].image3;
    document.getElementById("name").innerHTML=data[index].name;
    document.getElementById("price").innerHTML="MRP : "+data[index].price;
    document.getElementById("color").innerHTML="Color : "+data[index].color;
    document.getElementById("ram").innerHTML="RAM : " +data[index].ram;
    document.getElementById ("storage").innerHTML="Storage: " +data[index].storage;
    document.getElementById("battery").innerHTML="Battery: "+data[index].Battery;
    document.getElementById("category").innerHTML="Category : "+data[index].category;
    document.getElementById("rating").innerHTML="Rating :"+data[index].rating+`<i class="fa fa-star text-success"></i>`;
    document.getElementById("desc").innerHTML = data[index].desc;

        //  p.innerHTML+=product;
        // main.appendChild(p);
    // console.log(data);

//    let desp= document.querySelector(".description")

        // let c=document.createElement("div");


    //     for(let i=0;i<data.length;i++){

    //     p.classList.add("p-3","cards")
    //     let croduct=`

    //     <li>${data[i].desc}</li>
    
    //   `
    //     c.innerHTML+=croduct;
        

    //     }
        desp.appendChild(c);



            }


function cart(){
     

        if (localStorage.getItem('carts') == null) {
            
            let cart=[];
            let size=cart.length;
            cart[size]=index;
            localStorage.setItem("carts",JSON.stringify(cart));
            console.log(cart);
    
        }
        else{
            let cart=localStorage.getItem("carts");
            //console.log(JSON.parse(cart));
            let m=JSON.parse(cart)
            let p=m.length
            m[p]=index;
            localStorage.setItem("carts",JSON.stringify(m));
            
        }
        window.location.href="cart.html";
    }
  



    //     let c=document.createElement("div");
    //     //p.classList.add("p-3","cards")
    //     let croduct=`

    //     <li>${data[i].desc}</li>
    
    //   `
    //     c.innerHTML+=croduct;
    //     desp.appendChild(c);
        
