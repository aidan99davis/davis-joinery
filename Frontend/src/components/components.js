
import navbar from "./navigation/navbar";
import navlink from "./navigation/navlink";

export default {

    install: function(vue, options){
        var componentList = [
            {tag: 'nav-link', componentImport: navlink},
            {tag: 'nav-bar', componentImport: navbar},
        ]

        for(var c in componentList) {
            vue.component(c.tag, c.componentImport)
        }

    }
}