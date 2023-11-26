
<template>
    <div class="card">
        <div class="card-header">
            <h4>
                Students
                <RouterLink to="/students/create" class="btn btn-primary float-end">
                    Add student
                </RouterLink>

            </h4>
        </div>
        <div class="card body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">address</th>
                        <th scope="col">mobile</th>
                        <th scope="col">Create at</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody v-if="this.students.length > 0 ">
                    <tr v-for="(student, index) in students" :key="student.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ student.name }}</td>
                        <td>{{ student.address }}</td>
                        <td>{{ student.mobile }}</td>
                        <td>{{ student.created_at }}</td>
                        <td>
                            <RouterLink :to="{path:'/students'+student.id+'/Edite'}" class="btn btn-success mx-2">
                                Edite
                            </RouterLink> 
                            <button class="btn btn-danger mx-2" @click="deleteStudent(student.id)">Delete</button>

                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="6" class="text-center">loading..</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'students',
    data() {
        return {
            students: []
        }
    },
    mounted() {
        this.getStudents();
    },
    methods: {
        getStudents() {
            axios.get('http://127.0.0.1:8000/api/employees').then(res => {
                this.students = res.data;
                console.log(this.students);
            });
        },
        deleteStudent(id) {
            if(confirm('Are you sure you want to delete')){
                axios.delete(`http://127.0.0.1:8000/api/delete/${id}`).then(res => {
                    alert(res.data);
                    this.getStudents();
                });
            }
        }
    }
}
</script>
  