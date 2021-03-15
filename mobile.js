var data;

fetch("mobile.json")
.then((response)=>{
    return response.json();
})
.then((mydata)=>{
    console.log(mydata);
    data=mydata;
    appendData(data);

})

function appendData(data){
    var main=document.getElementById("gagana");
    
    for(var i=0;i<data.length;i++){
       
        
        var p=document.createElement("div");
        p.classList.add("p-2","cards","col-lg-4","col-md-6")
        let product=`
        
        <a onclick="setId(${data[i].id})"> 
        <div class="card">
        <img class="card-img-top" style="height:320px; width:280px; "src="${data[i].image}" alt="Card image cap">
        <div class="card-body" >
          <h5 class="card-title">${data[i].name}</h5>
          <strong><p class="card-text" style="color:red">MRP: ${data[i].price}</p></strong>
          <h5 class="card-text" style="color:green">Rating:${data[i].rating}<i class="fa fa-star" aria-hidden="true"></i></h5>
        </div>
        </div>
      </a>`
        p.innerHTML+=product;
        main.appendChild(p);   
    }
}    

function setId(id){
    

    //localStorage.setItem("prdId",id);
    window.document.location="nextpage.html" + "?id=" + id;
}    


function Filters(){
    console.log(data.length);
    let b=document.getElementsByClassName("brand");
    // console.log(b);
    let brandArray=[];
    let brandListingArray=[];
  let mainArray=[];
  let listingArray=[];
    

  for(let x of b){
      if(x.checked){ 
          brandArray.push(x.value);
      }
  }
  console.log(brandArray)
  if(brandArray.length!==0){
      for(let i=0;i<brandArray.length;i++){
          for(let j=0;j<data.length;j++){
              if(brandArray[i]===data[j].brand){
                  brandListingArray.push(data[j].id);
              }
          }
      } 
      console.log(brandListingArray);
  }

  
  
  let temp=0;

  if (brandListingArray.length !== 0) {
      for(let i=0;i<brandListingArray.length;i++){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===brandListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(brandListingArray[i]);
                  }
              }
          }
  
  else if(brandListingArray.length!==0){
      for(let i=0;i<brandListingArray.length;i++){
          mainArray.push(brandListingArray[i]);
      }
  }
  
  console.log(mainArray);

  for(let i=0;i<mainArray.length;i++){
      let elem=data.find((e)=>{
          if(mainArray[i]===e.id){
              return true;
          }
      })
      listingArray.push(elem);
  }
  console.log(listingArray);
  document.getElementById("gagana").innerHTML=""; 
  appendData(listingArray);
  if(listingArray.length===0){
      if(brandListingArray.length!==0){
      let res=document.getElementById("mainId");
      res.innerHTML="Product Not Found";
      res.style.color="red";
      res.style.fontWeight="bolder";
      res.style.fontSize="20px";
      }
      else{
          appendData(data);
      }
  }
}




