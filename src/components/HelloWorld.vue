<template>
  <div>
      <h1>{{ message }}</h1>
      <v-app>
          <v-main>
              <v-container>
                  <v-card>
                      <ValidationObserver ref="testForm" v-slot="{ handleSubmit }">
                            <form @submit.prevent="handleSubmit(submitForm)">
                                <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                                    <v-text-field label="Email" v-model="email" :error-messages="errors">
                                        <v-icon color="primary" small slot="prepend">$email</v-icon>
                                    </v-text-field>
                                </ValidationProvider>
                                <v-btn color="primary" type="submit">Submit</v-btn>
                            </form>
                        </ValidationObserver>
                  </v-card>
              </v-container>
          </v-main>
      </v-app>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            message: "Hello World",
            textField: "",
            email: ""
        }
    },
    components: {
        
    },
    methods: {
        submitForm() {
            console.log("hit");
            this.$refs.testForm.validate().then(success => {
                console.log("hit inside");
                if (!success) {
                    alert("Error");
                    return;
                }

                alert("All good!");
            });
        }
    }
}
</script>

<style>

</style>