 var recipes = {prop: 1};

 function updateObjectWithKeyAndValue(object,key,value){
   recipes.prop2 = 2;
   
   return recipes;
 }
 
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[key] = value;
   
   return object;
 }
 
 function deleteFromObjectByKey(object, key){
   
   return Object.assign({}, obj, { [key]: value });
   
 }