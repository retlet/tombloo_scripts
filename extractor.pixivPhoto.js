(function() {
Tombloo.Service.extractors.register({
  name : 'Photo - pixiv',
  ICON : 'http://www.pixiv.net/favicon.ico',
  URL  : 'http://www.pixiv.net/',
  check : function(ctx){
        return ctx.onImage && 
            ctx.target.src.match(/^http:\/\/img\d+.pixiv.net\/img\//);
  },
  extract : function(ctx){
        if($x('//a[contains(@href, "mode=manga")]')) {
            ctx.target = {
                src : ctx.target.src.replace(/_(?:m|s|100)\.(png|gif|jpe?g)$/, '_p0.$1'),
            };            
        } else {
            ctx.target = {
                src : ctx.target.src.replace(/_(?:m|s|100)\.(png|gif|jpe?g)$/, '.$1'),
            };
        }
        return Tombloo.Service.extractors['Photo - Upload from Cache2'].extract(ctx);
  },
}, 'Photo', false);
})();
