interface ProductInfo{  
    name : string
    category :string
    price :number
}
 function greeter(productinfo: ProductInfo) {
    return productinfo;
}
var user = { name: "h", category: "Markting", price: 40 };
var user1 = { name: "b", category: "Markting1", price: 41 };
var user2 = { name: "d", category: "Markting2", price: 42 };
var user3 = { name: "c", category: "Markting3", price: 43 };
var user4 = { name: "e", category: "Markting4", price: 44 };
var user5 = { name: "f", category: "Markting5", price: 55 };
var user6 = { name: "a", category: "Markting6", price: 46 };
var user7 = { name: "j", category: "Markting7", price: 47 };
var user8 = { name: "k", category: "Markting8", price: 48 };
var user9 = { name: "m", category: "Markting9", price: 49 };
var user10 = { name: "n", category: "Markting10", price: 50 };
 
function setget(...args: any[]) {
    var arr: any[] = new Array(arguments.length);
    for (var n = 0; n < arguments.length; n++) { 
        var v = greeter(arguments[n]);
        arr[n] = v
    }
    console.log(arr);
    var arr1: any[] = new Array(arr.length);
    var newarr: any[] = new Array(arr.length);
    for (var n = 0; n < arr.length; n++){
        arr1[n] = arr[n].name;
    }
    arr1.sort();
    for (var n = 0; n < arr1.length; n++){
        for (var k=0; k < arr.length; k++){
            if (arr1[n] === arr[k].name) {
                newarr[n] = arr[k];
            }
        }
    }
	console.log(newarr);
}

setget(user,user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
