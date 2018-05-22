 require('./bootstrap');

 window.Vue = require('vue');
 window.Axios = require('axios');

 Vue.component('example', require('./components/Example.vue'));

 class Errors {

 	constructor(){
 		this.errors = {};
 	}

 	get(field){
 		if(this.errors[field]){
 			return this.errors[field][0];
 		}
 	}

 	has(field){
 		return this.errors.hasOwnProperty(field);		
 	}

 	record(field){
 		this.errors = field;
 	}

 	clear(field){
 		if (field) 
 			delete this.errors[field];
 		else
 			this.errors = {};
 	}

 	any(){
 		return Object.keys(this.errors).length > 0;
 	}

 }

 class Form{

 	constructor(data){
 		this.originalData = data;

 		for(let field in data){
 			this[field] = data[field];
 		}

 		this.errors = new Errors();
 	}

 	data(){
 		// let cloneData = Object.assign({},this);

 		// delete cloneData.originalData;
 		// delete cloneData.errors;

 		let data = {};

 		for (let property in this.originalData){
 			
 			data[property] = this[property];

 		}

 		return data;
 	}

 	reset(){
 		for (let field in this.originalData){
 			this[field] = '';
 		}
 		this.errors.clear(); 
 	}

 	post(url){
 		//chain promise
 		return this.submit('post', url)
 		.then(response => console.log(response))
 		.catch(error => console.log(error));

 	}

 	delete(url){

 		return this.submit('delete', url);
 	}

 	submit(requestType,url){

 		return new Promise((resolve,reject) => {

 			axios[requestType](url , this.data())
 			.then(response => {
 				this.onSuccess(response.data);

 				resolve(response.data);
 			})
 			.catch(error =>{
 				this.onFail(error.response.data);
 				console.log(error.response.data);

 				reject(error.response.data);
 			})
 		});
 	}

 	onSuccess(data){
 		alert(data.message);
 		this.reset();
 	}

 	onFail(error){
 		this.errors.record(error['errors']);
 	}

 }

 const app = new Vue({
 	el: '#app',
 	data:{
 		form: new Form({
 			name:'',
 			description:''
 		}),
 	},
 	methods:{
 		onSubmit(){
 			this.form.post('/forms');
 		}
 	}
 });
