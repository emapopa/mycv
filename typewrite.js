const aText = new Array(
    "hi, i'm Emanuel",
    "a Ux designer",
    "whith a background in frontend",
    "and this is",
    "My Portfolio"
    );
    let iSpeed = 100; 
    let iIndex = 0; 
    let iArrLength = aText[0].length; 
    let iScrollAt = 20; 
     
    let iTextPos = 0; 
    let sContents = ''; 
    let iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     let destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }