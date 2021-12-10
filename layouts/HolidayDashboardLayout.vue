<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Earnings',
            path: '/earnings',
            icon: 'ni ni-shop text-primary',
          }"
        >

        </sidebar-item>
        <sidebar-item :link="{
                  name: 'Stake',
                  path: '/components/cards',
                  icon: 'ni ni-ungroup text-orange'
                  }">
        </sidebar-item>
        <sidebar-item :link="{
                  name: 'Farm',
                  path: '/tables/paginated',
                  icon: 'ni ni-ui-04 text-info'
                }">
        </sidebar-item>
      </template>

      <template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <ul class="navbar-nav mb-md-3">
          <li class="nav-item">
            <a class="nav-link" href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation"
               target="_blank" rel="noopener">
              <i class="ni ni-spaceship"></i>
              <span class="nav-link-text">Getting started</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/foundation/colors.html"
               target="_blank" rel="noopener">
              <i class="ni ni-palette"></i>
              <span class="nav-link-text">Foundation</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/avatars.html"
               target="_blank" rel="noopener">
              <i class="ni ni-ui-04"></i>
              <span class="nav-link-text">Components</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               href="https://demos.creative-tim.com/nuxt-argon-dashboard-pro/documentation/components/plugin_datepicker.html"
               target="_blank" rel="noopener">
              <i class="ni ni-chart-pie-35"></i>
              <span class="nav-link-text">Plugins</span>
            </a>
          </li>
        </ul>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.name === 'alternative' ? 'light': 'default'"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <nuxt></nuxt>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from '~/components/layouts/holiday/DashboardNavbar.vue';
  import ContentFooter from '~/components/layouts/argon/ContentFooter.vue';
  import DashboardContent from '~/components/layouts/argon/Content.vue';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('navbar-inner');
          initScrollbar('main-content');
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
</style>
