<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edite students</h4>

            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">name</label>
                    <input type="text" v-model="model.student.name" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="">address</label>
                    <input type="text" v-model="model.student.address" class="form-control ">
                    <div class="mb-3">
                        <label for="">mobile</label>
                        <input type="text" v-model="model.student.mobile" class="form-control">
                    </div>
                    
                    <div class="mb-3">
                        <button type="button" @click="Update" class="btn btn-primary">save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "StudentEdite",
    data() {
        return {
            id:'',
            model:{
                student:{
                    name:'',
                    address:'',
                    mobile:''
                }
            }
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        //console.log(this.$route.params.id)
       this.getStudentsData(this.$route.params.id);

    },

    methods: {

        getStudentsData(id){
            axios.put(`http://127.0.0.1:8000/api/show/${id}`)
          .then(response=>{
               this.model.student.name=response.data.name;
               this.model.student.address=response.data.address;
               this.model.student.mobile=response.data.mobile;


               // this.model.student=response.data;
            })
        },
     Update(){
            axios.put(`http://127.0.0.1:8000/api/update/${this.id}`,this.model.student).then(res=>{
                console.log(res);
                alert(res.data);
                

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