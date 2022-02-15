function styleInPage(css, verbose){
    if(typeof getComputedStyle== "undefined")
        getComputedStyle= function(elem){
            return elem.currentStyle;
        }
    var who, hoo, values= [], val,
        nodes= document.body.getElementsByTagName('*'),
        L= nodes.length;
    for(var i= 0; i<L; i++){

        who= nodes[i];
        if(who.style){
            hoo= '#'+(who.id || who.nodeName+'('+i+')');
            val= who.style.fontFamily || getComputedStyle(who, '')[css];
            if(val){
                if(verbose) values.push([hoo, val]);
                else if(values.indexOf(val)== -1) values.push(val);
            }
            val_before = getComputedStyle(who, ':before')[css];
            if(val_before){
                if(verbose) values.push([hoo, val_before]);
                else if(values.indexOf(val_before)== -1) values.push(val_before);
            }
            val_after= getComputedStyle(who, ':after')[css];
            if(val_after){
                if(verbose) values.push([hoo, val_after]);
                else if(values.indexOf(val_after)== -1) values.push(val_after);
            }
        }
    }

    return values;
}

// var downloading =styleInPage('fontFamily');
// downloading
// console.log(styleInPage('fontFamily'));// returns array:
var x=styleInPage('fonts');
console.log(x)