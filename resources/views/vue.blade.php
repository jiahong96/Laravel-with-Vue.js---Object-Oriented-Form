@extends('layouts.app')

@section('content')

<example></example>

<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                	<p v-text="title"></p>
                    <ul>
                        <li v-for="skill in skills" v-text="skill"></li>    
                    </ul>    
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')
<script src="{{ asset('js/app.js') }}"></script>
@endsection