declare module 'CustomVue' {
  import { GlobalComponents } from 'vue'
  export interface CustomVue extends GlobalComponents {
    HotSearch: typeof import('./HotSearch.vue')['default']
    HistoryNote: typeof import('./HistoryNote.vue')['default']
    SearchBar: typeof import('./SearchBar.vue')['default']
  }
}
