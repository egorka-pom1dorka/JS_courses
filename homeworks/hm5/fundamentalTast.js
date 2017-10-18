var tagsAmount = 0, textNodesAmount = 0, commentsAmount = 0, len, childs;

var countDocumentElements = function(childs){
	len = childs.length;
	// console.log(len);
	if(!len){
		return;
	}

	for(var i = 0; i < len; i++){
		// console.log(childs[i]);
		if(childs[i].nodeType == document.ELEMENT_NODE){
			tagsAmount++;
			countDocumentElements(childs[i].childNodes);
		}

		if(childs[i].nodeType == document.TEXT_NODE){
			textNodesAmount++;
		}

		if(childs[i].nodeType == document.COMMENT_NODE){
			commentsAmount++;
		}

	}
		
}

countDocumentElements(document.childNodes);

console.log("Tags - " + tagsAmount);
console.log("Text nodes - " + textNodesAmount);
console.log("Comments - " + commentsAmount);