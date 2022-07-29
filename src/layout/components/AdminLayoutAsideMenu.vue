<script>
import {Menu,Submenu,MenuItem} from 'element-ui';

export default {
  name: 'AdminLayoutAsideMenu',
  props:{
    dataSource:{
      type: Array,
      default: ()=>{
        return [];
      }
    },
    collapse:{
      type:Boolean
    }
  },
  data(){
    return {
    };
  },
  methods:{
    renderIcon(h,item){
      return item.icon ? h('i',{
        attrs:{
          class:item.icon
        }
      }):null;
    },
    renderSubMenu(h,item){
      let menuItems = [
        h('template',{
          slot:'title'
        },[
          this.renderIcon(h,item),
          h('span',{},item.title)
        ])
      ];
      menuItems.push(this.renderMenu(h,item.children));
      return h(Submenu,{
        props:{
          index: item.path
        }
      },menuItems);
    },
    renderMenuItem(h,item){
      return h(MenuItem,{
        props:{
          index: item.path
        }
      },[
        this.renderIcon(h,item),
        h('span',{
          slot:'title'
        },item.title)
      ]);
    },
    renderMenu(h,items){
      let result = [];
      items.forEach((item)=>{
        if(item.children && item.children.length > 0){
          result.push(this.renderSubMenu(h,item));
        }else {
          result.push(this.renderMenuItem(h,item));
        }
      });
      return result;
    },
    getActiveRoute(maxLevel=3){
      const route = this.$route;
      if(!route.path){
        return '';
      }
      return route.path
        .split('/')
        .filter((_item,index)=>index <= maxLevel && index > 0)
        .map((item)=>`/${item}`)
        .join('');
    }
  },
  render(h){
    const activeRoute = this.getActiveRoute();
    return h(Menu,{
      props:{
        textColor:'#ffffff',
        backgroundColor:'#001529',
        collapseTransition:false,
        router:true,
        defaultActive:activeRoute,
        collapse:this.collapse,
      },
      on:{
      }
    },this.renderMenu(h,this.dataSource));
  }
};
</script>