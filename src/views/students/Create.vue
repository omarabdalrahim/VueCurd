<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add students</h4>

            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">name</label>
                    <input type="text" v-model="model.student.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">address</label>
                    <input type="text" v-model="model.student.address" class="form-control">
                    <div class="mb-3">
                        <label for="">mobile</label>
                        <input type="text" v-model="model.student.mobile" class="form-control">
                    </div>
                    
                    <div class="mb-3">
                        <button type="button" @click="save" class="btn btn-primary">save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "StudentCreate",
    data() {
        return {
            model:{
                student:{
                    name:'',
                    address:'',
                    mobile:''
                }
            }
        }
    },
    methods: {
        save(){
            axios.post('http://127.0.0.1:8000/api/save',this.model.student).then(res=>{
                console.log(res);
                alert(res.data);
                this.model.student={
                    name:'',
                    address:'',
                    mobile:''
                }

            })
            .catch(function(error){
                if (error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }else if(error.request){
                    console.log(error.request);
                }else {
                    console.log('Error',error.message);
                }
            })
        }
    }
}
</script>