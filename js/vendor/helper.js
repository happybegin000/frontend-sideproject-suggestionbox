function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( typeof object[key] === 'object' ) {
            ++length;
        }
    }
    if (length-1<0){
      return 0;
    } else {
      return length-1;
    }
};