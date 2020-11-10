function updatePreview(){
let previewElement=document.getElementById("preview");
let editorValue=document.getElementById("editor").value;
let markedUpHTML=marked(editorValue);
previewElement.innerHTML=markedUpHTML;
}


function setDefault(){
    let defaultText=`\
# markdown previewer
## a markdown previewer
[Learn more about markdown previewer](https://www.facebook.com/)
<dl>
    <dt>Definition list</dt>
    <dd>is something people use something.</dd>
 </dl>
<dl>
    <dt> markdown in html</dt>
    <dd> does not work **very** well. use htnl<em>tags</em>,</dd>
</dl>

\`thank you for watching\`

\`\`\`
function example(){
    return multycode;
}
\`\`\`
- code
- is
- of 
- list
- item

>lasha

**bolded**

[![lasha image](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png)
    `;
    let editorField=document.getElementById("editor");    
    let previewElement=document.getElementById("preview");
    editorField.value=defaultText;
    previewElement.innerHTML=marked(defaultText);
    
}