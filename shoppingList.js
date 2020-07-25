<!DOCTYPE html>
<html style='width:100%; height:100%;'>
<style src="shoppingList.css"></style>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
  <meta http-equiv="X-UA-Compatible" content="IE=7,IE=9" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
<title>רשימת קניות</title>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-firestore.js"></script>

<script src="https://polyfill.io/v3/polyfill.js?features=es5,es6,es7&flags=gated"></script>  
<link rel= 'stylesheet' href= 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'> 
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://polyfill.io/v3/polyfill.js?features=es5,es6,es7&flags=gated"></script> 

</head>

<body style='width:100%; height:95%;' scrolling='no' dir="rtl">
<div id="app">
    <v-app right style="
    background-image: url('https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
      <v-main>

        <v-container>
          <v-layout row justify-center class="ma-5">
            <v-flex xs12 sm8>

              <v-card>
                <v-toolbar color="blue darken-4" dark>
                  <v-toolbar-title class="headline">רשימת קניות שלומית ויובב</v-toolbar-title>
                </v-toolbar>
                <v-list two-line subheader>
                  <v-container>
                    <v-subheader class="headline">{{today}}</v-subheader>
                    <v-spacer></v-spacer>
  
                    <p class="text-xs-right"><b>{{todos.length}}</b> מוצרים</p>
  
                    <v-flex xs12>
                      <v-combobox right clearable v-model="newTodo" :items="historylist" id="newTodo" name="newTodo" placeholder="הוספת מוצר חדש" @keyup.enter="addTodo"
                        :search-input.sync="search"
                        hide-selected
                      ></v-combobox>
                    </v-flex>
                  </v-container>
                  <v-subheader class="subheading" v-if="todos.length == 0">יש 0 מוצרים ברשימה. הוסף מוצר</v-subheader>
                  <div v-for="(todo, i) in todos">
                    <v-list-item>
                      <v-list-item-action>
                        <v-checkbox v-model="todo.done" @change="cbxChanged(i)"></v-checkbox>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title :class="{
                    done: todo.done
                    }" class="title">{{todo.title | capitalize}}
                        </v-list-item-title>
                        <v-list-item-subtitle>נוסף ב: {{todo.date_added}}</v-list-item-subtitle>
                      </v-list-item-content>
                      <v-btn icon ripple color="red" model="todo.checked"  v-if="todo.done" @click="removeTodo(i)">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-list-item>
                  </div>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container >
      </v-main>
    </v-app>
  </div>

  
<script>



    // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyALRhddmPlSwsLhu5AM2zfH9vBOdt2nl9c",
        authDomain: "shoppinglistyovavshlomit.firebaseapp.com",
        databaseURL: "https://shoppinglistyovavshlomit.firebaseio.com",
        projectId: "shoppinglistyovavshlomit",
        storageBucket: "shoppinglistyovavshlomit.appspot.com",
        messagingSenderId: "853766808794",
        appId: "1:853766808794:web:a7214f361f0924ea23f1e3",
        measurementId: "G-C2M54TN4KG"
          };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore();
  
  
  
  
  </script>
  <script src="shoppingList.js"></script>
</body>
</html>
