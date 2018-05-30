<template>
  <v-app>
    <v-toolbar>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title class="hidden-lg-md-sm-only">TuMangaKnarias</v-toolbar-title>
      </router-link>
      <v-toolbar-items class="hidden-lg-md-sm-only ml-5">
        <router-link to="/mangas" tag="span" style="cursor: pointer" class="mt-4">
          <v-btn flat>
            {{ 'Library' | translate }}
          </v-btn>
        </router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-select
          class="hidden-lg-md-sm-only"
          name="selectLanguages"
          :items="languages"
          v-model="select"
          label="Select"
          item-text="lang"
          item-value="id"
          single-line
          auto
          hide-selected
          hide-details
          v-on:change="onChange"
        ></v-select>
      </v-flex>
      <v-toolbar-items class="hidden-lg-md-sm-only">
        <router-link to="/login" tag="span" style="cursor: pointer" class="mt-4">
          <v-btn flat>
            <v-icon left>person</v-icon>
            {{ 'Login' | translate }}
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    var navigatorLanguage = navigator.language.substring(0, 2);
    return {
      select: { id: navigatorLanguage },
      languages: [{ lang: "Spanish", id: "es" }, { lang: "English", id: "en" }]
    };
  },
  methods: {
    onChange: function(e) {
      this.$i18n.set(e);
    }
  }
};
</script>
