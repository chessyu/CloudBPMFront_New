
import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
//import { QueryComonentData } from '@/types/views/queryComonent.interface'

@Component({
  name:"queryComonent"
})
export default class QueryComonent extends Vue {
  data : object = {
    componentName : "asdfasdf"
  }
}
