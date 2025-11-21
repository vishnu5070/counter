import React,{useState} from react;
function Counter(){
	const[count,setcount]=useState(0);
	<div>
	<h1>counter</h1>
	<p>count{count}</p>
	return(
	<button onClick={() =>setcount(count+1)>}increment</button>
	<button onClick={() =>setcount(count-1)>}decrement</button>
	<button onClick={() =>setcount(count(0)>}increment</button>
	</div>
}
export Deafult Counter;