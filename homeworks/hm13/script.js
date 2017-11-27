var div = document.getElementById('work-area');
div.contentEditable = true;

var commands = ['bold', 'italic', 'underline', 'justifyleft', 'justifycenter', 'justifyright', 'insertunorderedlist',
 'insertorderedlist'];
var elems = ['bold', 'cursive', 'underline', 'align-left', 'align-center', 'align-right', 'ul', 'ol'];
var valuedCmds = ['fontsize', 'fontname', 'forecolor', 'backcolor'];
var elemsForValued = ['font-size', 'font-name', 'font-color', 'font-back']

var execCmd = function(id, event, title, flag = false){
	document.getElementById(id).addEventListener(event, function(){
		if(!flag){
			document.execCommand(title, false);
		}else{
			document.execCommand(title, false, this.value);
		}
	});
}

execCmd('bold', 'click', 'bold');
execCmd('cursive', 'click', 'italic');
execCmd('underline', 'click', 'underline');
execCmd('font-size', 'change', 'fontsize', 1);
execCmd('font-name', 'change', 'fontname', 1);
execCmd('hr', 'click', 'inserthorizontalrule');
execCmd('ul', 'click', 'insertunorderedlist');
execCmd('ol', 'click', 'insertorderedlist');
execCmd('font-color', 'change', 'forecolor', 1);
execCmd('font-back', 'change', 'backcolor', 1);
execCmd('align-left', 'click', 'justifyleft');
execCmd('align-center', 'click', 'justifycenter');
execCmd('align-right', 'click', 'justifyright');
execCmd('indent', 'click', 'indent');
execCmd('outdent', 'click', 'outdent');
execCmd('reset', 'click', 'removeformat');

document.getElementById('link').addEventListener('click', function(){
	var str = prompt('Введите ссылку');
	document.execCommand('createlink', false, str);
});

div.addEventListener('mousedown', function(){
	var len = commands.length;
	for(var i = 0; i < len; i++){
		if( document.queryCommandState(commands[i]) ){
			document.getElementById(elems[i]).classList.add('active');
		}else{
			document.getElementById(elems[i]).classList.remove('active');
		}
	}

	len = valuedCmds.length;
	for(var i = 0; i < len; i++){
		document.getElementById(elemsForValued[i]).nextElementSibling.innerText =  document.queryCommandValue(valuedCmds[i]);
	}

});

