DasomEditorSite.MAIN=METHOD({run:(e,t)=>{let n=require("less"),o=NSP.Bridge({rootPath:"./DasomEditorSite/view",templateEngine:SML.Compile}).requestListener;e(o),t({extension:"less",preprocessor:(e,t)=>{n.render(e,(e,n)=>{t({content:n.css,contentType:"text/css",version:CONFIG.version})})}})}});