//your JS code here. If required.
let output=document.getElementById("output")
let arr=[1,2,3,4]
let filterval=arr.filter((iteam)=>{
if(iteam%2==0)
{
	return iteam;
}
})
setTimeout(()=>{
output.innerText=filterval
	
},1000)
let last=filterval.map((iteam)=>{
	return iteam*2;
})
setTimeout(()=>{

output.innerText=last;
	
},2000)
