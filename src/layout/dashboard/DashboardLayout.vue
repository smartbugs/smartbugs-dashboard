<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/analyze" :name="'run analysis'" icon="tim-icons icon-zoom-split" />
        <sidebar-link to="/tools" :name="'tools'" icon="tim-icons icon-bullet-list-67" />
        <sidebar-link to="/dataset" :name="'dataset'" icon="tim-icons icon-single-copy-04" />
        <sidebar-link
          to="/vulnerabilities"
          :name="'vulnerabilities'"
          icon="tim-icons icon-paper"
        />
        <sidebar-link to="/about" :name="'about'" icon="tim-icons icon-satisfied" />
      </template>
    </side-bar>
    <div class="main-panel">
      <dashboard-content @click.native="toggleSidebar"></dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
