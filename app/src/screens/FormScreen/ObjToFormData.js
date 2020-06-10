export default objectToFormData = function(obj, form, namespace) {
    
    var fd = form || new FormData();
    var formKey;
    
    for(var property in obj) {
      if(obj.hasOwnProperty(property)) {
        
        if(namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
       
        if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          objectToFormData(obj[property], fd, property);
        } else {
          fd.append(formKey, obj[property]);
        }
      }
    }
    return fd;
  };
  