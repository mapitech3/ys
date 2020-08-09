<!DOCTYPE html>
<html style='width:100%; height:100%;'>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
  <meta http-equiv="X-UA-Compatible" content="IE=7,IE=9" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style scoped>
    .v-progress-circular {
      margin: 1rem;
    }
    </style>
<title>מי ראשון למקלחת</title>

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
    <v-app right style='background-image: url("Lottery.jpg");'>
      <v-main>

        <v-container>

          <v-app-bar color="rgba(255, 255, 255, 0.8)" class="my-2">

          <v-dialog
          v-model="dialog"
          max-width="600"
        >

          <!--  stepper -->

          <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"> רישום משתמש </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"> הזנת פרטי משתמש </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"> הזנת משתתפים</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
          <v-stepper-content step="1">
              <v-form
              ref="form"
              v-model="form"
              class="pa-4 pt-6"
            >

            <v-text-field
            v-model="family"
            right
            single-line
            solo
            placeholder="שם משפחה"
          ></v-text-field>

            <v-text-field
              v-model="email"
              right
              :rules="[rules.email]"
              single-line
              solo
              placeholder="מייל"
              type="email"
            ></v-text-field>

            <v-text-field
            v-model="password"
            right
            :rules="[rules.password]"
            single-line
            solo
            placeholder="סיסמא"
            style="min-height: 96px"
            type="password"
          ></v-text-field>
        </v-form>
        <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="green"
        depressed
          color="primary"
          text
          @click="signUp"
        >
          שמור
        </v-btn>
        <v-btn id="clearForm"
        color="red"
        text
        @click="reset"
      >
        בטל
      </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 2"
          :disabled='isDisabled'
        >
          הבא
          <v-icon
          class="ml-1"
          small
        >mdi-arrow-left</v-icon>
        </v-btn>

        
      </v-stepper-content>

      <v-stepper-content step="2">
          <v-radio-group v-model="parent" row>
            מי נרשם?
            <v-radio label="אמא" value="אמא"></v-radio>
            <v-radio label="אבא" value="אבא"></v-radio>
          </v-radio-group>
          <v-file-input v-model="files"
            placeholder="הוספת תמונה"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
          ></v-file-input>
       
            </v-card-text>
          </v-form>  
              <v-btn
              :disabled="!isImageDone"
              :loading="isLoading"
              class="white--text"
              color="green"
              color="green"
              depressed
                color="primary"
                text
                @click="loadImage"
              >
                שמור
              </v-btn>
              <v-btn id="clearForm2"
              text
              color="red"
              @click="$refs.form.reset()"
            >
              בטל
            </v-btn>

        <v-btn color="primary"
        @click="e1 = 1">
        הקודם
                  
        <v-icon
        class="ml-1"
        small
      >mdi-arrow-right</v-icon>
      </v-btn>
        <v-btn
          color="primary"
          @click="e1 = 3"
          :disabled='isDisabled2'
        >
          הבא
          <v-icon
          class="ml-1"
          small
        >mdi-arrow-left</v-icon>
        </v-btn>

       
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-form
        ref="form"
        v-model="form"
        class="pa-4 pt-6"
      >


    <v-row justify="center">
      <v-dialog v-model="addPersonDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          מי משתתף בהגרלה?
          <v-btn
          :disabled="!isImageDone"
            color="green"
            v-bind="attrs"
            v-on="on"
            dark
          >
          הוספת משתתפים (הורים או ילדים)
          <v-icon
          class="ml-1"
          small
        >mdi-plus</v-icon>
        </v-btn>

        <v-row dense>

  
          <v-col
            v-for="(item, i) in familycards"
            :key="i"
            cols="12"
          >
            <v-card>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.name"
                  ></v-card-title>
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.image"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>


        </template>
        <v-card>
          <v-card-title>
            <span class="headline">פרטים</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="personName" placeholder="שם" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model=gender
                    :items="['בן', 'בת']"
                    placeholder="בן או בת"
                    required
                  ></v-select>
                </v-col>
                 <v-col cols="12" sm="6">
                  <v-file-input v-model="personFiles"
                  placeholder="הוספת תמונה"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                ></v-file-input>
                 </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addPersonDialog = false">סגירה</v-btn>
            <v-btn color="blue darken-1" text @click="loadPersonImage">שמירה</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>


      </v-form>


        <v-btn color="primary" @click="e1 = 2"
        >הקודם</v-btn>
        <v-btn
          :disabled="!isImageDone"
          color="primary"
          @click="doneRegisting"
        >
          סיום
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>


  <template v-slot:activator="{ on, attrs }">
  <v-btn text small strong v-bind="attrs"
  v-on="on">הרשמה</v-btn>
</template>
 </v-dialog>


 <v-dialog v-model="err">
  <v-alert
  dense
  type="error"
>
  ניתן להכנס כמשתמש  <strong>רשום</strong> בלבד
</v-alert>
</v-dialog>


<v-dialog v-model="scss">
  <v-alert
  dense
  type="success"
>
  הרישום בוצע  <strong>בהצלחה</strong> !
</v-alert>
</v-dialog>


          <div id="enter">
            <v-btn text small 
            @click="login=true" > כניסה 
            <v-icon
            class="ml-1"
            small
          >mdi-arrow-left
          </v-icon></v-btn>
          </div>


          <div id="exit" hidden="true">
            <v-btn text small 
            @click="signOut" > יציאה 
            <v-icon
            class="ml-1"
            small
          >mdi-arrow-right
          </v-icon></v-btn>

          </div>



          <div style="margin-top: 17px; font-size: small;"><p class="center text small" >{{welcome}}</p></div>
          

          </v-app-bar>


        <v-dialog
        v-model="login"
        max-width="600">
          <v-form
          ref="form"
          v-model="form"
          class="pa-4 pt-6"
        >

        <v-text-field
          v-model="email"
          right
          single-line
          solo
          placeholder="מייל"
          type="email"
        ></v-text-field>

        <v-text-field
        v-model="password"
        right
        single-line
        solo
        placeholder="סיסמא"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
    </v-form>
    <v-btn color="purple" dark @click="loginPerson">כניסה</v-btn>
  </v-dialog>




          <v-layout row justify-center class="ma-5">
            <v-flex xs12 sm8>
                <div class="my-2" center style="width:100%">
                  <v-btn block x-large tile rounded color="purple" dark @click="Changed()"  > <h2>{{title}}</h2></v-btn>

                  <div class="text-center" id="circles" hidden="true">
                    <div>
                    <v-progress-circular
                      :size="70"
                      :width="7"
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                    </div>
                    <div>
                    <v-progress-circular
                    :size="70"
                    :width="7"
                      indeterminate
                      color="red"
                    ></v-progress-circular>
                    </div>
                
                    <div>
                    <v-progress-circular
                    :size="70"
                    :width="7"
                      indeterminate
                      color="purple"
                    ></v-progress-circular>
                    </div>
                
                    <div>
                    <v-progress-circular
                    :size="70"
                    :width="7"
                      indeterminate
                      color="green"
                    ></v-progress-circular>
                    </div>
                
                    <div>
                    <v-progress-circular
                    :size="70"
                    :width="7"
                      indeterminate
                      color="amber"
                    ></v-progress-circular>
                  </div>
                  </div>


                  <div class="text-center" id="faces" hidden="true">
                  <v-row dense>
                    <v-col
                      v-for="card in familycards"
                      :key="card.name"
                      :cols="card.flex"
                    >
                    <v-card-title class="white--text align-center" v-text="card.name + ' ' + (order_dictionary[familycards.indexOf(card) + '_' +card.gen])"></v-card-title>
                      <v-card>
                        <v-img
                          :src="card.image"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                        >
                         
                        </v-img>
                       
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                  </v-row>
                </div>
            </v-flex>
          </v-layout>




          <v-row
          align-content="center"
          justify="center"
          hidden
        >
          <v-col cols="12"
            class="h-3 text-center white--text"
            cols="12"
          >
            {{loading_text}}
          </v-col>
          <v-col cols="12">
            <v-progress-linear
              :active="loading"
              :indeterminate="loading"
              height="20"
              value="45"
              striped
              color="lime"
            ></v-progress-linear>
          </v-col>
        </v-row>


        </v-container >
      </v-main>
    </v-app>
  </div>




  <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-functions.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-storage.js"></script>
  <script>



    // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyDTSUZ0saACPIdRk6qImBVynOoyjUUUwto",
    authDomain: "nextshower.firebaseapp.com",
    databaseURL: "https://nextshower.firebaseio.com",
    projectId: "nextshower",
    storageBucket: "nextshower.appspot.com",
    messagingSenderId: "214332823020",
    appId: "1:214332823020:web:d5ff03e441b0261bc25cc9",
    measurementId: "G-XHFXXM6X1R"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  
  </script>
  <script src="NextShower.js"></script>


</body>
</html>
