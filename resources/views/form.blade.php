@extends('layouts.app')

@section('content')

@isset($form)
<example></example>
@endisset

<form method="POST" action="/forms" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
    <div class="container">
        <div class="row">
            <div class="form-group col-sm-4">

                <label for="name">Project Name:</label>

                <input v-model="form.name" type="text" id="name" name="name" class="form-control">
                
                <span class="help-block" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>

            </div>
        </div>
        <div class="row">
            <div class="form-group col-sm-4">

                <label for="description">Project Description:</label>
                
                <input v-model="form.description" type="text" id="description" name="description" class="form-control">
                
                <span class="help-block" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            
            </div>
        </div>
        <div class="row">
            <div class="form-group col-sm-4">
                <button class="btn btn-primary" :disabled="form.errors.any()">Create</button>
            </div>
        </div>
    </div>
</form>

@endsection

@section('scripts')
<script src="{{ asset('js/form.js') }}"></script>
@endsection