import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Analyze = () => import(/* webpackChunkName: "dashboard" */"@/pages/Analyze.vue");
const AnalyzeDataset = () => import(/* webpackChunkName: "common" */ "@/pages/AnalyzeDataset.vue");
const AnalyzeImportedFile = () => import(/* webpackChunkName: "common" */ "@/pages/AnalyzeImportedFile.vue");
const AnalyzePastedFile = () => import(/* webpackChunkName: "common" */ "@/pages/AnalyzePastedFile.vue");
const About = () => import(/* webpackChunkName: "common" */"@/pages/About.vue");
const VulnerabilitiesMapping = () => import(/* webpackChunkName: "common" */"@/pages/VulnerabilitiesMapping.vue");
const Tools = () => import(/* webpackChunkName: "common" */"@/pages/Tools.vue");
const Dataset = () => import(/* webpackChunkName: "common" */"@/pages/OurDataset.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/analyze",
    children: [
      {
        path: "analyze",
        name: "analyze",
        component: Analyze
      },
      {
        path: "analyze-import",
        name: "analyze-imported-file",
        component: AnalyzeImportedFile
      },
      {
        path: "analyze-input",
        name: "analyze-pasted-file",
        component: AnalyzePastedFile
      },
      {
        path: "analyze-dataset",
        name: "analyze-dataset",
        component: AnalyzeDataset
      },
      {
        path: "about",
        name: "about",
        component: About
      },
      {
        path: "vulnerabilities",
        name: "vulnerabilities",
        component: VulnerabilitiesMapping
      },
      {
        path: "tools",
        name: "tools",
        component: Tools
      },
      {
        path: "dataset",
        name: "dataset",
        component: Dataset
      },
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
