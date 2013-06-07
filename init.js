 /**
 *  Codiad GitTools by Kent Safranski (@fluidbyte) <http://www.fluidbyte.net>
 * 
 *  This plugin/code is release competely free of any license or restrictions.
 *  The software is released AS-IS without any waranty.
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.gittools.init();
    });

    codiad.gittools = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        init: function() {

            // Start your plugin here...

        },
        
        open: function() {
            
            alert('Called!');
            
        }

    };

})(this, jQuery);