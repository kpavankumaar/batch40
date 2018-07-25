var modelEl = document.getElementById('model');
var brandEl = document.getElementById('brand');
var typeEl = document.getElementById('type');
var carColorEl = document.getElementById('color');
var musicsystemEl = document.getElementById('musicsystem');
var airbagsEl = document.getElementById('airbags');
var cameraEl = document.getElementById('camera');
var tyreEl = document.getElementById('tyre');
var btnEl = document.getElementsByTagName('button')[0];
var listOfOrder = [];
var newOrder;
btnEl.onclick = function (e){
	// console.log(e)
	e.preventDefault();
	var modelVal = modelEl.value;
	var brandVal = brandEl.value;
	var carColorVal = carColorEl.value;
	var typeVal = typeEl.value;
	var airbagsVal = airbags.value;
	var musicsystemVal = musicsystem.value;
	var cameraVal = camera.value;
	var tyreVal = tyre.value;
	newOrder = new TeslaCarModel(modelVal, brandVal, carColorVal, typeVal,airbagsVal,musicsystemVal,cameraVal,tyreVal);
	// console.log('clicked on button element');
	listOfOrder.push(newOrder);

}

function TeslaCarModel(model , brand, carcolor,type, airbags, musicsystem,camera,tyre ) {
	console.log(model + ' ' + brand + ' ' + carcolor + ' ' +  type);
	this.model = model;
	this.brand = brand;
	this.carcolor = carcolor;
	this.type = type;
	// inheriting properties form accessries 
	// Accessories(airbags, musicsystem,camera,tyre); 
	// with fn call we add accessories prop to window object 
	// solution : is use call , bind or apply method 

	Accessories.call(this,airbags, musicsystem,camera,tyre );
	// this.drive = function (){
	// 	console.log('anyone can drive '+ this.brand + ' '+ this.type);
	// }
}




function Accessories (airbags,musicsystem,camera,tyre){
	this.airbags = airbags;
	this.musicsystem = musicsystem;
	this.camera = camera ;
	this.tyre = tyre;
}
Accessories.prototype.accessoriesOrderInfo = function() {
	console.log(this.airbags + '' + this.musicsystem + ' ' +this.camera + " "+ this.tyre )
}

TeslaCarModel.prototype = Object.create(Accessories.prototype);
TeslaCarModel.prototype.drive = function(){
	console.log('anyone can drive '+ this.brand + ' '+ this.type);
}
// // listOfOrder[0].drive = function(){
// 	console.log('my own car ' + this.carColor)
// }



// teslaCarModel();